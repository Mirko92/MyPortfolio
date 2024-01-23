import { HTMLAttributes, PropsWithChildren } from "react";

interface MpPopoverProps extends HTMLAttributes<HTMLSpanElement> {
}

const POPOVER_CSS = "bg-gray-900 shadow-lg shadow-orange-400 " +
                    "p-3 mt-2 -ml-1 absolute left-0 top-[100%] min-w-40 h-40 " + 
                    "rounded z-10" ;

export function MpPopover(props: PropsWithChildren<MpPopoverProps>) {
  const { children, className, ...other } = props; 

  return <span 
    className={POPOVER_CSS + " " + className}
    {...other}
  >
    {children}
  </span>;
}
