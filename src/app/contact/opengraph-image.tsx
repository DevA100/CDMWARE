import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Contact CDMWare";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "Contact us", title: "Let's build something great" });
}
