import { ImageResponse } from "next/og";

export const alt = "Habilux — Investimentos Imobiliários";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#1c1917",
          position: "relative",
          padding: "72px 80px",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#d4a843",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0" }}>
          {/* Eyebrow */}
          <p
            style={{
              color: "#d4a843",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "sans-serif",
            }}
          >
            Investimentos Imobiliários
          </p>

          {/* Logo */}
          <h1
            style={{
              color: "#ffffff",
              fontSize: "96px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "28px",
              fontFamily: "serif",
            }}
          >
            HABILUX
          </h1>

          {/* Divider */}
          <div
            style={{
              width: "64px",
              height: "2px",
              backgroundColor: "#d4a843",
              marginBottom: "28px",
            }}
          />

          {/* Tagline */}
          <p
            style={{
              color: "#a8a29e",
              fontSize: "22px",
              fontFamily: "sans-serif",
              fontWeight: 400,
            }}
          >
            Mediação imobiliária · Viana do Castelo · AMI 11192
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
