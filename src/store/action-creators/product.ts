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
  const items: any = [];
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: false });

    await db
      .collection(`${link}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch({
          type: ProductActionTypes.SET_PRODUCTS,
          payload: [...items],
        });
      });
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: true });
    return [...items];
  };
};

export const getAllProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: false });
    const motorcyclesArr = await db
      .collection(`motorcycles`)
      .get()
      .then((querySnapshot) => {
        const items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        return [...items];
      });

    const phonesArr = await db
      .collection(`phones`)
      .get()
      .then((querySnapshot) => {
        const items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        return [...items];
      });

    const robotsArr = await db
      .collection(`robots`)
      .get()
      .then((querySnapshot) => {
        const items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        return [...items];
      });

    const quarocoptersArr = await db
      .collection(`qudrocopters`)
      .get()
      .then((querySnapshot) => {
        const items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        return [...items];
      });
    dispatch({
      type: ProductActionTypes.SET_PRODUCTS,
      payload: [
        ...motorcyclesArr,
        ...robotsArr,
        ...phonesArr,
        ...quarocoptersArr,
      ],
    });
    dispatch({ type: ProductActionTypes.SET_LOAD, payload: true });
  };
};
