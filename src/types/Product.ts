export interface ProductState {
  product: Array<object>;

  isLoading: boolean;
  page: any;
  pageIndex: number;
}
export enum ProductActionTypes {
  SET_ALL_PRODUCT = "SET_ALL_PRODUCT",
  SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_LOAD = "SET_LOAD",
}
interface SetAllProductAction {
  type: ProductActionTypes.SET_ALL_PRODUCT;
}
interface SetProductPageAction {
  type: ProductActionTypes.SET_PRODUCT_PAGE;
  payload: any;
}
interface SetProductsAction {
  type: ProductActionTypes.SET_PRODUCTS;
  payload: any;
}
interface SetLoadAction {
  type: ProductActionTypes.SET_LOAD;
  payload: boolean;
}

export type ProductAction =
  | SetAllProductAction
  | SetProductPageAction
  | SetProductsAction
  | SetLoadAction;
