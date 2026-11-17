"use client";

import { Menu } from "@base-ui/react/menu";
import { ChevronDown } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { cruiseButtonClasses, type CruiseButtonVariant } from "./button";
import { cruisePortalContext, cx } from "@/lib/cruise-utils";

export type CruiseMenuEntry =
  | {
      label: string;
      icon?: ReactNode;
      /** Shortcut or hint on the right, e.g. "Ctrl+D". */
      hint?: string;
      /** Destructive action (delete, sign out everywhere): --danger text. */
      danger?: boolean;
      disabled?: boolean;
      onSelect?: () => void;
      /** Makes the item a link. */
      href?: string;
    }
  | "separator";

/** Item class: the highlighted item is --primary, so it gets .on-primary. */
export const cruiseMenuItemClass = (state: { highlighted: boolean }) => cx("menu-item", state.highlighted && "on-primary");

/**
 * Dropdown menu, spec A5: a list of actions under a .brutal trigger. Base
 * UI Menu gives the roles, arrow keys, Home/End, typeahead, Enter/Space,
 * Esc back to the trigger, and flipping up when there's no room below.
 */
export function CruiseDropdownMenu({
  label,
  items,
  variant = "secondary",
  align = "start",
  popupClassName,
  className,
}: {
  /** Trigger text. */
  label: ReactNode;
  items: CruiseMenuEntry[];
  variant?: CruiseButtonVariant;
  align?: "start" | "end";
  /** Extra classes on the menu, e.g. "nepa-mode" (it renders in <body>). */
  popupClassName?: string;
  className?: string;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <Menu.Root>
      <Menu.Trigger ref={triggerRef} render={<button type="button" />} className={cx(cruiseButtonClasses({ variant }), className)}>
        {label}
        <ChevronDown aria-hidden="true" className="menu-chevron" strokeWidth={3} />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={8} align={align} className="z-70">
          <Menu.Popup ref={cruisePortalContext(triggerRef)} className={cx("menu", popupClassName)}>
            {items.map((item, i) => {
              if (item === "separator") return <Menu.Separator key={`sep-${i}`} className="menu-sep" />;
              const content = (
                <>
                  {item.icon}
                  <span>{item.label}</span>
                  {item.hint && <span className="menu-hint">{item.hint}</span>}
                </>
              );
              return item.href ? (
                <Menu.LinkItem key={item.label} href={item.href} label={item.label} className={cruiseMenuItemClass}>
                  {content}
                </Menu.LinkItem>
              ) : (
                <Menu.Item
                  key={item.label}
                  label={item.label}
                  disabled={item.disabled}
                  onClick={item.onSelect}
                  data-danger={item.danger ? "" : undefined}
                  className={cruiseMenuItemClass}
                >
                  {content}
                </Menu.Item>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
