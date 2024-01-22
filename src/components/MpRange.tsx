import { MpInput, MpInputProps } from "@/components/MpInput";
import { useState } from "react";

interface MpRangeProps extends Omit<MpInputProps, "type" | "max"> {}

export function MpRange(props: MpRangeProps) {
  const { value } = props;

  const [max, setMax] = useState<number>(30);

  function updateMax() {
    if (value || value === 0) {
      if (+value >= max) {
        setMax(Math.round(max*1.5));
      } else if (+value <= max / 2) {
        const newMax = max / 2;
        setMax(newMax > 30 ? newMax : 30);
      }
    }
  }

  return (
    <MpInput
      {...props}
      type="range"
      max={max}
      value={value}
      onMouseUp={() => updateMax()}
    />
  );
}
