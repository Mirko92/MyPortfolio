import { MpFieldset } from "@/components/MpFieldset";
import { MpGapControl } from "./MpGapControl";
import { MpGridTemplate } from "./MpGridTemplate";

export function MpGridContainerSection() {
  return (
    <MpFieldset legend="Grid Container">
      <MpGridTemplate />
      <MpGapControl />
    </MpFieldset>
  );
}
