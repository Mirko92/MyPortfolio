'use client';

import Image from "next/image";
import { LegacyRef, useEffect, useRef } from "react";

type MpSkillProps = {
  name: string;
  value: number;
  img: string;
}

export function MpSkill( props: MpSkillProps) {
  const { name, value } = props;

  const percentEl: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    percentEl.current?.style.setProperty("--num", value.toString());
  }, [value]);

  return <article title={`${name} - ${value}%`}>
    <div className="box">
      <div 
        className="content 
          relative w-full h-full flex flex-col justify-center items-center
        "
      >
        <div 
          className="
            percent
            relative max-w-[150px] max-h-[150px] h-full w-full

            before:absolute 
            before:inset-[20px] before:bg-gray-100 before:rounded-full
          " 
          ref={percentEl}
        >
          <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1">
            <Image 
              src={props.img} 
              alt={props.name} 
              width={100} 
              height={100} 
              className="w-full"
            />
          </figure>

          <div 
            className="dot 
              absolute inset-[5px]

              before:content-[''] 
              before:absolute 
              before:top-[-7px] before:left-1/2 
              -before:translate-x-1/2
              before:w-[14px] before:h-[14px] 
              before:bg-white before:rounded-full
            " 
          />

          <svg className="relative rotate-[270deg]" width="100%" height="100%" viewBox="0 0 150 150">
            <circle 
              className="fill-transparent translate-x-[5px] translate-y-[5px]" 
              stroke="white" strokeWidth="3" strokeDasharray="1 10"
              cx="70" cy="70" r="70" 
            />
            <circle 
              className="
                fill-transparent translate-x-[5px] translate-y-[5px]
                opacity-0 animate-fadeIn 
              " 
              stroke="white" 
              strokeWidth="3" 
              strokeDasharray={440} 
              strokeDashoffset={(440 - (440 * value) / 100)}
              cx="70" cy="70" r="70" 
            />
          </svg>
        </div>

        <h5>{name}</h5>
      </div>
    </div>
  </article>
}