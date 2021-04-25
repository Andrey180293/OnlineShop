import React, { FC, useState } from "react";
import "./cart.scss";
const UseInput = (initionalvalue: any) => {
  const [value, setValue] = useState(initionalvalue);
  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};
type PropsType = {
  cartItems: any[];
  totalPrice: number;
  toOrder: (item: object) => void;
  setOpenFormOrder: (isOpenFormOrder: boolean) => void;
};

const htmlFormOrder: FC<PropsType> = ({
  cartItems,
  totalPrice,
  toOrder,
  setOpenFormOrder,
}) => {
  const nameInput = UseInput("");
  const emailInput = UseInput("");
  const phoneNumberInput = UseInput("");
  const adressInput = UseInput("");

  return (
    <div className="create_order  ">
      <i
        className="material-icons right brown lighten-4"
        onClick={() => setOpenFormOrder(false)}
      >
        close
      </i>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            type="text"
            value={nameInput.value}
            onChange={nameInput.onChange}
          />
          <label htmlFor="name">name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="phone"
            type="number"
            className="validate"
            value={phoneNumberInput.value}
            onChange={phoneNumberInput.onChange}
          />
          <label htmlFor="phone">phone</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="email"
            className="validate"
            value={emailInput.value}
            onChange={emailInput.onChange}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="adress"
            type="text"
            value={adressInput.value}
            onChange={adressInput.onChange}
          />
          <label htmlFor="adress">adress</label>
        </div>
      </div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={() =>
          toOrder({
            email: emailInput.value,
            adress: adressInput.value,
            name: nameInput.value,
            phoneNumber: phoneNumberInput.value,
            data: cartItems,
            totalPrice: totalPrice,
          })
        }
      >
        Create order
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};
export default htmlFormOrder;
