import type { Viewport } from "next";
import StudioWrapper from "./StudioWrapper";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function StudioPage() {
  return <StudioWrapper />;
}
