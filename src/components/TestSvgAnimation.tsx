'use client';

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

interface TestProps {
  value: number;
  name: string;
  imageUrl: string;
}

const MAX = 630;

export function TestSvgAnimation( { name, value, imageUrl }: TestProps) {
  const [ x, setX ] = useState(0);

  useEffect(() => {
    setX(MAX * value / 100);
  }, [value]);

  return <div className="flex flex-col items-center">

  <div title={`${name} - ${value}%`}>
    <svg width="100%" height="100%" viewBox='0 0 300 300' className="rotate-[270deg]">
      <circle 
        cx="150" cy="150" r="100" 
        fill="transparent"
        stroke="white"
        strokeWidth={10}
        strokeDasharray={"3 8"}
      />
      <circle  
        cx="150" cy="150" r="100" 
        className="transition-[stroke-dasharray] duration-1000 delay-300"
        stroke='white'
        strokeWidth={10} 
        strokeDasharray={`${x} ${MAX - x}`}
        fill="transparent"
      />

      <foreignObject x="100" y="100" width="100" height="100">
        <div>
          <Image
            src={imageUrl}
            alt="TODO:"
            className="rotate-90"
            width={100}
            height={100}
          />
        </div>
      </foreignObject>
    </svg>

    <h5 className="relative -top-3">{name}</h5>
    
  </div>
  </div>

}