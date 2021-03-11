import { useEffect, useState, useRef } from "react";
import App from "../App";
import "../App.scss";

import { setProductPage } from "../store/action-creators/product";

import { connect } from "react-redux";
import firebase from "firebase/app";
import { database } from "firebase";
import Content from "../components/Content/content";
import ProductPage from "../components/Content/ProductPage/ProductPage";

function Product_Page_Container({ page, setHeaderNavContent }) {
  setHeaderNavContent(false);

  return <ProductPage page={page[0]} />;
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    page: state.product.page,
    //isLoading: state.books.isLoading,
  };
};

export default connect(mapStateToProps, null)(Product_Page_Container);
