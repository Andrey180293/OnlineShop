import { useEffect, useState, useRef } from "react";
import "../App.scss";

import {
  toggleTheme,
  setActiveSidebarLink,
  setLoad,
} from "../store/action-creators/theme";
import { setAllProducts } from "../store/action-creators/product";

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
  setAllProducts,
  productIndex,
  cartItem,
  setActiveSidebarLink,
  setLoad,
}) {
  const SetPage = async () => {
    setLoad(false);
    setHeaderNavContent(true);
    setAllProducts();
    await setActiveSidebarLink(false);

    setLoad(true);
  };

  return (
    <Header
      SetPage={SetPage}
      productIndex={productIndex}
      theme={theme}
      isThemToogle={isThemToogle}
      toggleTheme={toggleTheme}
      toogleMenu={toogleMenu}
      isOpenMenu={isOpenMenu}
      setVisiblePopup={setVisiblePopup}
      visiblePopup={visiblePopup}
      visibleHeadNavContent={visibleHeadNavContent}
      cartItem={cartItem}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    cartItem: state.cart.items,

    byFilter: state.filter.byFilter,
    productIndex: state.product.productIndex,
  };
};

export default connect(mapStateToProps, {
  toggleTheme,
  setLoad,
  setAllProducts,
  setActiveSidebarLink,
})(Header_Container);
