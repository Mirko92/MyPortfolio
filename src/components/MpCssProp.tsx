import { useEffect, useState } from "react";
import { MpCssUnitSelector } from "./MpCssUnitSelector";
import { MpRange } from "@/components/MpRange";
import { MpIcon } from "./MpIcon";

interface MpCssPropProps {
  id: string;
  label: string;
  value: number;
  cssUnit: string;
  onChange: (value: number, cssUnit: string) => void;
}

export function MpCssProp(props: MpCssPropProps) {
  const { id, label, value, cssUnit, onChange } = props;

  const [x, setX] = useState<number>(value);
  const [unit, setUnit] = useState<string>(cssUnit);

  useEffect(() => {
    onChange(x, unit);
  }, [x, unit]);

  return (
    <div className="flex gap-3">
      <MpRange
        id={id}
        label={label}
        min={0}
        value={value}
        step={0.1}
        onChange={(e) => setX(+e.currentTarget.value)}
      ></MpRange>

      <MpCssUnitSelector
        label="CSS unit"
        title="CSS Unit"
        value={unit}
        onInput={(e) => setUnit(e.currentTarget.value)}
      />
    </div>
  );
}
