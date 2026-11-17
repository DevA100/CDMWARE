import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "CDMWare services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "Services", title: "End-to-end digital services" });
}
