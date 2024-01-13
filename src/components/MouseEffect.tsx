"use client";

import { useEffect } from "react";

export function MouseEffect() {
  useEffect(() => {

    function handler({clientX, clientY}: MouseEvent) {
      document.body.style.setProperty('--cursor-x', `${clientX}px`);
      document.body.style.setProperty('--cursor-y', `${clientY}px`);
    }

    window.addEventListener('mousemove', handler);

    return () => {
      window.removeEventListener('mousemove', handler);
    }
  }, [] );

  return <></>
}