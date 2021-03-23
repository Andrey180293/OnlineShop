import { FC } from "react";
import "./cart.scss";
import Cart_left_content from "./Cart_Content/cart_left_content";
import Cart_right_content from "./Cart_Content/cart_right_content";

type PropsType = {
  cartItems: any[];
  addRemoveAmount: (item: object) => void;
  removeFromCart: (item: object) => void;
  setProductPage: (item: object) => void;
};

const Cart: FC<PropsType> = ({
  cartItems,
  addRemoveAmount,
  removeFromCart,
  setProductPage,
}) => {
  return (
    <div className="productCart  ">
      <div className=" col s12 m12  l10 ">
        {cartItems &&
          cartItems.map((item) => {
            return (
              <div className="productCart-container  ">
                <div
                  className="close-small-display   "
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  <i className="medium material-icons">close</i>
                </div>
                <Cart_left_content
                  item={item}
                  setProductPage={setProductPage}
                />

                <Cart_right_content
                  addRemoveAmount={addRemoveAmount}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              </div>
            );
          })}

        <div className="checkout-block">
          <div className="total-price">
            Total
            <span>
              {cartItems.reduce((acc, el) => acc + el.amount * el.price, 0)}грн
            </span>
          </div>
          <div className="checkout">Оформити </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
