import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "CDMWare case studies";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "Case studies", title: "Software, design & marketing projects we've delivered" });
}
