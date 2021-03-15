import "../cart.scss";
import { NavLink } from "react-router-dom";

const Cart_left_content = ({ item, setProductPage }) => {
  return (
    <div className="productCart-left">
      <div className="productCart-left-img">
        <NavLink
          to={`/bar/${item.category}/${item.id}`}
          onClick={() => setProductPage(item)}
        >
          <img src={item.img[0]} alt="none" />{" "}
        </NavLink>{" "}
      </div>

      <div className="productCart-left-description  ">
        <p>{item.name}</p>
      </div>
    </div>
  );
};
export default Cart_left_content;
