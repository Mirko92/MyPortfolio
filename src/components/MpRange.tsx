import { MpInput, MpInputProps } from "@/components/MpInput";
import { useEffect, useState } from "react";

interface MpRangeProps extends Omit<MpInputProps, "type" | "max"> {}

export function MpRange(props: MpRangeProps) {
  const { value } = props;

  const [max, setMax] = useState<number>(30);

  function updateMax() {
    if (value || value === 0) {
      if (+value >= max) {
        setMax(Math.round(+value * 1.5));
      } else if (+value <= max / 2) {
        const newMax = +value * 2;
        setMax(newMax > 30 ? newMax : 30);
      }
    }
  }

  useEffect(updateMax, []);

  return (
    <MpInput
      {...props}
      type="range"
      max={max}
      value={value}
      onMouseUp={() => updateMax()}
      onTouchEnd={() => updateMax()}
    />
  );
}
