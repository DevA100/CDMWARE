import { ogLabels, site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.name} privacy policy`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: ogLabels.legal, title: "Privacy Policy" });
}
