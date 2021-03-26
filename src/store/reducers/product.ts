import { ProductAction, ProductActionTypes } from "../../types/Product";
import { ProductState } from "../../types/Product";

const initialization: ProductState = {
  product: [],
  phones: null,
  motorcycles: null,
  quadrocopters: null,
  robots: null,
  page: null,
  pageIndex: 0,
};

function productReducer(state = initialization, action: ProductAction) {
  switch (action.type) {
    case ProductActionTypes.SET_ALL_PRODUCT:
      return {
        ...state,
        product: [
          ...state.phones,
          ...state.motorcycles,
          ...state.quadrocopters,
          ...state.robots,
        ],
      };
    case ProductActionTypes.SET_MOTORCYCLES:
      return {
        ...state,
        product: action.payload,
        motorcycles: action.payload,
      };
    case ProductActionTypes.SET_PHONE:
      return {
        ...state,
        phones: action.payload,
        product: action.payload,
      };

    case ProductActionTypes.SET_ROBOTS:
      return {
        ...state,
        robots: action.payload,
        product: action.payload,
      };

    case ProductActionTypes.SET_QADROCOPTERS:
      return {
        ...state,
        product: action.payload,
        quadrocopters: action.payload,
      };

    case ProductActionTypes.SET_PRODUCT_PAGE:
      return {
        ...state,
        page: state.product.filter(
          (el: any) => el.id === action.payload.id && el
        ),
        pageIndex:
          (action.payload.category === "motorcycle" && 1) ||
          (action.payload.category === "phone" && 2) ||
          (action.payload.category === "robot" && 3) ||
          (action.payload.category === "qudrocopters" && 4),
      };

    default:
      return state;
  }
}

export default productReducer;
