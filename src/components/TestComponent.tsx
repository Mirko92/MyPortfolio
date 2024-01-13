'use client';

import { useState } from "react";

export function TestComponent() {
  const [ c, setC ] = useState<number>(0);


  return <>
    <h1 className="text-6xl">This is a test client component</h1>
    <p className="text-3xl">This component can use browser features and state.</p>

    <div className="flex align-center justify-center gap-3 my-2 text-xl">
      <button onClick={() => setC(x => x + 1 )} >+</button>
      <h2>Counter: {c}</h2>
      <button onClick={() => setC(x => x - 1 )} >-</button>
    </div>
  </>;
}