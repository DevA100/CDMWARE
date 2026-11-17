import { Building2, BrainCircuit, Lightbulb, Rocket, Store, Workflow, type LucideIcon } from "lucide-react";
import type { AudienceId, ServiceId } from "@/content/site";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  "business-innovation": Lightbulb,
  "digital-innovation": Workflow,
  "ai-powered-engineering": BrainCircuit,
};

export const audienceIcons: Record<AudienceId, LucideIcon> = {
  "startups-founders": Rocket,
  smes: Store,
  "organizations-institutions": Building2,
};

/** A square gold chip holding an icon. */
export function IconChip({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={`on-primary inline-grid size-14 shrink-0 place-items-center rounded-brutal border-(length:--border-w) border-ink ${className ?? ""}`}
    >
      <Icon aria-hidden="true" strokeWidth={2.5} className="size-7" />
    </span>
  );
}
