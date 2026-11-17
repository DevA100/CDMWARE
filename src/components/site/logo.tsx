import Image from "next/image";
import { site } from "@/content/site";

/** The CDMware wordmark. `tone="light"` is for navy backgrounds. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Image
      src={tone === "light" ? "/brand/logo-light.png" : "/brand/logo.png"}
      alt={site.name}
      width={868}
      height={203}
      priority
      className={`cdm-logo ${className ?? "h-9 w-auto md:h-10"}`}
    />
  );
}
