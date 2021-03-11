import {
  ProductState,
  ProductActionTypes,
  ProductAction,
} from "./../../types/Product";
const initialization: ProductState = {
  product: [
    [
      {
        id: 1,
        img: [
          "https://hairgum.com.ua/image/cache/catalog/journal3/product/boroda-i-brite/hgba40hr-1---3426354087301-550x550h.jpg",

          "https://images.ua.prom.st/1946606714_w700_h500_ekstrakt-pertsa-chili.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SRAPU7e_xNJ-Hdz1SdF6wcPiae0xxSPAUuRtLE9nRRFuDcIheGxl3MPEoR-nOvodcTFkuXs&usqp=CAc",
        ],
        name: "ktovar",
        price: 500,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf nnnnnnnn 11111111111",
      },
      {
        id: 2,
        img: [
          "https://hairgum.com.ua/image/cache/catalog/journal3/product/boroda-i-brite/hgba40hr-1---3426354087301-550x550h.jpg",

          "https://images.ua.prom.st/1946606714_w700_h500_ekstrakt-pertsa-chili.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SRAPU7e_xNJ-Hdz1SdF6wcPiae0xxSPAUuRtLE9nRRFuDcIheGxl3MPEoR-nOvodcTFkuXs&usqp=CAc",
        ],
        name: "ctovar",
        price: 600,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf nnnnnnnn 11111111111",
      },
      {
        id: 3,
        img: [
          "https://hairgum.com.ua/image/cache/catalog/journal3/product/boroda-i-brite/hgba40hr-1---3426354087301-550x550h.jpg",
          "https://images.ua.prom.st/1946606714_w700_h500_ekstrakt-pertsa-chili.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SRAPU7e_xNJ-Hdz1SdF6wcPiae0xxSPAUuRtLE9nRRFuDcIheGxl3MPEoR-nOvodcTFkuXs&usqp=CAc",
        ],
        name: "ztovar",
        price: 550,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf nnnnnnnn 11111111111",
      },
      {
        id: 4,
        img: [
          "https://hairgum.com.ua/image/cache/catalog/journal3/product/boroda-i-brite/hgba40hr-1---3426354087301-550x550h.jpg",

          "https://images.ua.prom.st/1946606714_w700_h500_ekstrakt-pertsa-chili.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SRAPU7e_xNJ-Hdz1SdF6wcPiae0xxSPAUuRtLE9nRRFuDcIheGxl3MPEoR-nOvodcTFkuXs&usqp=CAc",
        ],
        name: "ovar",
        price: 570,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
    ],
    [
      {
        id: 1,
        img: [
          "https://i2.rozetka.ua/goods/18804823/226587079_images_18804823909.jpg",

          "https://i8.rozetka.ua/goods/18804826/226587079_images_18804826423.png",
          "https://i8.rozetka.ua/goods/18804832/226587079_images_18804832009.png",
        ],
        name: "telephone r",
        price: 570,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
      {
        id: 2,
        img: [
          "https://i2.rozetka.ua/goods/18804823/226587079_images_18804823909.jpg",

          "https://i8.rozetka.ua/goods/18804826/226587079_images_18804826423.png",
          "https://i8.rozetka.ua/goods/18804832/226587079_images_18804832009.png",
        ],
        name: "telephone r",
        price: 580,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
      {
        id: 3,
        img: [
          "https://i2.rozetka.ua/goods/18804823/226587079_images_18804823909.jpg",

          "https://i8.rozetka.ua/goods/18804826/226587079_images_18804826423.png",
          "https://i8.rozetka.ua/goods/18804832/226587079_images_18804832009.png",
        ],
        name: "telephone r",
        price: 590,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
    ],
    [
      {
        id: 1,
        img: [
          "https://i2.rozetka.ua/goods/20687894/27755313_images_20687894316.jpg",

          "https://i8.rozetka.ua/goods/20687894/27755313_images_20687894871.jpg",
          "https://i8.rozetka.ua/goods/20687896/27755313_images_20687896046.jpg",
          "https://i2.rozetka.ua/goods/20687896/27755313_images_20687896471.jpg",
        ],
        name: "robot a r",
        price: 570,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
      {
        id: 2,
        img: [
          "https://i2.rozetka.ua/goods/20687894/27755313_images_20687894316.jpg",

          "https://i8.rozetka.ua/goods/20687894/27755313_images_20687894871.jpg",
          "https://i8.rozetka.ua/goods/20687896/27755313_images_20687896046.jpg",
          "https://i2.rozetka.ua/goods/20687896/27755313_images_20687896471.jpg",
        ],
        name: "robot df r",
        price: 580,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
      {
        id: 3,
        img: [
          "https://i2.rozetka.ua/goods/20687894/27755313_images_20687894316.jpg",

          "https://i8.rozetka.ua/goods/20687894/27755313_images_20687894871.jpg",
          "https://i8.rozetka.ua/goods/20687896/27755313_images_20687896046.jpg",
          "https://i2.rozetka.ua/goods/20687896/27755313_images_20687896471.jpg",
        ],
        name: "robot r",
        price: 590,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
    ],
    [
      {
        id: 1,
        img: [
          "https://i8.rozetka.ua/goods/18397545/utg_t_4820176242013_images_18397545973.jpg",

          "https://i2.rozetka.ua/goods/18397524/utg_t_4820176242013_images_18397524517.jpg",
          "https://i2.rozetka.ua/goods/18397545/utg_t_4820176242013_images_18397545703.jpg",
          "https://i8.rozetka.ua/goods/18397524/utg_t_4820176242013_images_18397524901.jpg",
        ],
        name: "robot a r",
        price: 1570,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
      {
        id: 2,
        img: [
          "https://i8.rozetka.ua/goods/18397545/utg_t_4820176242013_images_18397545973.jpg",

          "https://i2.rozetka.ua/goods/18397524/utg_t_4820176242013_images_18397524517.jpg",
          "https://i2.rozetka.ua/goods/18397545/utg_t_4820176242013_images_18397545703.jpg",
          "https://i8.rozetka.ua/goods/18397524/utg_t_4820176242013_images_18397524901.jpg",
        ],
        name: "robot a r",
        price: 5270,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
      {
        id: 3,
        img: [
          "https://flytechnology.ua/image/cache/catalog/oc_1443product-Kvadrokopter-RYZE-Tello_7b52fa3117b5d5e8d2c23ad2f7b73dd6-1000x1000.jpg",
          "https://flytechnology.ua/image/cache/catalog/oc_1443product-Kvadrokopter-Ryze-Tello_4c88a34ba04e9506424da8c864205518-1000x1000.jpg",
          "https://flytechnology.ua/image/cache/catalog/oc_1443product-Kvadrokopter-Ryze-Tello_72c81a0d341687bd7f327f1cc2ed31f7-1000x1000.jpg",
        ],
        name: "kopter",
        price: 3570,
        about: "qweqwr wertwt dfkgdfh fdgndjgn fdkghdjrgh dfjgfjg",
        properties: "dfsdf n111111nn 11111111111",
      },
    ],
  ],
  page: null,
  productIndex: 0,
};

function productReducer(state = initialization, action: ProductAction) {
  switch (action.type) {
    case ProductActionTypes.SET_PRODUCT_TYPE:
      return { ...state, productIndex: action.payload };
    case ProductActionTypes.SET_PRODUCT_PAGE:
      return {
        ...state,
        page: state.product[state.productIndex].filter(
          (el: any) => el.id === action.payload && el
        ),
      };

    default:
      return state;
  }
}

export default productReducer;

//export const setLoad = (payload) => ({ type: "SET_LOAD", payload });
