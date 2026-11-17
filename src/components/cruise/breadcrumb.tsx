"use client";

import { Menu } from "@base-ui/react/menu";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment, useRef } from "react";
import { cruisePortalContext, cx } from "@/lib/cruise-utils";
import { cruiseMenuItemClass } from "./dropdown-menu";

export type CruiseCrumb = { label: string; href?: string };

function Separator({ kind }: { kind: "slash" | "chevron" }) {
  return (
    <span className="breadcrumb-sep" aria-hidden="true">
      {kind === "slash" ? "/" : <ChevronRight strokeWidth={3} />}
    </span>
  );
}

/**
 * Breadcrumb, spec A5: `.breadcrumb` in theme.css. The last item is the
 * current page (bold, not a link, aria-current="page"). Below 640px two or
 * more middle items collapse into a "…" button that lists them in a menu.
 */
export function CruiseBreadcrumb({
  items,
  separator = "chevron",
  popupClassName,
  className,
}: {
  items: CruiseCrumb[];
  separator?: "slash" | "chevron";
  /** Extra classes on the "…" menu, e.g. "nepa-mode" (it renders in <body>). */
  popupClassName?: string;
  className?: string;
}) {
  const middle = items.slice(1, -1);
  // One middle item fits; collapsing it would only hide it.
  const collapse = middle.length >= 2;
  const moreRef = useRef<HTMLButtonElement>(null);

  return (
    <nav aria-label="Breadcrumb" className={cx("breadcrumb", className)}>
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={`${item.label}|${i}`}>
              <li data-middle={collapse && i > 0 && !last ? "" : undefined}>
                {i > 0 && <Separator kind={separator} />}
                {last || !item.href ? (
                  <span aria-current={last ? "page" : undefined}>{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
              {i === 0 && collapse && (
                <li className="breadcrumb-more-item">
                  <Separator kind={separator} />
                  <Menu.Root>
                    <Menu.Trigger
                      ref={moreRef}
                      render={<button type="button" />}
                      className="breadcrumb-more"
                      aria-label={`Show ${middle.length} more pages`}
                    >
                      …
                    </Menu.Trigger>
                    <Menu.Portal>
                      <Menu.Positioner sideOffset={8} align="start" className="z-70">
                        <Menu.Popup ref={cruisePortalContext(moreRef)} className={cx("menu", popupClassName)}>
                          {middle.map((crumb) => (
                            <Menu.LinkItem key={crumb.label} href={crumb.href} label={crumb.label} className={cruiseMenuItemClass}>
                              {crumb.label}
                            </Menu.LinkItem>
                          ))}
                        </Menu.Popup>
                      </Menu.Positioner>
                    </Menu.Portal>
                  </Menu.Root>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
