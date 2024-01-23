import { MpFieldset } from "@/components/MpFieldset";
import { useEffect, useState } from "react";
import { MpGapControl } from "./MpGapControl";
import { MpGridTemplate } from "./MpGridTemplate";

export interface MpGridContainerConfig {
  colsTemplate: string;
  gap: string;
}

function createGridContainerClass(gridConfig: MpGridContainerConfig) {
  const { colsTemplate, gap } = gridConfig;

  return (
    ".grid-container {" +
      "display:grid;" +
      "overflow: auto;" +
      `gap: ${gap};` +
      `grid-template-columns: ${colsTemplate};` +
    "}"
  );
}

interface MpGridContainerControlProps {
  onChange: (gridContainerClass: string) => void;
}

export function MpGridContainerControl(props: MpGridContainerControlProps) {
  const { onChange } = props;

  // Grid columns template 
  const [colsTemplate, setColTemplate] = useState<string>("1fr 1fr 1fr");

  // GAP value
  const [gap, setGap] = useState<string>("");

  function onChangeHandler(colsTemplate: string) {
    console.log("new template: ", colsTemplate);
    setColTemplate(colsTemplate);
  }

  useEffect(() => {
    onChange(createGridContainerClass({ colsTemplate, gap }));
  }, [colsTemplate, gap]);

  return (
    <MpFieldset legend="Grid Container">
      <>
        <MpGridTemplate 
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
