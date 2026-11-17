import { insights, site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.name} insights`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: insights.crumb, title: insights.title });
}
