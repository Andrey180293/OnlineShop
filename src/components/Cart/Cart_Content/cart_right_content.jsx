import "../cart.scss";

const Cart_right_content = ({ item }) => {
  return (
    <div className="productCart-right">
      <div className="productCart-right-prise ">
        <p>{item.price} грн</p>
      </div>
      <div className="productCart-right-btn-group">
        <div className="productCart-right-btn-group btn-effect  waves-effect waves-light green">
          <i className="material-icons">add</i>
        </div>
        <div className="productCart-right-btn-group-input ">
          <input type="text" defaultValue="33" />
        </div>
        <div className="productCart-right-btn-group btn-effect waves-effect waves-light red">
          <i className="material-icons">remove</i>
        </div>
      </div>

      <div className="productCart-right-prise ">100500 грн</div>
      <div className="productCart-right-close  ">
        <i className="material-icons">close</i>
      </div>
    </div>
  );
};
export default Cart_right_content;
