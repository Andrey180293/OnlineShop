export interface ThemeState {
  isThemToogle: boolean;
  theme: {};
  isActiveSidebarLink: number | false;
}
export enum ThemeActionTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
  SET_ACTIVE_SIDEBAR_LINK = "SET_ACTIVE_SIDEBAR_LINK",
}
interface ToogleAction {
  type: ThemeActionTypes.TOGGLE_THEME;
  payload: boolean;
}

interface LoadActiveSidebarAction {
  type: ThemeActionTypes.SET_ACTIVE_SIDEBAR_LINK;
  payload: number | false;
}

export type ThemeAction = ToogleAction | LoadActiveSidebarAction;
