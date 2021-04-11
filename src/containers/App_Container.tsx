import { useEffect } from "react";
import App from "../App";
import "../App.scss";
import { toggleTheme } from "../store/action-creators/theme";
import { getAllProducts } from "../store/action-creators/product";

import { connect } from "react-redux";
import { compose } from "redux";
import { StateType } from "../store/store";
interface AppProps {
  theme: {
    contentBg: string;
    headFootBg: string;
  };
  product: any;
  isThemToogle: boolean;
  toggleTheme: (isThemToogle: boolean) => void;
  getAllProducts: () => void;
}
const AppContainer = ({
  isThemToogle,
  theme,
  toggleTheme,

  getAllProducts,
}: AppProps) => {
  useEffect(() => {
    getAllProducts();
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

    getAllProducts,
  })
)(AppContainer);
