'use client';

import { useState } from "react";

export default function GridTools() {
  const [ n, setN ] = useState<number>(3);

  return <main> 
    <section className="grid grid-cols-3">
      {
        Array.from({length: n}).map( (_, x) => {
          return <article 
            className="w-10 h-10 bg-white"
            key={`item-grid-${x}`}>
            {x}
          </article>;
        })
      }
    </section>
  </main>;
}