import "../App.scss";
import { setProductPage } from "../store/action-creators/product";
import { setLoad } from "../store/action-creators/theme";

import { addToCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Preloader from "../commons/Preloader";
import { StateType } from "../store/store";
import { compose } from "redux";
interface ContentProps {
  byFilter: string;
  isLoad: boolean;
  products: [];
  cartItem: [];
  setLoad: (isLoad: boolean) => void;
  addToCart: (item: object) => void;
  setProductPage: (item: object) => void;
}
function Content_Container({
  products,
  cartItem,
  byFilter,
  isLoad,
  setProductPage,
  addToCart,
  setLoad,
}: ContentProps) {
  const sortBy = (products: Array<object>, byFilter: string) => {
    switch (byFilter) {
      case "all":
        return (
          products && products.sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
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
  //console.log(isLoad);

  const setPage = (item: object) => {
    setLoad(false);
    setProductPage(item);
    setLoad(true);
  };

  if (isLoad === false) return <Preloader />;
  return (
    <Content
      setProductPage={setPage}
      addToCart={addToCart}
      cartItem={cartItem}
      // @ts-ignore
      products={sortBy(products, byFilter)}
    />
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    isLoad: state.theme.isLoad,
    byFilter: state.filter.byFilter,

    cartItem: state.cart.items,
    // @ts-ignore
    products: state.product.product,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    setProductPage,
    setLoad,
    addToCart,
  })
)(Content_Container);
