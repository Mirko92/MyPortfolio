import { MpButton } from "@/components/MpButton";
import { MpCssProp } from "@/components/MpCssProp";
import { MpIcon } from "@/components/MpIcon";
import { MpPopover } from "@/components/MpPopover";

interface MpGridTemplateElementProps {
  onSelect: () => void;
  onRemove: () => void;
}

export function MpGridTemplateElement(props: MpGridTemplateElementProps) {
  const { onSelect, onRemove } = props;

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

        {/* <MpPopover>
          <MpCssProp 
            id="prova"
            label="prova"
            cssUnit="fr"
            value={3}
            onChange={(x,y) => {console.log(x,y)}}/>
        </MpPopover> */}

        <MpButton 
          className="
            hidden group-hover:grid
            absolute top-0 right-0 
          bg-red-500 rounded-full place-items-center
            translate-x-1/2 -translate-y-1/2            
            w-6 h-6
          "
          onClick={() => onRemove?.()}
        >
          <MpIcon>close</MpIcon>
        </MpButton>
      </article>
    </>
  );
}
