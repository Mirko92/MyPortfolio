import { useState } from "react";

export function useBoolean(initValue: boolean = false)
  : [boolean, () => void, () => void, () => void] {
  const [ value, setValue ] = useState<boolean>(initValue);

  return [
    value, 
    // toggle
    () => setValue(!value),
    // set true
    () => setValue(true), 
    // set false
    () => setValue(false), 
  ]
}