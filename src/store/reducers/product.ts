import { ProductAction, ProductActionTypes } from "../../types/Product";
import { ProductState } from "../../types/Product";

const initialization: ProductState = {
  product: [],
  page: null,
  pageIndex: 0,
  isLoading: false,
  snackbarMessage: null,
  isOpenSnackBar: false,
};

function productReducer(state = initialization, action: ProductAction) {
  switch (action.type) {
    case ProductActionTypes.SET_ALL_PRODUCT:
      return {
        ...state,
        product: [],
      };
    case ProductActionTypes.SET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case ProductActionTypes.SET_LOAD:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ProductActionTypes.SET_PRODUCT_PAGE:
      return {
        ...state,
        page: state.product.filter(
          (el: any) => el._id === action.payload._id && el
        ),
        pageIndex:
          (action.payload.category === "motorcycles" && 1) ||
          (action.payload.category === "phones" && 2) ||
          (action.payload.category === "robots" && 3) ||
          (action.payload.category === "qudrocopters" && 4),
      };
    case ProductActionTypes.SET_OPEN_SNACKBAR:
      return {
        ...state,
        isOpenSnackBar: action.payload,
      };
    case ProductActionTypes.SET_SNACKBAR_MESSAGE:
      return {
        ...state,
        snackbarMessage: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
