import "../App.scss";
import { Redirect } from "react-router-dom";
import { setProductPage } from "../store/action-creators/product";
import { addRemoveAmount, removeFromCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Cart from "../components/Cart/cart";

import { compose } from "redux";
import { StateType } from "../store/store";
interface CartProps {
  cartItems: Array<object>;
  addRemoveAmount: (item: object) => void;
  removeFromCart: (item: object) => void;
  setProductPage: (item: object) => void;
}

const Cart_Container = ({
  cartItems,
  addRemoveAmount,
  removeFromCart,
  setProductPage,
}: CartProps) => {
  if (cartItems.length === 0) return <Redirect to="/" />;
  return (
    <Cart
      addRemoveAmount={addRemoveAmount}
      cartItems={cartItems.sort((a: any, b: any) => a.id - b.id)}
      removeFromCart={removeFromCart}
      setProductPage={setProductPage}
    />
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    cartItems: state.cart.items,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    removeFromCart,
    addRemoveAmount,
    setProductPage,
  })
)(Cart_Container);
