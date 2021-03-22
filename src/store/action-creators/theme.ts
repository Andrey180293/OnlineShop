import { ThemeAction, ThemeActionTypes } from "../../types/Theme";

export const toggleTheme = (payload: ThemeAction) => ({
  type: ThemeActionTypes.TOGGLE_THEME,
  payload,
});

export const setLoad = (payload: ThemeAction) => ({
  type: ThemeActionTypes.SET_LOAD,
  payload,
});

export const setActiveSidebarLink = (payload: ThemeAction) => ({
  type: ThemeActionTypes.SET_ACTIVE_SIDEBAR_LINK,
  payload,
});
