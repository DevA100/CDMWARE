import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Industries CDMWare works with";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "Industries", title: "Industry-specific digital solutions" });
}
