import { about, site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `About ${site.name}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: about.crumb, title: about.title });
}
