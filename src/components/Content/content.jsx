//import style from "./content.module.scss";

import { useState } from "react";
import CardItem from "./CardItem";
import PopUp from "../popUp/PopUp";

const Content = ({
  allProducts,
  products,
  setProductPage,
  productIndex,
  addToCart,
}) => {
  console.log(allProducts.flat());
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
            products.flat().map((item) => {
              return (
                <CardItem
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
