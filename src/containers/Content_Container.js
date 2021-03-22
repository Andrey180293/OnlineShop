import { useEffect, useState, useRef } from "react";
import "../App.scss";
import { setProductPage } from "../store/action-creators/product";
import { setLoad } from "../store/action-creators/theme";

import { addToCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Preloader from "../commons/Preloader";

function Content_Container({
  visiblePopup,
  theme,
  products,
  setProductPage,
  byFilter,
  productIndex,
  addToCart,
  cartItem,
  phones,
  isLoad,
  setLoad,
}) {
  const sortBy = (products, byFilter) => {
    switch (byFilter) {
      case "all":
        return products && products.sort((a, b) => (a.id > b.id ? 1 : -1));

      case "price_low":
        return products.sort((a, b) => (a.price > b.price ? 1 : -1));
      case "price_hight":
        return products.sort((a, b) => (b.price > a.price ? 1 : -1));

      case "name":
        return products.sort((a, b) => (a.name > b.name ? 1 : -1));

      default:
        return products;
    }
  };
  //console.log(isLoad);

  const setPage = (item) => {
    setLoad(false);
    setProductPage(item);
    setLoad(true);
  };

  if (isLoad === false) return <Preloader />;
  return (
    <Content
      setProductPage={setPage}
      visiblePopup={visiblePopup}
      products={sortBy(products, byFilter)}
      productIndex={productIndex}
      addToCart={addToCart}
      cartItem={cartItem}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    isLoad: state.theme.isLoad,

    cartItem: state.cart.items,
    products: state.product.product,
    phones: state.product.phones,

    byFilter: state.filter.byFilter,
    productIndex: state.product.productIndex,
  };
};

export default connect(mapStateToProps, {
  setProductPage,
  setLoad,
  addToCart,
})(Content_Container);
