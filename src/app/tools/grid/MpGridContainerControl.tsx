import { MpFieldset } from "@/components/MpFieldset";
import { MpInput } from "@/components/MpInput";
import { ChangeEvent, useEffect, useState } from "react";
import { MpGapControl } from "./MpGapControl";

export interface MpGridContainerConfig {
  cols: number;
  gap: string;
}

function createGridContainerClass(gridConfig: MpGridContainerConfig) {
  const { cols, gap } = gridConfig;

  return (
    ".grid-container {" +
      "display:grid;" +
      "overflow: auto;" +
      `gap: ${gap};` +
      `grid-template-columns: 1fr repeat(${cols}, 1fr);` +
    "}"
  );
}

interface MpGridContainerControlProps {
  onChange: (gridContainerClass: string) => void;
}

export function MpGridContainerControl(props: MpGridContainerControlProps) {
  const { onChange } = props;

  // Grid columns number 
  const [cols, setCols] = useState<number>(7);

  // GAP value
  const [gap, setGap] = useState<string>("");

  function onChangeHandler(e: ChangeEvent) {
    const cols = +(e.target as HTMLInputElement).value;

    setCols(cols);
  }

  useEffect(() => {
    onChange(createGridContainerClass({ cols, gap }));
  }, [cols, gap]);

  return (
    <MpFieldset legend="Grid Container">
      <>
        <MpInput
          id="cols-count"
          label="Columns count:"
          type="range"
          min={0}
          max={30}
          value={cols}
          onChange={onChangeHandler}
        />

        <MpGapControl
          onChange={({formattedValue}) => {
            setGap(formattedValue);
          }}
        />
      </>
    </MpFieldset>
  );
}
