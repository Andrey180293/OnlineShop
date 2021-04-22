import { ProductActionTypes, ProductAction } from "./../../types/Product";

import { db } from "../../servises/firebase";
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
        body: JSON.stringify({
          ...item,
          email: "andrey@lba.ru",
          adress: "lopushanka",
          name: "Andrey",
          phoneNumber: 12345678,
          data: item,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.json();
    console.log(data.message);
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: true });

    //dispatch(getProducts(item.category));
    //dispatch(  setSnackBarMessage({ message: data.message, status: data.status })    );
    // dispatch(setOpenSnackBar(true));
  };
};
