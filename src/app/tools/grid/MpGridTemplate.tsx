import { MpButton } from "@/components/MpButton";
import { MpFieldset } from "@/components/MpFieldset";
import { MpIcon } from "@/components/MpIcon";
import { PropsWithChildren, useEffect, useState } from "react";
import { MpGridTemplateElement } from "./MpGridTemplateElement";

interface MpGridTemplateProps {
  onChange: (template: string) => void;
}

export function MpGridTemplate(props: PropsWithChildren<MpGridTemplateProps>) {
  const { onChange } = props;

  const [els, setEls] = useState<string[]>(["1fr", "1fr", "1fr", "1fr"]);

  useEffect(() => {
    onChange?.(els.join(" "));
  }, [els]);

  return (
    <MpFieldset legend="Grid template">
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
            onClick={() => setEls([...els, "1fr"])}
          >
            <MpIcon>add_circle</MpIcon>
          </MpButton>
        </div>

        {els.map((x, i) => (
          <MpGridTemplateElement
            key={`grid-template-element-${i}`}
            onSelect={() => {
              console.log("On select ");
            }}
            onRemove={() => {
              const [_, ..._els] = els;
              setEls(_els);
            }}
          />
        ))}
      </div>
    </MpFieldset>
  );
}
