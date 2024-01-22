"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface MpButtonProps extends ButtonHTMLAttributes<any> {}

const BUTTON_CSS =
  "w-12 h-12 bg-purple-400 hover:bg-purple-600 active:bg-purple-700 active:scale-90 rounded grid place-items-center";

export function MpButton(props: PropsWithChildren<MpButtonProps>) {
  const { children, className, ...other } = props;

  return (
    <button
      className={BUTTON_CSS + " " + className}
      {...other}
    >
      {children}
    </button>
  );
}
