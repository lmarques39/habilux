// One-time seed: uploads Imovirtual listings to Sanity CMS.
// Run: node scripts/seed-sanity.mjs
// Requires: SANITY_API_TOKEN in .env.local (write token from sanity.io/manage)

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";

// Parse .env.local without requiring dotenv
function loadEnvFile(filePath) {
  try {
    const lines = readFileSync(filePath, "utf-8").split("\n");
    for (const line of lines) {
      const match = line.match(/^([^#=\s]+)\s*=\s*(.*)$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    // file not found — rely on already-set env vars
  }
}

loadEnvFile(resolve(process.cwd(), ".env.local"));

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const TOKEN = process.env.SANITY_API_TOKEN;

if (!PROJECT_ID) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
  process.exit(1);
}
if (!TOKEN) {
  console.error(
    "Missing SANITY_API_TOKEN in .env.local\n" +
      "Get a write token at: https://sanity.io/manage → your project → API → Tokens"
  );
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
// Playwright saves evaluate() results as JSON, so a return value that was already
// JSON.stringify()-ed gets double-encoded — parse twice if the first pass yields a string.
let listings = JSON.parse(
  readFileSync(join(__dirname, "imovirtual-listings.json"), "utf-8")
);
if (typeof listings === "string") listings = JSON.parse(listings);

async function fetchImage(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; SanitySeed/1.0)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get("content-type") || "image/jpeg";
  return { buffer, contentType };
}

async function uploadImage(url, filename) {
  const { buffer, contentType } = await fetchImage(url);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType,
  });
  return asset._id;
}

async function seedListing(listing, index) {
  const label = `[${String(index + 1).padStart(3, " ")}/${listings.length}] ${listing.title}`;
  process.stdout.write(`${label} … `);

  const imageRefs = [];
  for (let i = 0; i < listing.images.length; i++) {
    try {
      const assetId = await uploadImage(
        listing.images[i],
        `${listing.imovirtualId}-${i}.jpg`
      );
      imageRefs.push({
        _type: "image",
        _key: `img-${listing.imovirtualId}-${i}`,
        asset: { _type: "reference", _ref: assetId },
        hotspot: { _type: "sanity.imageHotspot", x: 0.5, y: 0.5, height: 1, width: 1 },
        crop: { _type: "sanity.imageCrop", top: 0, bottom: 0, left: 0, right: 0 },
      });
    } catch (err) {
      process.stdout.write(`[img${i} fail: ${err.message}] `);
    }
  }

  await client.createOrReplace({
    _type: "property",
    _id: `imovirtual-${listing.imovirtualId}`,
    title: listing.title,
    slug: { _type: "slug", current: listing.slug },
    type: listing.type,
    transaction: listing.transaction,
    price: listing.price,
    location: listing.location,
    ...(listing.area != null ? { area: listing.area } : {}),
    ...(listing.bedrooms != null ? { bedrooms: listing.bedrooms } : {}),
    description: listing.description,
    images: imageRefs,
  });

  console.log(`done (${imageRefs.length} images)`);
}

console.log(`\nSeeding ${listings.length} listings → Sanity project ${PROJECT_ID}/${DATASET}\n`);

// Sequential to respect Sanity rate limits
for (let i = 0; i < listings.length; i++) {
  try {
    await seedListing(listings[i], i);
  } catch (err) {
    console.error(`\n  ERROR: ${err.message}`);
  }
}

console.log("\n✅ Seed complete!");
