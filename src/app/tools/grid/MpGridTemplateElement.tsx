import { MpButton } from "@/components/MpButton";
import { MpIcon } from "@/components/MpIcon";
import { MouseEvent } from "react";

interface MpGridTemplateElementProps {
  onSelect?: () => void;
  onRemove?: () => void;
}

export function MpGridTemplateElement(props: MpGridTemplateElementProps) {
  const { onSelect, onRemove } = props;

  function onRemoveClick(e: MouseEvent) {
    e.stopPropagation();
    onRemove?.();
  }

  return (
    <>
      <article
        className="
              w-12 h-12 p-3 relative group
              outline-dashed outline-2
              hover:outline-offset-2 hover:outline-dashed hover:cursor-pointer
              grid place-items-center
              select-none
              active:bg-purple-400
            "
        onClick={() => onSelect?.()}
      >
        1fr

        {
          onRemove && 
          
          <MpButton 
            className="
              hidden group-hover:grid
              absolute top-0 right-0 
            bg-red-500 rounded-full place-items-center
              translate-x-1/2 -translate-y-1/2            
              w-6 h-6
            "
            onClick={onRemoveClick}
          >
            <MpIcon>close</MpIcon>
          </MpButton>
        }
      </article>
    </>
  );
}
