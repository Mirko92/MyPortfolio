interface MpSidebarState {
  isVisible: boolean
}

export function MpSidebarReducer(state: MpSidebarState, action: any) {
  switch (action.type) {
    case "shown":{

      break;
    }

    case "hidden": {

      break;
    }
  
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}