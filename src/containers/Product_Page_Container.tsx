import "../App.scss";
import { addToCart } from "../store/action-creators/cart";
import { connect } from "react-redux";
import ProductPage from "../components/Content/ProductPage/ProductPage";
import Preloader from "../commons/Preloader";
import { StateType } from "../store/store";
import { compose } from "redux";
interface PageProps {
  isLoading: boolean;
  pageIndex: number;
  page: any;
  cartItem: Array<object>;
  addToCart: (item: {}) => void;
}
function Product_Page_Container({
  page,
  cartItem,
  addToCart,
  isLoading,
  pageIndex,
}: PageProps) {
  if (isLoading === false) return <Preloader />;
  return (
    <ProductPage
      pageIndex={pageIndex}
      addToCart={addToCart}
      page={page[0]}
      cartItem={cartItem.filter((el: any) => el._id === page[0]._id)[0]}
    />
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    // @ts-ignore
    page: state.product.page,
    // @ts-ignore
    pageIndex: state.product.pageIndex,
    // @ts-ignore
    isLoading: state.product.isLoading,
    cartItem: state.cart.items,
  };
};

export default compose<StateType>(connect(mapStateToProps, { addToCart }))(
  Product_Page_Container
);
