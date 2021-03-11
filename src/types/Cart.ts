export interface CartState {
  totalPrice: number;
  items: [];
  countItem: number;
}
export enum CartActionTypes {
  SET_PRICE_PLUS = "SET_PRICE_PLUS",
  SET_PRICE_MINUS = "SET_PRICE_MINUS",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}
interface SetPricePlusAction {
  type: CartActionTypes.SET_PRICE_PLUS;
  payload: number;
}
interface SetPriceMinusAction {
  type: CartActionTypes.SET_PRICE_MINUS;
  payload: number;
}
interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: [];
}
interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: [];
}
export type CartAction =
  | SetPricePlusAction
  | SetPriceMinusAction
  | AddToCartAction
  | RemoveFromCartAction;
