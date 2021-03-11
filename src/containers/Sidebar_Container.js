import { useEffect, useState, useRef } from "react";
import "../App.scss";

import { setProductType } from "../store/action-creators/product";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Sidebar from "../components/Sidebar/sidebar";

function Sidebar_Container({
  visiblePopup,
  theme,
  products,
  setProductPage,
  byFilter,
  setProductType,
  productIndex,
  setHeaderNavContent,
}) {
  return (
    <Sidebar
      setProductType={setProductType}
      productIndex={productIndex}
      setHeaderNavContent={setHeaderNavContent}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    productIndex: state.product.productIndex,
  };
};

export default connect(mapStateToProps, {
  setProductType,
})(Sidebar_Container);
