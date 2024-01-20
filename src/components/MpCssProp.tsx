import { useEffect, useState } from "react";
import { MpInput } from "./MpInput";
import { MpCssUnitSelector } from "./MpCssUnitSelector";

interface MpCssPropProps {
  id      : string;
  label   : string;
  value   : number;
  cssUnit : string;
  onChange: (value: number, cssUnit: string) => void;
}

export function MpCssProp( props: MpCssPropProps ) {
  const { id, label, value, cssUnit, onChange } = props;

  const [x, setX]       = useState<number>(value);
  const [unit, setUnit] = useState<string>(cssUnit);

  useEffect(() => {
    onChange(x, cssUnit);
  }, [x, cssUnit]);

  return (
    <div className="flex gap-3">
      <MpInput
        id={id}
        label={label}
        type="range"
        min={0}
        max={30}
        value={value}
        onChange={(e) => setX(+(e.target as HTMLInputElement).value)}
      />

      <MpCssUnitSelector
        label="CSS unit"
        value={unit}
        onChange={(e) => setUnit((e.target as HTMLSelectElement).value)}
      />
    </div>
  );
}
