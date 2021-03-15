import "../App.scss";
import { addToCart } from "../store/action-creators/cart";
import { connect } from "react-redux";
import ProductPage from "../components/Content/ProductPage/ProductPage";

function Product_Page_Container({
  page,
  setHeaderNavContent,
  cartItem,
  addToCart,
}) {
  setHeaderNavContent(false);
  console.log(cartItem);
  console.log(page);

  return (
    <ProductPage
      addToCart={addToCart}
      page={page[0]}
      cartItem={
        cartItem.filter(
          (el) => el.id + el.category === page[0].id + page[0].category
        )[0]
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    page: state.product.page,
    cartItem: state.cart.items,
    //isLoading: state.books.isLoading,
  };
};

export default connect(mapStateToProps, { addToCart })(Product_Page_Container);
