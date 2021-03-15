import "../ProductPage.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ProductPage_btn_group = ({ page, cartItem, addToCart }) => {
  const [productAmount, setProdAmount] = useState(1);
  const onChange = (event) => {
    setProdAmount(event.target.value);
  };
  return (
    <div className="page-container-right-btn-group">
      <div
        className="btn waves-effect teal lighten-2"
        onClick={() => setProdAmount(productAmount > 1 ? productAmount - 1 : 1)}
      >
        <i className="material-icons">remove</i>
      </div>
      <div className="page-container-right-btn-group-input">
        <input
          type="text"
          //value={productAmount}
          onChange={onChange}
          value={productAmount}
          style={{ height: "35px", width: "40px", textAlign: "center" }}
        />
      </div>

      <div
        className="btn waves-effect teal lighten-2"
        onClick={() => setProdAmount(+productAmount + 1)}
      >
        <i className="material-icons">add</i>
      </div>

      {!cartItem ? (
        <div
          className="waves-effect waves-light btn btn-buy "
          onClick={() => addToCart({ ...page, amount: Number(productAmount) })}
        >
          {" "}
          Buy{" "}
        </div>
      ) : (
        <div className="waves-effect waves-light btn btn-buy">
          <NavLink to="/cart" style={{ color: "red" }}>
            In Cart
          </NavLink>{" "}
        </div>
      )}
    </div>
  );
};
export default ProductPage_btn_group;
