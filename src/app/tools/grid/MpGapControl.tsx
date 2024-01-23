import { MpButton } from "@/components/MpButton";
import { MpCssProp } from "@/components/MpCssProp";
import { MpFieldset } from "@/components/MpFieldset";
import { useEffect, useState } from "react";

interface MPGapValue {
  formattedValue: string;
}

interface MpGapControlProps {
  onChange: (event: MPGapValue) => void;
}

/**
 * Control the gap value
 * - provide a MpCssProp for each of columns and rows gap
 * - their value can be synced, in this case it'll show only one MpCssProp
 */
export function MpGapControl({ onChange }: MpGapControlProps) {
  // Gap value for columns space
  const [colValue, setColValue] = useState<number>(2);
  const [colCssUnit, setColCssUnit] = useState<string>("rem");

  // Gap value for rows space
  const [rowValue, setRowValue] = useState<number>(2);
  const [rowCssUnit, setRowCssUnit] = useState<string>("rem");

  // If true, gap value will be the same for rows and cols
  const [sync, setSync] = useState<boolean>(false);

  /**
   * If sync is true, it'll keep synced row and col values
   */
  useEffect(() => {
    if (sync) {
      setColValue(rowValue);
      setColCssUnit(rowCssUnit);
    }
  }, [rowValue, rowCssUnit, sync]);

  /**
   * It'll emit a new event on every change of row or col values
   */
  useEffect(() => {
    // Build formatted value eg: "10rem 1rem"
    const _rowValue = `${rowValue}${rowCssUnit}`;
    const _colValue = `${colValue}${colCssUnit}`;

    const formattedValue = sync ? _rowValue : `${_rowValue} ${_colValue}`;

    // Emit change event
    onChange({ formattedValue });
  }, [colValue, colCssUnit, rowValue, rowCssUnit]);

  return (
    <MpFieldset legend="Gap">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex gap-3 items-center">
          <span
            className="
            material-symbols-outlined
            self-stretch text-5xl
          "
          >
            {sync ? "grid_goldenratio" : "format_line_spacing"}
          </span>

          <MpCssProp
            id="gap-control"
            label={sync ? "Gap" : "Row gap"}
            value={rowValue}
            cssUnit={rowCssUnit}
            onChange={(v, u) => {
              setRowValue(v);
              setRowCssUnit(u);
            }}
          />
        </div>

        {!sync && (
          <div className="flex gap-3 items-center">
            <span
              className="
              material-symbols-outlined
              self-stretch text-5xl
            "
            >
              format_letter_spacing
            </span>
            <MpCssProp
              id="gap-control"
              label="Col gap"
              value={colValue}
              cssUnit={colCssUnit}
              onChange={(v, u) => {
                setColValue(v);
                setColCssUnit(u);
              }}
            />
          </div>
        )}

        <MpButton
          onClick={() => setSync(!sync)}
        >
          <span className="material-symbols-outlined text-4xl">
            {sync ? "link_off" : "link"}
          </span>
        </MpButton>
      </div>
    </MpFieldset>
  );
}
