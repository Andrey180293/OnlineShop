import "../cart.scss";

const Cart_left_content = ({ item }) => {
  return (
    <div className="productCart-left">
      <div className="productCart-left-img">
        <img src={item.img[0]} alt="none" />{" "}
      </div>

      <div className="productCart-left-description  ">
        <p>{item.name}</p>
      </div>
    </div>
  );
};
export default Cart_left_content;
