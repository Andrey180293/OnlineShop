import { ProductActionTypes, ProductAction } from "./../../types/Product";

import { Dispatch } from "redux";

export const setAllProducts = () => ({
  type: ProductActionTypes.SET_ALL_PRODUCT,
});

export const setProductPage = (payload: ProductAction) => ({
  type: ProductActionTypes.SET_PRODUCT_PAGE,
  payload,
});

export const setLoad = (payload: boolean) => ({
  type: ProductActionTypes.SET_LOAD,
  payload,
});

export const setOpenSnackBar = (payload: boolean) => ({
  type: ProductActionTypes.SET_OPEN_SNACKBAR,
  payload,
});
export const getProducts = (link: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: false });

    let response = await fetch(
      `https://radiant-ravine-14822.herokuapp.com/api/products/${link}`,
      {
        //  params:'link',
      }
    );
    let data = await response.json();

    dispatch({
      type: ProductActionTypes.SET_PRODUCTS,
      payload: data.data,
    });

    dispatch({ type: ProductActionTypes.SET_LOAD, payload: true });
    return data;
  };
};

export const setOrder = (item: object) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: false });
    let response = await fetch(
      `https://radiant-ravine-14822.herokuapp.com/api/cart`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.json();
    console.log(data.message);
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: true });

    dispatch({
      type: ProductActionTypes.SET_SNACKBAR_MESSAGE,
      payload: data.message,
    });
    dispatch({
      type: ProductActionTypes.SET_OPEN_SNACKBAR,
      payload: true,
    });
  };
};
