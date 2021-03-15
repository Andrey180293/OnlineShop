import { useEffect, useState, useRef } from "react";
import App from "../App";
import "../App.scss";

import { toggleTheme } from "../store/action-creators/theme";
import {
  setProductType,
  setPhones,
  setMotorcycles,
} from "../store/action-creators/product";

import { connect } from "react-redux";
import { db, auth } from "../servises/firebase";

function AppContainer({
  theme,
  toggleTheme,
  isThemToogle,
  cartItem,
  setProductType,
  products,
  phones,
  setPhones,
  setMotorcycles,
  motorcycles,
}) {
  useEffect(() => {
    //setPhones();
    setMotorcycles();
  }, []);
  console.log(motorcycles);
  return (
    <>
      <App
        theme={theme}
        isThemToogle={isThemToogle}
        toggleTheme={toggleTheme}
        cartItem={cartItem}
        setProductType={setProductType}
        products={products}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    cartItem: state.cart.items,
    products: state.product.product,
    phones: state.product.phones,
    motorcycles: state.product.motorcycles,
  };
};

export default connect(mapStateToProps, {
  toggleTheme,
  setProductType,
  setPhones,
  setMotorcycles,
})(AppContainer);
