import "../App.scss";
import {
  setProductPage,
  setOpenSnackBar,
} from "../store/action-creators/product";
import { useState } from "react";

import { addToCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Preloader from "../commons/Preloader";
import { StateType } from "../store/store";
import { compose } from "redux";
import SnackBar from "../commons/SnackBar";
interface ContentProps {
  byFilter: string;
  snackbarMessage: string;
  isLoading: boolean;
  isOpenSnackBar: boolean;

  products: [];
  cartItem: [];

  setOpenSnackBar: (isOpen: boolean) => void;
  addToCart: (item: object) => void;

  setProductPage: (item: object) => void;
}
function Content_Container({
  products,
  cartItem,
  byFilter,
  isLoading,
  setProductPage,
  addToCart,
  snackbarMessage,
  setOpenSnackBar,
  isOpenSnackBar,
}: ContentProps) {
  const sortBy = (products: Array<object>, byFilter: string) => {
    switch (byFilter) {
      case "all":
        return (
          products &&
          products.sort((a: any, b: any) => (a._id > b._id ? 1 : -1))
        );

      case "price_low":
        return products.sort((a: any, b: any) => (a.price > b.price ? 1 : -1));
      case "price_hight":
        return products.sort((a: any, b: any) => (b.price > a.price ? 1 : -1));

      case "name":
        return products.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));

      default:
        return products;
    }
  };

  const setPage = (item: object) => {
    setProductPage(item);
  };

  if (isLoading === false) return <Preloader />;
  return (
    <>
      {" "}
      {isOpenSnackBar && (
        <SnackBar message={snackbarMessage} setOpenSnackBar={setOpenSnackBar} />
      )}
      <Content
        isLoading={isLoading}
        setProductPage={setPage}
        addToCart={addToCart}
        cartItem={cartItem}
        // @ts-ignore
        products={sortBy(products, byFilter)}
      />
    </>
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    byFilter: state.filter.byFilter,

    cartItem: state.cart.items,
    // @ts-ignore
    products: state.product.product,
    // @ts-ignore
    isLoading: state.product.isLoading,
    // @ts-ignore
    snackbarMessage: state.product.snackbarMessage,
    // @ts-ignore

    isOpenSnackBar: state.product.isOpenSnackBar,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    setProductPage,
    addToCart,
    setOpenSnackBar,
  })
)(Content_Container);
