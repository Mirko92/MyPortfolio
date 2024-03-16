import { MpFieldset } from "@/components/MpFieldset";
import { MpCssValue } from "@/model/MpGridModels";
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
  const [colsTemplate, setColTemplate] = useState<MpCssValue[]>([
    new MpCssValue(1, "fr"),
    new MpCssValue(1, "fr"),
    new MpCssValue(1, "fr"),
  ]);

  // GAP value
  const [gap, setGap] = useState<string>("");

  function onChangeHandler(colsTemplate: MpCssValue[]) {
    setColTemplate(colsTemplate);
  }

  useEffect(() => {
    const _colsTemplate = colsTemplate.map((c) => c.formattedValue).join(" ");

    onChange(
      createGridContainerClass({
        colsTemplate: _colsTemplate,
        gap,
      })
    );
  }, [colsTemplate, gap]);

  return (
    <MpFieldset legend="Grid Container">
      <>
        <MpGridTemplate
          value={colsTemplate}
          onChange={onChangeHandler}
        />

        <MpGapControl
          onChange={({ formattedValue }) => {
            setGap(formattedValue);
          }}
        />
      </>
    </MpFieldset>
  );
}
