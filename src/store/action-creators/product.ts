import { ProductActionTypes, ProductAction } from "./../../types/Product";

export const setProductType = (payload: ProductAction) => ({
  type: ProductActionTypes.SET_PRODUCT_TYPE,
  payload,
});
export const setProductPage = (payload: ProductAction) => ({
  type: ProductActionTypes.SET_PRODUCT_PAGE,
  payload,
});
