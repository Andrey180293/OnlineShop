import "../App.scss";
import { Redirect } from "react-router-dom";
import { setProductPage } from "../store/action-creators/product";
import { addRemoveAmount, removeFromCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Cart from "../components/Cart/cart";

import { compose } from "redux";

const Cart_Container = ({
  cartItems,
  addRemoveAmount,
  removeFromCart,
  setProductPage,
}) => {
  if (cartItems.length === 0) return <Redirect to="/" />;
  return (
    <Cart
      addRemoveAmount={addRemoveAmount}
      cartItems={cartItems.sort((a, b) => a.id - b.id)}
      removeFromCart={removeFromCart}
      setProductPage={setProductPage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    cartItems: state.cart.items,
  };
};

export default compose(
  connect(mapStateToProps, {
    removeFromCart,
    addRemoveAmount,
    setProductPage,
  })
)(Cart_Container);
