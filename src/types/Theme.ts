import { type } from "node:os";

export interface ThemeState {
  isThemToogle: boolean;
  theme: {};
}
export enum ThemeActionTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
}
interface ToogleAction {
  type: ThemeActionTypes.TOGGLE_THEME;
  payload: boolean;
}
export type ThemeAction = ToogleAction;
