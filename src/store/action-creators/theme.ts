import { ThemeAction, ThemeActionTypes } from "../../types/Theme";

export const toggleTheme = (payload: ThemeAction) => ({
  type: ThemeActionTypes.TOGGLE_THEME,
  payload,
});
