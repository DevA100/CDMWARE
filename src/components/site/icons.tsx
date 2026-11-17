import {
  Building2,
  Code2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lightbulb,
  Megaphone,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "software-web-development": Code2,
  "creative-design": Palette,
  "digital-marketing": Megaphone,
  "it-consulting": Lightbulb,
};

export const industryIcons: Record<string, LucideIcon> = {
  "startups-smes": Rocket,
  corporate: Building2,
  ngos: HeartHandshake,
  education: GraduationCap,
  healthcare: HeartPulse,
  government: Landmark,
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
