import { CartState, CartAction, CartActionTypes } from "./../../types/Cart";
const initialization: CartState = {
  totalPrice: 0,
  items: [],
  countItem: 0,
};

function cartReducer(state = initialization, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_REMOVE_AMOUNT: {
      return {
        ...state,
        items: [
          ...state.items.filter((el) => {
            if (
              el.id + el.category !==
              action.payload.id + action.payload.category
            )
              return el;
          }),
          action.payload,
        ],
      };
    }
    case "SET_PRICE_MINUS": {
      return { ...state, totalPrice: state.totalPrice - action.payload };
    }
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...action.payload, inCart: true }],
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: [
          ...state.items.filter(
            (el) =>
              el.id + el.category !==
              action.payload.id + action.payload.category
          ),
        ],
      };
    default:
      return state;
  }
}

export default cartReducer;
