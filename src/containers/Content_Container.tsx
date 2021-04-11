import "../App.scss";
import { setProductPage } from "../store/action-creators/product";

import { addToCart } from "../store/action-creators/cart";

import { connect } from "react-redux";
import Content from "../components/Content/content";
import Preloader from "../commons/Preloader";
import { StateType } from "../store/store";
import { compose } from "redux";
interface ContentProps {
  byFilter: string;
  isLoading: boolean;
  products: [];
  cartItem: [];
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
    setProductPage(item);
  };

  if (isLoading === false) return <Preloader />;
  return (
    <Content
      isLoading={isLoading}
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
    byFilter: state.filter.byFilter,

    cartItem: state.cart.items,
    // @ts-ignore
    products: state.product.product,
    // @ts-ignore
    isLoading: state.product.isLoading,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    setProductPage,
    addToCart,
  })
)(Content_Container);
