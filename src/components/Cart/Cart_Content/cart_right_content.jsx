import { useEffect, useState } from "react";
import "../cart.scss";

const Cart_right_content = ({ item, addRemoveAmount, removeFromCart }) => {
  const [productAmount, setProdAmount] = useState(item.amount);

  const onChange = (event) => {
    setProdAmount(event.target.value);
  };
  useEffect(() => {
    addRemoveAmount({ ...item, amount: +productAmount });
  }, [productAmount]);
  console.log(productAmount);
  console.log(item.amount);
  return (
    <div className="productCart-right">
      <div className="productCart-right-prise ">
        <p>{item.price} грн</p>
      </div>
      <div className="productCart-right-btn-group">
        <div
          className="productCart-right-btn-group btn-effect  waves-effect waves-light  red "
          onClick={() => {
            setProdAmount(productAmount > 0 ? productAmount - 1 : 0);
          }}
        >
          <i className="material-icons">remove</i>
        </div>
        <div className="productCart-right-btn-group-input ">
          <input type="text" onChange={onChange} value={item.amount} />{" "}
        </div>
        <div
          className="productCart-right-btn-group btn-effect waves-effect waves-light green"
          onClick={() => {
            setProdAmount(+productAmount + 1);
          }}
        >
          <i className="material-icons"> add</i>
        </div>
      </div>

      <div className="productCart-right-prise ">
        {item.amount * item.price} грн
      </div>
      <div
        className="productCart-right-close  "
        onClick={() => {
          removeFromCart(item);
        }}
      >
        <i className="material-icons">close</i>
      </div>
    </div>
  );
};
export default Cart_right_content;
