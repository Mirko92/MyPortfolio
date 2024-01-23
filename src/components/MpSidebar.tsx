import { useBoolean } from "@/utils/useBoolean";
import { PropsWithChildren } from "react";
import { MpIcon } from "./MpIcon";

interface MpSidebarProps {}

const ASIDE_CSS =
  "fixed left-0 right-0 top-1/2 bottom-0 rounded-t-2xl p-4 bg-purple-400 mp-sidebar";

export function MpSidebar(props: PropsWithChildren<MpSidebarProps>) {
  const [isVisible, toggle] = useBoolean(false);

  return (
    <>
      <button onClick={toggle}>test</button>

      <aside className={ASIDE_CSS + (isVisible ? " mp-sidebar--open" : "")}>
        <header className="flex justify-end">
          <MpIcon onClick={toggle}>close</MpIcon>
        </header>
      </aside>
    </>
  );
}
