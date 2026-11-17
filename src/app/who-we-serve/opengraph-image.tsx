import { site, whoWeServe } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `Who ${site.name} works with`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: whoWeServe.crumb, title: whoWeServe.title });
}
