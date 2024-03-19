"use client";

import { MpFieldset } from "@/components/MpFieldset";
import { MpRange } from "@/components/MpRange";
import { MpSidebarProvider } from "@/components/MpSidebar/sidebarCtx";
import { useGridStore } from "@/store/GridStore";
import { useEffect, useState } from "react";
import { MpGridContainerSection } from "./MpGridContainerSection";

const GRID_STYLE_EL = "grid-style-element";

export default function GridTools() {
  const count = useGridStore(s => s.items);
  const setCount = useGridStore(s => s.setItems);

  const containerCss = useGridStore(s => s.gridContainerCss());

  useEffect(() => {
    createStyleEl();
  }, [containerCss]);

  function removeExistingStyleEl() {
    const alreadyExists = document.getElementById(GRID_STYLE_EL);

    if (alreadyExists) {
      alreadyExists.remove();
    }
  }

  function createStyleEl() {
    removeExistingStyleEl();

    const styleEl = document.createElement("style");

    styleEl.setAttribute("id", GRID_STYLE_EL);

    styleEl.textContent = containerCss;

    document.head.appendChild(styleEl);
  }

  return (
    <MpSidebarProvider>
      <main className="relative z-0 flex h-full w-full overflow-hidden">
                
        <aside className="flex-shrink-0 w-[360px] p-3 h-screen">
          <MpGridContainerSection />

          <MpFieldset legend="Grid Items">
            <div className="flex gap-1">
              <MpRange
                id="items-count"
                label="Items count:"
                value={count}
                onChange={(e) =>
                  setCount(+(e.target as HTMLInputElement).value)
                }
              />
            </div>
          </MpFieldset>
        </aside>

        <section className="p-6 flex-1">
          <section className="grid-container border border-dashed border-purple-500">
            {Array.from({ length: count }).map((_, x) => {
              return (
                <article
                  className="grid-item w-full h-full bg-white text-black font-bold"
                  key={`item-grid-${x}`}
                >
                  {x + 1}
                </article>
              );
            })}
          </section>
        </section>
      </main>
    </MpSidebarProvider>
  );
}
