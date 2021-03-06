import "./ProductPage.scss";
import TabBar from "./TabBar/TabBar";
import ProductPage_btn_group from "./ProductPage_Content/ProductPage_btn_group";
import ProductPage_left_content from "./ProductPage_Content/ProductPage_left_content";
import { FC } from "react";
type PropsType = {
  cartItem: {};
  page: {
    price: number;
    img: [];
    name: string;
  };
  pageIndex: number;
  addToCart: (item: object) => void;
};
const ProductPage: FC<PropsType> = ({
  cartItem,
  page,
  pageIndex,
  addToCart,
}) => {
  return (
    <div
      className="ProductPage col s12 m12  l10 "
      style={{
        marginTop: "80px",
      }}
    >
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

          <TabBar page={page} pageIndex={pageIndex} />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
