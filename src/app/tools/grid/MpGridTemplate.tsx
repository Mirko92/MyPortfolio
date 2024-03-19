import { MpButton } from "@/components/MpButton";
import { MpFieldset } from "@/components/MpFieldset";
import { MpIcon } from "@/components/MpIcon";
import { MpCssValue } from "@/model/MpGridModels";
import { useGridStore } from "@/store/GridStore";
import { MpGridTemplateElement } from "./MpGridTemplateElement";

export function MpGridTemplate() {

  // Grid columns template value
  const value = useGridStore(s => s.colsTemplate);

  // Change handler 
  const onChange = useGridStore(s => s.setColsTemplate);

  return (
    <MpFieldset legend="Grid column template">
      <div className="flex flex-wrap gap-3">
        <div
          className="
            w-12 h-12 p-1 
            border-dashed border-white border
            grid place-items-center
          "
        >
          <MpButton
            className="w-full h-full"
            onClick={() => onChange([...value, new MpCssValue(1, "fr")])}
          >
            <MpIcon>add_circle</MpIcon>
          </MpButton>
        </div>


        {
          value.map(
            (_, i) =>
              <MpGridTemplateElement
                key={`grid-template-element-${i}`}

                onRemove={() => {
                  const [_, ..._els] = value;
                  onChange?.(_els);
                }}
              />
          )
        }
      </div>
    </MpFieldset>
  );
}
