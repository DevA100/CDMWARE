import { ourWork, site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.name} case studies`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: ourWork.crumb, title: ourWork.title });
}
