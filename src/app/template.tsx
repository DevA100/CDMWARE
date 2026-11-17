import type { ReactNode } from "react";

/**
 * Templates remount on navigation, so the page's top-level sections rise in
 * (staggered, .page-enter in cruise-ui.css) on the first load and again on
 * every navigation. <main> lives here, not in the layout, because the rule
 * targets `.page-enter main > *`. `display: contents` keeps <main> a direct
 * flex child of <body>.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="page-enter contents">
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}
