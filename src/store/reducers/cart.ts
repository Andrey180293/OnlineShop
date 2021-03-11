import { CartState, CartAction, CartActionTypes } from "./../../types/Cart";
const initialization: CartState = {
  totalPrice: 0,
  items: [],
  countItem: 0,
};

function cartReducer(state = initialization, action: CartAction) {
  switch (action.type) {
    case "SET_PRICE_PLUS": {
      return { ...state, totalPrice: action.payload + state.totalPrice };
    }
    case "SET_PRICE_MINUS": {
      return { ...state, totalPrice: state.totalPrice - action.payload };
    }
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item, index, a) =>
            a.findIndex((f: any) => f.id === action.payload) !== index
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;
