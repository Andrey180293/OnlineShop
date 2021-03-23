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

const AppContainer = ({
  theme,
  toggleTheme,
  isThemToogle,
  cartItem,
  setAllProducts,
  products,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
  setLoad,
}) => {
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
    <>
      <App
        theme={theme}
        isThemToogle={isThemToogle}
        toggleTheme={toggleTheme}
        cartItem={cartItem}
        setAllProducts={setAllProducts}
        products={products}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    isLoad: state.theme.isLoad,

    cartItem: state.cart.items,
    products: state.product.product,
    phones: state.product.phones,
    motorcycles: state.product.motorcycles,
  };
};

export default connect(mapStateToProps, {
  toggleTheme,
  setAllProducts,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
  setLoad,
})(AppContainer);
