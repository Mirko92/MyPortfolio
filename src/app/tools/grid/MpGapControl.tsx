import { MpCssProp } from "@/components/MpCssProp";
import { useEffect, useState } from "react";

interface MPGapValue {
  value: number;
  cssUnit: string;
  axis: string[];
  formattedValue: string;
}

interface MpGapControlProps {
  onChange: (event: MPGapValue) => void;
}

/**
 * TODO:i18n
 * Gestisce il controllo del valore del GAP
 * - un input range per determinare il valore
 * - una select per la selezione dell'unità di misura desiderata
 * - checkbox per indicare gli assi su cui andrà applicata
 */
export function MpGapControl({ onChange }: MpGapControlProps) {
  const [x, setX] = useState<number>(2);
  const [cssUnit, setCssUnit] = useState<string>("rem");
  const [axis, setAxis] = useState<string[]>(["x", "y"]);

  function toggleAxis(value: string) {
    if (axis.includes(value)) {
      setAxis(axis.filter((v) => v !== value));
    } else {
      setAxis([...axis, value]);
    }
  }

  useEffect(() => {
    onChange({
      value: x,
      cssUnit,
      axis,
      formattedValue:
        axis.length === 1
          ? axis.includes("y")
            ? `0 ${x}${cssUnit}` // Only rows
            : `${x}${cssUnit} 0` // Olny columns
          : `${x}${cssUnit} `.repeat(2), // Both
    });
  }, [x, cssUnit, axis]);

  return (
    <div className="border-dashed border">
      <div className="flex gap-3 items-center">
        <MpCssProp
          id="gap-control"
          label="Gap"
          value={x}
          cssUnit={cssUnit}
          onChange={(v, u) => {
            setX(v);
            setCssUnit(u);
          }}
        />

        <div className="flex flex-col">
          <span>Apply to</span>
          <div className="flex gap-1">
            <label htmlFor="y-axis">
              <input
                type="checkbox"
                name="axis"
                id="y-axis"
                className="mr-1"
                checked={axis.includes("y")}
                onChange={() => toggleAxis("y")}
              />
              Columns
            </label>

            <label htmlFor="x-axis">
              <input
                type="checkbox"
                name="axis"
                id="x-axis"
                className="mr-1"
                checked={axis.includes("x")}
                onChange={() => toggleAxis("x")}
              />
              Rows
            </label>
          </div>
        </div>
      </div>

      <span className="material-symbols-outlined">horizontal_distribute</span>
    </div>
  );
}
