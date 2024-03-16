import { MpButton } from "@/components/MpButton";
import { MpFieldset } from "@/components/MpFieldset";
import { MpIcon } from "@/components/MpIcon";
import { PropsWithChildren, useContext } from "react";
import { MpGridTemplateElement } from "./MpGridTemplateElement";
import { MpCssValue } from "@/model/MpGridModels";
import { SideBarDispatchContext } from "@/components/MpSidebar/sidebarCtx";
import { MpCssProp } from "@/components/MpCssProp";
import { MpGridEditTemplateElement } from "./MpGridEditTemplateElement";

interface MpGridTemplateProps {
  value: MpCssValue[];
  onChange?: (template: MpCssValue[]) => void;

}

export function MpGridTemplate(props: PropsWithChildren<MpGridTemplateProps>) {
  const { value, onChange } = props;

  const dispatch = useContext(SideBarDispatchContext);

  function onSave() {
    console.log("on save clicked");
  }

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
            onClick={() => onChange?.([...value, new MpCssValue(1, "fr")])}
          >
            <MpIcon>add_circle</MpIcon>
          </MpButton>
        </div>

        {value.map((x, i) => (
          <MpGridTemplateElement
            key={`grid-template-element-${i}`}
            onSelect={() => {
              dispatch({ 
                type: 'displayed', 
                children: (
                  <MpGridEditTemplateElement 
                    value={x} 
                    onSave={onSave}
                  /> 
                )
              });
            }}
            onRemove={() => {
              const [_, ..._els] = value;
              onChange?.(_els);
            }}
          />
        ))}
      </div>
    </MpFieldset>
  );
}
