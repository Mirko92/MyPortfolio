import { ReactNode } from "react";

export type AsideStatus = { 
  isVisible: boolean,
  children?: ReactNode | undefined  
};

// Actions ---------

type Displayed   = { 
  type: "displayed",
  children?: ReactNode | undefined
};

type Hidden      = { 
  type: "hidden"     
};
type Toggled     = { 
  type: "toggled"     
};

// Actions UNION 
export type AsideActions = Hidden | Displayed | Toggled;

// -----------------

/**
 * Reducer function for managing the state of the aside component.  
 * The switch statement handles different action types:
 * - **displayed**: Sets the visibility of the aside to true.
 * - **hidden**:    Sets the visibility of the aside to false.
 * - **toggled**:   Toggles the visibility of the aside between true and false.
 */
export function sidebarReducer(state: AsideStatus, action: AsideActions) {
  console.log("action: ", action.type);

  switch (action.type) {
    case "displayed": {
      const { children } = action;
      
      return {
        ...state,
        isVisible: true,
        children
      };
    }

    case "hidden": {
      return {
        ...state,
        isVisible: false
      };
    }

    case "toggled": {
      return {
        ...state,
        isVisible: !state.isVisible
      };
    }

    default: {
      return state;
    }
  }
}