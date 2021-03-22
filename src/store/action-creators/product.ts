import { ProductActionTypes, ProductAction } from "./../../types/Product";

import { db, auth } from "../../servises/firebase";
import { Dispatch } from "redux";

export const setAllProducts = () => ({
  type: ProductActionTypes.SET_ALL_PRODUCT,
});

export const setProductPage = (payload: ProductAction) => ({
  type: ProductActionTypes.SET_PRODUCT_PAGE,
  payload,
});

export const setPhones = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    await db
      .collection("phones")
      .get()
      .then((querySnapshot) => {
        let items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch({ type: ProductActionTypes.SET_PHONE, payload: [...items] });
      });
  };
};

export const setMotorcycles = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    await db
      .collection("motorcycles")
      .get()
      .then((querySnapshot) => {
        let items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch({
          type: ProductActionTypes.SET_MOTORCYCLES,
          payload: [...items],
        });
      });
  };
};

export const setRobots = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    await db
      .collection("robots")
      .get()
      .then((querySnapshot) => {
        let items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch({
          type: ProductActionTypes.SET_ROBOTS,
          payload: [...items],
        });
      });
  };
};

export const setQudrocopters = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    await db
      .collection("qudrocopters")
      .get()
      .then((querySnapshot) => {
        let items: any = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch({
          type: ProductActionTypes.SET_QADROCOPTERS,
          payload: [...items],
        });
      });
  };
};
