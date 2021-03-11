import { useEffect, useState, useRef } from "react";
import "../App.scss";

import { toggleTheme } from "../store/action-creators/theme";
import { setProductType } from "../store/action-creators/product";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Header from "../components/Header/header";

function Header_Container({
  theme,
  isThemToogle,
  toggleTheme,
  isOpenMenu,
  toogleMenu,
  setVisiblePopup,
  visiblePopup,
  setHeaderNavContent,
  visibleHeadNavContent,
  setProductType,
  productIndex,
}) {
  return (
    <Header
      setProductType={setProductType}
      productIndex={productIndex}
      theme={theme}
      isThemToogle={isThemToogle}
      toggleTheme={toggleTheme}
      toogleMenu={toogleMenu}
      isOpenMenu={isOpenMenu}
      setVisiblePopup={setVisiblePopup}
      visiblePopup={visiblePopup}
      setHeaderNavContent={setHeaderNavContent}
      visibleHeadNavContent={visibleHeadNavContent}
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
  toggleTheme,
  setProductType,
})(Header_Container);
