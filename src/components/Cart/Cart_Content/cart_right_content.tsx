import { useEffect, useState, FC } from "react";
import "../cart.scss";

type PropsType = {
  item: {
    amount: number;
    price: number;
  };

  addRemoveAmount: (item: object) => void;
  removeFromCart: (item: object) => void;
};

const Cart_right_content: FC<PropsType> = ({
  item,
  addRemoveAmount,
  removeFromCart,
}) => {
  const [productAmount, setAmountProduct] = useState(item.amount);

  const onChange = (event: any) => {
    setAmountProduct(event.target.value);
  };
  useEffect(() => {
    addRemoveAmount({ ...item, amount: +productAmount });
  }, [productAmount]);

  return (
    <div className="productCart-right">
      <div className="productCart-right-prise ">
        <p>{item.price} грн</p>
      </div>
      <div className="productCart-right-btn-group">
        <div
          className="productCart-right-btn-group btn-effect  waves-effect waves-light  red "
          onClick={() => {
            addRemoveAmount({
              ...item,
              amount: item.amount > 1 ? item.amount + -1 : 1,
            });
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
            addRemoveAmount({ ...item, amount: item.amount + 1 });
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
