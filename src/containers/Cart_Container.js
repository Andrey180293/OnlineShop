import { useEffect, useState, useRef } from "react";
import "../App.scss";

import { setProductType } from "../store/action-creators/product";
import { addToCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Sidebar from "../components/Sidebar/sidebar";
import Cart from "../components/Cart/cart";

function Cart_Container({ cartItems }) {
  return <Cart addToCart={addToCart} cartItems={cartItems} />;
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    cartItems: state.cart.items,

    itemsCart: cart.items,
    filterItems: cart.items.filter(
      (item, index, a) => a.findIndex((t) => t.id === item.id) === index
    ),
  };
};

export default connect(mapStateToProps, {
  setProductType,
  addToCart,
})(Cart_Container);
