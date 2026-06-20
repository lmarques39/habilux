import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://habilux.vercel.app"
  ),
  title: "Habilux — Investimentos Imobiliários",
  description:
    "Mediação imobiliária, promoção bancária e certificados energéticos em Viana do Castelo. Mais de 25 anos de experiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
