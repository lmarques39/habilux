import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300"],
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
      className={`${inter.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
