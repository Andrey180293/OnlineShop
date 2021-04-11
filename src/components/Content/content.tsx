import CardItem from "./CardItem";
import { FC } from "react";
import Preloader from "../../commons/Preloader";

type PropsType = {
  products: [];
  cartItem: [];
  isLoading: boolean;

  addToCart: (item: object) => void;
  setProductPage: (item: object) => void;
};
const Content: FC<PropsType> = ({
  products,
  setProductPage,
  addToCart,
  cartItem,
  isLoading,
}) => {
  if (isLoading === false) return <Preloader />;
  return (
    <>
      {" "}
      <div
        className="col s12 m12  l10  "
        style={{
          minHeight: "100vh",
          padding: "30px 20px",
          marginTop: "40px",
        }}
      >
        <div className="row">
          {products &&
            products.map((item: any, key) => {
              return (
                <CardItem
                  key={key}
                  cartItem={
                    cartItem.filter(
                      (el: { id: number }) => el.id === item.id
                    )[0]
                  }
                  addToCart={addToCart}
                  item={item}
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
