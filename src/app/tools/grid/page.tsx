"use client";

import { MpFieldset } from "@/components/MpFieldset";
import { MpHeading } from "@/components/MpHeading";
import { MpRange } from "@/components/MpRange";
import { MpSidebar } from "@/components/MpSidebar/MpSidebar";
import { CSSProperties, useEffect, useState } from "react";
import { MpGridContainerControl } from "./MpGridContainerControl";
import { MpSidebarProvider } from "@/components/MpSidebar/sidebarCtx";

const GRID_STYLE_EL = "grid-style-element";

const s0: CSSProperties = {
  transform: "translateX(0px) translateY(-50%) rotate(180deg) translateZ(0px)"
}

const s1: CSSProperties = {
  background: "white",
  transform: "translateY(0.15rem) rotate(15deg) translateZ(0px)"
}

const s2: CSSProperties = {
  background: "white",
  transform: "translateY(-0.15rem) rotate(-15deg) translateZ(0px)"
}

const s3: CSSProperties  = {
  position: "absolute",
  border: "0px",
  width: "1px",
  height: "1px",
  padding: "0px",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  whiteSpace: "nowrap",
  overflowWrap: "normal"
}

export default function GridTools() {
  const [text, setText] = useState("");

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

    styleEl.textContent = text;

    document.head.appendChild(styleEl);
  }

  useEffect(() => {
    createStyleEl();
  });

  // Grid items values
  const [count, setCount] = useState<number>(30);

  return (
    <MpSidebarProvider>
      <main className="relative z-0 flex h-full w-full overflow-hidden">
          <aside className="flex-shrink-0 w-[360px] p-3 h-screen">
              <MpGridContainerControl
                  onChange={(gridContainerClass) => {
                      setText(gridContainerClass);
                  }}
              />

              <MpFieldset legend="Grid Items">
                  <div className="flex gap-1">
                      <MpRange
                          id="items-count"
                          label="Items count:"
                          value={count}
                          onChange={(e) => setCount(+(e.target as HTMLInputElement).value)}
                      />
                  </div>
              </MpFieldset>
          </aside>

          <section className="p-6 flex-1">
              <section className="grid-container border border-dashed border-purple-500">
                  {Array.from({length: count}).map((_, x) => {
                      return (
                          <article
                              className="grid-item w-full h-full bg-white text-black font-bold"
                              key={`item-grid-${x}`}
                          >
                              {x}
                          </article>
                      );
                  })}
              </section>
          </section>
      </main>
    </MpSidebarProvider>
  );
}
