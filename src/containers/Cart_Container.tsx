import "../App.scss";
import { Redirect } from "react-router-dom";

import { setProductPage, setOrder } from "../store/action-creators/product";
import {
  addRemoveAmount,
  removeFromCart,
  clearCart,
} from "../store/action-creators/cart";

import { connect } from "react-redux";
import Cart from "../components/Cart/cart";

import { compose } from "redux";
import { StateType } from "../store/store";
interface CartProps {
  cartItems: Array<object>;
  addRemoveAmount: (item: object) => void;
  removeFromCart: (item: object) => void;
  setProductPage: (item: object) => void;
  setOrder: (item: object) => void;
  clearCart: () => void;
}

const Cart_Container = ({
  cartItems,
  addRemoveAmount,
  removeFromCart,
  setProductPage,
  setOrder,
  clearCart,
}: CartProps) => {
  const toOrder = (item: object) => {
    setOrder(item);
    clearCart();
  };

  if (cartItems.length === 0) return <Redirect to="/" />;
  return (
    <Cart
      addRemoveAmount={addRemoveAmount}
      cartItems={cartItems.sort(
        (a: any, b: any) =>
          +a._id.replace(/\D/g, "") - +b._id.replace(/\D/g, "")
      )}
      removeFromCart={removeFromCart}
      setProductPage={setProductPage}
      toOrder={toOrder}
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
    setOrder,
    clearCart,
  })
)(Cart_Container);
