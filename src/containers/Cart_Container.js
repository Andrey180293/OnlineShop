import { useEffect, useState, useRef } from "react";
import "../App.scss";
import { Redirect } from "react-router-dom";
import {
  setProductType,
  setProductPage,
} from "../store/action-creators/product";
import {
  addToCart,
  addRemoveAmount,
  removeFromCart,
} from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Sidebar from "../components/Sidebar/sidebar";
import Cart from "../components/Cart/cart";

function Cart_Container({
  cartItems,
  addRemoveAmount,
  removeFromCart,
  setProductPage,
}) {
  if (cartItems.length === 0) return <Redirect to="/" />;
  return (
    <Cart
      addToCart={addToCart}
      addRemoveAmount={addRemoveAmount}
      cartItems={cartItems.sort((a, b) => a.price - b.price)}
      removeFromCart={removeFromCart}
      setProductPage={setProductPage}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    cartItems: state.cart.items,

    filterItems: state.cart.items.filter(
      (item, index, a) => a.findIndex((t) => t.id === item.id) === index
    ),
  };
};

export default connect(mapStateToProps, {
  setProductType,
  addToCart,
  removeFromCart,
  addRemoveAmount,
  setProductPage,
})(Cart_Container);
