"use client";

import { Children, cloneElement, isValidElement, useRef, type CSSProperties, type ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";
import { useMarkInView } from "@/lib/use-mark-in-view";

/**
 * Cards drop into their shadow, staggered, the first time the group scrolls
 * into view (Cruise "drop", A8). A thin wrapper: it renders the list element
 * itself, gives each direct child `drop-item` and `--drop-i`, and sets
 * data-drop="run" once. Until then (or without JS) everything just shows.
 */
export function DropIn({
  as: Tag = "ul",
  className,
  children,
}: {
  as?: "ul" | "ol" | "div";
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useMarkInView(ref, "data-drop", "run");

  let index = 0;
  const items = Children.map(children, (child) => {
    if (!isValidElement<{ className?: string; style?: CSSProperties }>(child)) return child;
    const i = index++;
    return cloneElement(child, {
      className: cx(child.props.className, "drop-item"),
      style: { ...child.props.style, "--drop-i": i } as CSSProperties,
    });
  });

  return (
    <Tag ref={ref as never} className={className}>
      {items}
    </Tag>
  );
}
