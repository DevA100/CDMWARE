import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About CDMWare";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "About us", title: "A Lagos-based digital solutions company" });
}
