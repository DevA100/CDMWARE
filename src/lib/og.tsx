import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

/**
 * Shared design for every link-preview image (opengraph-image.tsx files).
 * The font and logo are read once at module scope, so the images are
 * generated statically at build time.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const NAVY = "#0F0F47";
const GOLD = "#DBAE25";
const LIGHT_BLUE = "#D2EDF8";

const PAD_X = 72;
const TITLE_MAX_WIDTH = ogSize.width - PAD_X * 2;
const TITLE_MAX_HEIGHT = 250;
const TITLE_MAX_LINES = 3;
const LINE_HEIGHT = 1.08;

const baloo = await readFile(join(process.cwd(), "src/assets/fonts/Baloo2-ExtraBold.ttf"));
const logoData = await readFile(join(process.cwd(), "public/brand/logo-light.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;
// logo-light.png is 868 x 203.
const LOGO_HEIGHT = 56;
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * 868) / 203);

/** Rough glyph widths for Baloo 2 ExtraBold, in em. Errs on the wide side. */
function charWidth(ch: string): number {
  if (ch === " ") return 0.26;
  if ("WM".includes(ch)) return 0.9;
  if ("mw".includes(ch)) return 0.8;
  if ("iljtfI.,:;'!|".includes(ch)) return 0.32;
  if (/[A-Z&]/.test(ch)) return 0.66;
  return 0.55;
}

function wordWidth(word: string, fontSize: number): number {
  let w = 0;
  for (const ch of word) w += charWidth(ch);
  return w * fontSize;
}

/** Greedy word wrap; returns the number of lines, or Infinity if a word doesn't fit. */
function countLines(text: string, fontSize: number): number {
  const space = charWidth(" ") * fontSize;
  let lines = 1;
  let lineWidth = 0;
  for (const word of text.split(/\s+/)) {
    const w = wordWidth(word, fontSize);
    if (w > TITLE_MAX_WIDTH) return Infinity;
    const next = lineWidth === 0 ? w : lineWidth + space + w;
    if (next > TITLE_MAX_WIDTH) {
      lines += 1;
      lineWidth = w;
    } else {
      lineWidth = next;
    }
  }
  return lines;
}

/** The largest font size at which the title fits the title area. */
function titleFontSize(title: string): number {
  for (let size = 96; size > 40; size -= 4) {
    const lines = countLines(title, size);
    if (lines <= TITLE_MAX_LINES && lines * size * LINE_HEIGHT <= TITLE_MAX_HEIGHT) return size;
  }
  return 40;
}

export function renderOgImage({ label, title }: { label: string; title: string }) {
  const fontSize = titleFontSize(title);
  const domain = new URL(site.url).hostname;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: NAVY,
          fontFamily: "Baloo 2",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: `56px ${PAD_X}px 36px`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img src={logoSrc} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="" />

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                background: GOLD,
                color: NAVY,
                fontSize: 26,
                lineHeight: 1,
                padding: "10px 18px 6px",
                borderRadius: 6,
              }}
            >
              {label}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                maxWidth: TITLE_MAX_WIDTH,
                color: "white",
                fontSize,
                lineHeight: LINE_HEIGHT,
                letterSpacing: -0.5,
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 30,
              lineHeight: 1,
            }}
          >
            <span style={{ color: LIGHT_BLUE }}>{site.tagline}</span>
            <span style={{ color: GOLD }}>{domain}</span>
          </div>
        </div>

        {/* Signature band: gold stripe with two navy bands. */}
        <div style={{ display: "flex", flexDirection: "column", height: 40, background: GOLD }}>
          <div style={{ height: 8, marginTop: 8, background: NAVY }} />
          <div style={{ height: 8, marginTop: 8, background: NAVY }} />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Baloo 2", data: baloo, weight: 800, style: "normal" }],
    },
  );
}
