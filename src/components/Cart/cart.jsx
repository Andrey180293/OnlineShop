import "./cart.scss";
import Cart_left_content from "./Cart_Content/cart_left_content";
import Cart_right_content from "./Cart_Content/cart_right_content";

const Cart = ({ addToCart, cartItems }) => {
  console.log(cartItems);
  return (
    <div className="productCart  ">
      <div className=" col s12 m12  l10 ">
        {cartItems &&
          cartItems.map((item) => {
            return (
              <div className="productCart-container  ">
                <div className="close-small-display   ">
                  <i className="medium material-icons">close</i>
                </div>
                <Cart_left_content item={item} />

                <Cart_right_content addToCart={addToCart} item={item} />
              </div>
            );
          })}

        <div className="checkout-block">
          <div className="total-price">
            Total<span>1557 грн</span>
          </div>
          <div className="checkout">Оформити </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
