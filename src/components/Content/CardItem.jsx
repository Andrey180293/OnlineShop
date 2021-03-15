import { NavLink } from "react-router-dom";
import TabItems from "./ProductPage/TabBar/TabItem";

const CardItem = ({ item, setProductPage, addToCart, cartItem }) => {
  return (
    <>
      {" "}
      <div className="col s12 m6 xl3 l4">
        <div className="card">
          <NavLink
            onClick={() => setProductPage(item)}
            to={`/bar/${item.category}/${item.id}`}
          >
            <div
              className="card-image "
              style={{
                minHeight: "200px",
                maxHeight: "200px",

                background: `url(${item.img[0]}) 0 0/100% 100% no-repeat`,
              }}
            ></div>

            <div className="card-content">
              <p>{item.name}</p>
            </div>
          </NavLink>

          <div className="card-action">
            <p>price {item.price}</p>
            {!cartItem || cartItem.id !== item.id ? (
              <div
                className="btn waves-effect teal lighten-2 "
                onClick={() => addToCart(item)}
              >
                {" "}
                Buy{" "}
              </div>
            ) : (
              <div className="btn waves-effect teal lighten-2 ">
                <NavLink to="/cart">In Cart</NavLink>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
