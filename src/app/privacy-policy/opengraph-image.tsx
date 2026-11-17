import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "CDMWare privacy policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "Legal", title: "Privacy Policy" });
}
