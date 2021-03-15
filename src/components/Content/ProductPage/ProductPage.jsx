import "./ProductPage.scss";
import TabBar from "./TabBar/TabBar";
import ProductPage_btn_group from "./ProductPage_Content/ProductPage_btn_group";
import ProductPage_left_content from "./ProductPage_Content/ProductPage_left_content";

const ProductPage = ({ cartItem, page, addToCart }) => {
  console.log(cartItem);

  return (
    <div className="ProductPage col s12 m12  l10 ">
      <div className="page-container ">
        <ProductPage_left_content page={page} />

        <div className="page-container-right  col s12 m12 l7">
          <div className="page-container-right-price">
            <span>Price </span>
            <span>{page.price} грн</span>
          </div>
          <ProductPage_btn_group
            page={page}
            cartItem={cartItem}
            addToCart={addToCart}
          />

          <TabBar page={page} />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
