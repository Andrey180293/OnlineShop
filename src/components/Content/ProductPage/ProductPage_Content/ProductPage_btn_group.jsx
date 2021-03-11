import "../ProductPage.scss";

const ProductPage_btn_group = ({ page }) => {
  return (
    <div className="page-container-right-btn-group">
      <div className="btn waves-effect teal lighten-2">
        <i className="material-icons">add</i>
      </div>
      <div className="page-container-right-btn-group-input">
        <input
          type="text"
          value={page.id}
          style={{ height: "35px", width: "40px", textAlign: "center" }}
        />
      </div>

      <div className="btn waves-effect teal lighten-2">
        <i className="material-icons">remove</i>
      </div>
      <div className="waves-effect waves-light btn btn-buy">buy</div>
    </div>
  );
};
export default ProductPage_btn_group;
