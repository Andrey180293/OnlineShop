import { ThemeAction, ThemeActionTypes } from "../../types/Theme";
import { ThemeState } from "../../types/Theme";

const ligthThemes = {
  headFootBg: "light-blue darken-2",
  contentBg: " blue lighten-4",
};
const darkThemes = {
  headFootBg: " grey darken-3",
  contentBg: " blue-grey darken-2",
};
const initialization: ThemeState = {
  isThemToogle: false,
  theme: ligthThemes,
  isActiveSidebarLink: false,
};

function themeReducer(state = initialization, action: ThemeAction) {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_THEME: {
      return {
        ...state,
        isThemToogle: action.payload,

        theme: state.isThemToogle ? ligthThemes : darkThemes,
      };
    }

    case ThemeActionTypes.SET_ACTIVE_SIDEBAR_LINK:
      return {
        ...state,
        isActiveSidebarLink: action.payload,
      };

    default:
      return state;
  }
}

export default themeReducer;
