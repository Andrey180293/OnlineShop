export interface ProductState {
  product: Array<object>;

  isLoading: boolean;
  page: any;
  pageIndex: number;
  snackbarMessage: string | null;
  isOpenSnackBar: boolean;
}
export enum ProductActionTypes {
  SET_ALL_PRODUCT = "SET_ALL_PRODUCT",
  SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_LOAD = "SET_LOAD",
  SET_SNACKBAR_MESSAGE = "SET_SNACKBAR_MESSAGE",
  SET_OPEN_SNACKBAR = "SET_OPEN_SNACKBAR",
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
interface snackBarMessageAction {
  type: ProductActionTypes.SET_SNACKBAR_MESSAGE;
  payload: string;
}

interface setOpenSnackBarAction {
  type: ProductActionTypes.SET_OPEN_SNACKBAR;
  payload: boolean;
}

export type ProductAction =
  | SetAllProductAction
  | SetProductPageAction
  | SetProductsAction
  | SetLoadAction
  | snackBarMessageAction
  | setOpenSnackBarAction;
