export interface ProductState {
  product: any[];
  page: null | {};
  productIndex: number;
}
export enum ProductActionTypes {
  SET_PRODUCT_TYPE = "SET_PRODUCT_TYPE",
  SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
}
interface SetProductTypeAction {
  type: ProductActionTypes.SET_PRODUCT_TYPE;
  payload: number;
}
interface SetProductPageAction {
  type: ProductActionTypes.SET_PRODUCT_PAGE;
  payload: {};
}
export type ProductAction = SetProductTypeAction | SetProductPageAction;
