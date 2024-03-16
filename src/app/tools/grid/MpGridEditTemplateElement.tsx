import { MpButton } from "@/components/MpButton";
import { MpHeading } from "@/components/MpHeading";
import { MpGridTemplateElement } from "./MpGridTemplateElement";
import { MpCssValue } from "@/model/MpGridModels";
import { MpCssProp } from "@/components/MpCssProp";

interface MpGridEditTemplateElementProps {
  value?: MpCssValue;
  onSave?: () => void; 
}

export function MpGridEditTemplateElement(props: MpGridEditTemplateElementProps) {
  const { value, onSave } = props; 

  return <section className="h-full flex flex-col">
    <header className="my-5">
      <MpHeading level={3}>
        Editing a grid template element
      </MpHeading>
    </header>

    <div className="p-5 flex-1 flex flex-col justify-center items-center">
      <div className="mb-10 w-44 flex justify-center">
        <MpGridTemplateElement />
      </div>
      

      <MpCssProp
        id="edit-css-prop"
        cssUnit="fr"
        label="Non so"

        value={2}
        onChange={() => {}}
      />
    </div>

    <footer>
      <MpButton 
        className="w-full"
        onClick={onSave}
      >Save</MpButton>
    </footer>
  </section>;
}
