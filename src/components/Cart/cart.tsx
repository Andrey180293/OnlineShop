import { FC, useEffect, useState } from "react";
import "./cart.scss";
import Cart_left_content from "./Cart_Content/cart_left_content";
import Cart_right_content from "./Cart_Content/cart_right_content";
import FormOrder from "./FormOrder";

type PropsType = {
  cartItems: any[];
  addRemoveAmount: (item: object) => void;
  removeFromCart: (item: object) => void;
  setProductPage: (item: object) => void;
  toOrder: (item: object) => void;
};

const Cart: FC<PropsType> = ({
  cartItems,
  addRemoveAmount,
  removeFromCart,
  setProductPage,
  toOrder,
}) => {
  const [isOpenFormOrder, setOpenFormOrder] = useState(false);
  let totalPrice =
    cartItems.reduce((acc, el) => acc + el.amount * el.price, 0) || 0;
  useEffect(() => {
    window.scrollTo(10, 0);
  }, [isOpenFormOrder]);
  return (
    <div className="productCart  ">
      <div
        className=" col s12 m12  l10 "
        style={{
          marginTop: "70px",
        }}
      >
        {isOpenFormOrder && (
          <FormOrder
            toOrder={toOrder}
            cartItems={cartItems}
            setOpenFormOrder={setOpenFormOrder}
            totalPrice={totalPrice}
          />
        )}

        {cartItems &&
          cartItems.map((item, key) => {
            return (
              <div className="productCart-container  " key={key}>
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
              {totalPrice}
              грн
            </span>
          </div>
          <div className="checkout" onClick={() => setOpenFormOrder(true)}>
            Оформити{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
