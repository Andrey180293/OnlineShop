import { useEffect } from "react";
import App from "../App";
import "../App.scss";
import { toggleTheme, setLoad } from "../store/action-creators/theme";
import {
  setAllProducts,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
} from "../store/action-creators/product";

import { connect } from "react-redux";
import { compose } from "redux";
import { StateType } from "../store/store";
interface AppProps {
  theme: {
    contentBg: string;
    headFootBg: string;
  };
  isThemToogle: boolean;
  toggleTheme: (isThemToogle: boolean) => void;
  setAllProducts: () => void;
  setMotorcycles: () => void;
  setPhones: () => void;
  setRobots: () => void;
  setQudrocopters: () => void;
  setLoad: (isLoad: boolean) => void;
}
const AppContainer = ({
  isThemToogle,
  theme,
  toggleTheme,
  setAllProducts,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
  setLoad,
}: AppProps) => {
  useEffect(() => {
    async function anyNameFunction() {
      await setLoad(false);

      await setRobots();
      await setPhones();
      await setMotorcycles();
      await setQudrocopters();
      setAllProducts();
      setLoad(true);
    }
    anyNameFunction();
  }, []);

  return (
    <App theme={theme} isThemToogle={isThemToogle} toggleTheme={toggleTheme} />
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    toggleTheme,
    setAllProducts,
    setPhones,
    setMotorcycles,
    setQudrocopters,
    setRobots,
    setLoad,
  })
)(AppContainer);
