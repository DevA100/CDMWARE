import Image from "next/image";
import type { CaseStudy } from "@/content/site";
import { CircuitPattern } from "./sections";

/** A case study's image, or a branded placeholder until a real one is added. */
export function CaseVisual({ study, priority }: { study: CaseStudy; priority?: boolean }) {
  if (study.image) {
    return (
      <Image
        src={study.image}
        alt={`${study.title} project screenshot`}
        width={1200}
        height={750}
        priority={priority}
        className="aspect-[16/10] h-auto w-full bg-surface object-cover"
      />
    );
  }
  return (
    <div className="relative isolate grid aspect-[16/10] w-full place-items-center overflow-hidden bg-muted text-ink" aria-hidden="true">
      <CircuitPattern className="absolute -right-6 -bottom-6 -z-10 h-48 w-48 opacity-30" />
      <span className="px-6 text-center font-display text-h2 font-extrabold">{study.category}</span>
    </div>
  );
}
