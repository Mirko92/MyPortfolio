'use client';

import Image from "next/image";
import { CSSProperties, LegacyRef, useEffect, useRef } from "react";

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
  }, []);

  return <article>
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
            before:inset-[20px] before:bg-gray-200 before:rounded-full
          " 
          ref={percentEl}
        >
          <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1">
            <Image src={props.img} alt={props.name} width={100} height={100} className="w-full"/>
          </figure>

          <div className="dot absolute inset-[5px] z-10"></div>

          <svg className="relative rotate-[270deg]" width="100%" height="100%" viewBox="0 0 150 150">
            <circle className="w-full h-full fill-transparent translate-x-[5px] translate-y-[5px]" stroke="black" strokeWidth="3" cx="70" cy="70" r="70" ></circle>
            <circle className="w-full h-full fill-transparent translate-x-[5px] translate-y-[5px]" stroke="black" strokeWidth="3" cx="70" cy="70" r="70" ></circle>
          </svg>
        </div>

        <h5>{name}</h5>
      </div>
    </div>
  </article>
}