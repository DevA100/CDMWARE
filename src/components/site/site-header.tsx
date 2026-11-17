"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CruiseNavbar } from "@/components/cruise/navbar";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { nav } from "@/content/site";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const links = nav.map((l) => ({
    ...l,
    active: pathname === l.href || pathname.startsWith(`${l.href}/`),
  }));

  const cta = (
    <Link href="/contact" className={cruiseButtonClasses({ variant: "primary" })}>
      Start a project <ArrowRight aria-hidden="true" />
    </Link>
  );

  return (
    <CruiseNavbar
      className="sticky top-0 z-40"
      logo={<Logo />}
      links={links}
      actions={cta}
      menuBelow="lg"
    />
  );
}
