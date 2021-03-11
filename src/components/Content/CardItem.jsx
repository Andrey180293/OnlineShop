import { NavLink } from "react-router-dom";
import TabItems from "./ProductPage/TabBar/TabItem";

const CardItem = ({ item, setProductPage, productIndex, addToCart }) => {
  const setProdType = (i) => {
    if (i === 0) return "piper";
    if (i === 1) return "phone";
    if (i === 2) return "robot";
    if (i === 3) return "kwadrokopter";
  };
  return (
    <>
      {" "}
      <div className="col s12 m6 xl3 l4">
        <div className="card">
          <NavLink
            onClick={() => setProductPage(item.id)}
            to={`/bar/${setProdType(productIndex)}/${item.id}`}
          >
            <div className="card-image">
              <img style={{ maxHeight: "200px" }} src={item.img[1]} />
            </div>

            <div className="card-content">
              <p>{item.name}</p>
            </div>
          </NavLink>

          <div className="card-action">
            <p>price {item.price}</p>
            <div
              className="btn waves-effect teal lighten-2"
              onClick={() => addToCart(item)}
            >
              Buy
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
