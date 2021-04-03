import "../cart.scss";
import { NavLink } from "react-router-dom";
import { FC } from "react";

type PropsType = {
  item: {
    category: string;
    id: number;
    img: string;
    name: string;
  };

  setProductPage: (item: object) => void;
};

const Cart_left_content: FC<PropsType> = ({ item, setProductPage }) => {
  return (
    <div className="productCart-left">
      <div className="productCart-left-img">
        <NavLink
          to={`/product/${item.category}/${item.id}`}
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
