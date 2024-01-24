import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { AsideActions, AsideStatus, sidebarReducer } from "./sidebarReducer";

export const SideBarStatusContext = createContext<AsideStatus>({
  isVisible: false,
});

export const SideBarDispatchContext = createContext<Dispatch<AsideActions>>(
  null!
);

export function MpSidebarProvider({ children }: PropsWithChildren<any>) {
  const [status, dispatch] = useReducer(sidebarReducer, { isVisible: false });

  return (
    <SideBarStatusContext.Provider value={status}>
      <SideBarDispatchContext.Provider value={dispatch}>
        {children}
      </SideBarDispatchContext.Provider>
    </SideBarStatusContext.Provider>
  );
}