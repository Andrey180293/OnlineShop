import { CartActionTypes, CartAction } from "./../../types/Cart";

export const addToCart = (obj: CartAction) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: obj,
});

export const removeFromCart = (payload: CartAction) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload,
});
export const setPricePlus = (payload: CartAction) => ({
  type: CartActionTypes.SET_PRICE_PLUS,
  payload,
});
export const setPriceMinus = (payload: CartAction) => ({
  type: CartActionTypes.SET_PRICE_MINUS,
  payload,
});
