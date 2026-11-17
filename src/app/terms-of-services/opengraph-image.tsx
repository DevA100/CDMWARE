import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "CDMWare terms of services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "Legal", title: "Terms of Services" });
}
