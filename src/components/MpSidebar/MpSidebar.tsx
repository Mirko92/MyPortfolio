import {
  PropsWithChildren,
  useContext
} from "react";
import { MpIcon } from "../MpIcon";
import { SideBarDispatchContext, SideBarStatusContext } from "./sidebarCtx";

const ASIDE_CSS =
    "fixed left-0 right-0 top-1/2 bottom-0 rounded-t-2xl p-4 bg-purple-400 mp-sidebar " 
  + "md:top-0 md:left-1/2 md:rounded-tr-none md:rounded-l-2xl";

interface MpSidebarProps {}
export function MpSidebar({ children }: PropsWithChildren<MpSidebarProps>) {

  const { isVisible } = useContext(SideBarStatusContext);
  const dispatch      = useContext(SideBarDispatchContext);

  return (
    <>
      {
        isVisible &&
        /* Mask */
        <div 
          className="fixed top-0 left-0 bott z-10 h-screen w-screen bg-black bg-opacity-75"
          onClick={() => dispatch({type: "hidden"})}
        ></div>
      }

      {/* SideBar */}
      <aside className={ASIDE_CSS + (isVisible ? " mp-sidebar--open z-20" : "")}>
        <header className="flex justify-end">
          <MpIcon onClick={() => dispatch({ type: "hidden" })}>close</MpIcon>
        </header>

        <section>{children}</section>
      </aside>
    </>
  );
}
