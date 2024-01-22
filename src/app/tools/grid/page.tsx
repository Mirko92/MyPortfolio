"use client";

import { MpFieldset } from "@/components/MpFieldset";
import { MpRange } from "@/components/MpRange";
import { useEffect, useState } from "react";
import { MpGridContainerControl } from "./MpGridContainerControl";

const GRID_STYLE_EL = "grid-style-element";

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
    <main className="p-5">
      <h1 className="text-4xl">Grid configuration</h1>

      <section className="mb-5 ">
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
      </section>

      <section className="grid-container border border-dashed border-purple-500">
        {Array.from({ length: count }).map((_, x) => {
          return (
            <article
              className="grid-item w-16 h-16 bg-white text-black font-bold"
              key={`item-grid-${x}`}
            >
              {x}
            </article>
          );
        })}
      </section>
    </main>
  );
}
