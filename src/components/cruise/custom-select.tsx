"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import { useId, useRef } from "react";
import { cruiseMatchContext, cx } from "@/lib/cruise-utils";

export type CruiseSelectOption<V extends string> = { value: V; label: string; disabled?: boolean };

/**
 * Custom select, spec A5: for when the options need more than text, or the
 * select sits outside a form. In forms, prefer the native Select (phones
 * open their own picker). Base UI Select gives the listbox roles, arrow
 * keys, Home/End, typeahead and Esc; the chosen option shows a check.
 */
export function CruiseCustomSelect<V extends string>({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Choose…",
  hint,
  error,
  disabled,
  popupClassName,
  className,
}: {
  label: string;
  options: CruiseSelectOption<V>[];
  value?: V | null;
  defaultValue?: V | null;
  onValueChange?: (value: V | null) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  /** Extra classes on the list, e.g. "nepa-mode" (it renders in <body>). */
  popupClassName?: string;
  className?: string;
}) {
  const helpId = useId();
  const help = error ?? hint;
  const items = Object.fromEntries(options.map((o) => [o.value, o.label]));
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Base UI keeps this popup mounted after the first open, so match the
  // trigger's corners, city, mode and colours again on every open.
  const popupRef = useRef<HTMLDivElement | null>(null);

  return (
    <BaseSelect.Root
      items={items}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(next) => onValueChange?.(next as V | null)}
      disabled={disabled}
      onOpenChange={(open) => {
        if (open && popupRef.current) cruiseMatchContext(triggerRef.current, popupRef.current);
      }}
    >
      <div className={cx("field", className)}>
        <BaseSelect.Label className="field-label">{label}</BaseSelect.Label>
        <BaseSelect.Trigger
          ref={triggerRef}
          className="select select-trigger"
          aria-invalid={error ? true : undefined}
          aria-describedby={help ? helpId : undefined}
        >
          <BaseSelect.Value placeholder={placeholder} />
          <BaseSelect.Icon className="menu-chevron">
            <ChevronDown aria-hidden="true" className="size-5" strokeWidth={3} />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        {help && (
          <p id={helpId} className={error ? "field-error" : "field-help"}>
            {help}
          </p>
        )}
      </div>
      <BaseSelect.Portal>
        <BaseSelect.Positioner sideOffset={8} alignItemWithTrigger={false} className="z-70">
          <BaseSelect.Popup
            ref={(popup) => {
              popupRef.current = popup;
              if (popup) cruiseMatchContext(triggerRef.current, popup);
            }}
            className={cx("menu", popupClassName)}>
            {options.map((option) => (
              <BaseSelect.Item
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                label={option.label}
                className={(state) => cx("menu-item", state.highlighted && "on-primary")}
              >
                <Check aria-hidden="true" className="menu-check" strokeWidth={3} />
                <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
