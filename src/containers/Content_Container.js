import { useEffect, useState, useRef } from "react";
import "../App.scss";
import { setProductPage } from "../store/action-creators/product";
import { addToCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";

function Content_Container({
  visiblePopup,
  theme,
  products,
  setProductPage,
  byFilter,
  productIndex,
  addToCart,
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

  return (
    <Content
      setProductPage={setProductPage}
      visiblePopup={visiblePopup}
      products={sortBy(products[productIndex], byFilter)}
      allProducts={products}
      productIndex={productIndex}
      addToCart={addToCart}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    products: state.product.product,

    byFilter: state.filter.byFilter,
    productIndex: state.product.productIndex,
  };
};

export default connect(mapStateToProps, {
  setProductPage,
  addToCart,
})(Content_Container);
