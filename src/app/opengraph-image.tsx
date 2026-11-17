import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "CDMWare: AI-powered software, design and digital marketing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ label: "AI-powered digital solutions", title: "AI-Powered Software, Design & Digital Marketing" });
}
