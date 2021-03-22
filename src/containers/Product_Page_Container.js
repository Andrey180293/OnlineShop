import "../App.scss";
import { addToCart } from "../store/action-creators/cart";
import { setLoad } from "../store/action-creators/theme";

import { connect } from "react-redux";
import ProductPage from "../components/Content/ProductPage/ProductPage";
import { useEffect } from "react";
import Preloader from "../commons/Preloader";

function Product_Page_Container({
  page,
  setHeaderNavContent,
  cartItem,
  addToCart,
  isLoad,
  setLoad,
  pageIndex,
}) {
  setHeaderNavContent(false);

  if (isLoad === false) return <Preloader />;
  return (
    <ProductPage
      pageIndex={pageIndex}
      addToCart={addToCart}
      page={page[0]}
      cartItem={cartItem.filter((el) => el.id === page[0].id)[0]}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    page: state.product.page,
    pageIndex: state.product.pageIndex,

    cartItem: state.cart.items,
    isLoad: state.theme.isLoad,
  };
};

export default connect(mapStateToProps, { addToCart, setLoad })(
  Product_Page_Container
);
