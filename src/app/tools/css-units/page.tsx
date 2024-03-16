'use client';

import { MpCssProp } from "@/components/MpCssProp";
import { useState } from "react";

interface CssUnitsProps {
}

export default function CssUnits(props: CssUnitsProps) {

  const [ wValue, setWValue ] = useState<number>(400);
  const [ wUnit, setWUnit ] = useState<string>("px");

  const [ hValue, setHValue ] = useState<number>(400);
  const [ hUnit, setHUnit ] = useState<string>("px");

  return (
    <main className="p-5 w-fit">

      <div className="z-20 fixed top-0 left-1/2 h-screen w-2 bg-white"></div>

      <div className="z-20 fixed top-1/2 left-0 w-screen h-2 bg-white"></div>

      <section className="fixed bottom-10 right-10 z-30 bg-purple-600 bg-opacity-60 p-3 rounded">
        <MpCssProp 
          id="test-css-uni"
          label="Width"
          cssUnit="px"
          value={wValue}
          onChange={(v, u) => {
            setWValue(v); setWUnit(u);
          }}
        />

        <MpCssProp 
          id="test-css-uni"
          label="Height"
          cssUnit="px"
          value={hValue}
          onChange={(v, u) => {
            setHValue(v); setHUnit(u);
          }}
        />
      </section>

      <div className=" top-0 left-0 z-0 bg-red-400 aspect-square" style={{
        width: `${wValue}${wUnit}`,
        height: `${hValue}${hUnit}`,
      }}>

      </div>
    </main>
  );
}
