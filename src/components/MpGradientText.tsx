import { PropsWithChildren } from "react";

export function MpGradientText({ children }: PropsWithChildren) {
  return <span 
    className="
      bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
      inline-block text-transparent bg-clip-text
    "
  >
    {children}
  </span>
}