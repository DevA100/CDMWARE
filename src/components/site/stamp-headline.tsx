"use client";

import { Fragment, useEffect, useRef } from "react";

/**
 * Hero headline "stamp" (Cruise A8): each word is an inline-block
 * .stamp-word (same box before and during), so the text wraps exactly as
 * plain text and is fully readable before JS. After mount, words are grouped
 * into lines by their offsetTop (--line), and .stamp-run starts the
 * line-by-line stamp. Runs once per mount.
 */
export function StampHeadline({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let line = -1;
    let lineTop = -Infinity;
    for (const word of root.querySelectorAll<HTMLElement>(".stamp-word")) {
      if (word.offsetTop > lineTop + 2) {
        line += 1;
        lineTop = word.offsetTop;
      }
      word.style.setProperty("--line", String(line));
    }
    root.classList.add("stamp-run");
  }, []);

  const words = text.split(" ");
  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="stamp-word">{word}</span>
        </Fragment>
      ))}
    </span>
  );
}
