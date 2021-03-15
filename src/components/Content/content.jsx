//import style from "./content.module.scss";

import { useState } from "react";
import CardItem from "./CardItem";
import PopUp from "../popUp/PopUp";

const Content = ({
  products,
  setProductPage,
  productIndex,
  addToCart,
  cartItem,
}) => {
  return (
    <>
      {" "}
      <div
        className="col s12 m12  l10  "
        style={{
          minHeight: "100vh",
          padding: "30px 20px",
        }}
      >
        <div className="row">
          {products &&
            products.map((item) => {
              return (
                <CardItem
                  cartItem={
                    cartItem.filter(
                      (el, i, arr) =>
                        el.id === item.id && el.category === item.category
                    )[0]
                  }
                  addToCart={addToCart}
                  item={item}
                  productIndex={productIndex}
                  setProductPage={setProductPage}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Content;
