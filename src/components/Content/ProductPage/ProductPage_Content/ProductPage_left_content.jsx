import { useState } from "react";
import "../ProductPage.scss";

const ProductPage_left_content = ({ page }) => {
  //fiber_manual_record
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="page-container-left  col s12 m12 l5">
      {page.img.map((el, i) => {
        return (
          <div
            className={`page-container-img ${i !== activeImg && "hide"} `}
            style={{
              background: `url(${
                activeImg === i && el
              }) 0 0/100% 100% no-repeat`,
            }}
          >
            <i
              className="medium material-icons"
              onClick={() =>
                setActiveImg(activeImg == 0 ? (i = page.img.length - 1) : i - 1)
              }
            >
              chevron_left
            </i>

            <i
              className="medium material-icons"
              onClick={() =>
                setActiveImg(activeImg == page.img.length - 1 ? (i = 0) : i + 1)
              }
            >
              chevron_right
            </i>
          </div>
        );
      })}
      <div
        style={{
          margin: "5px 0",
          display: "flex",
        }}
      >
        {page.img.map((el, i) => {
          return (
            <div
              style={{
                margin: "0 5px",
                width: "50px",
                height: "40px",
                background: `url(${el}) 0 0/100% 100% no-repeat`,
                cursor: "pointer",
              }}
              onClick={() => setActiveImg(i)}
            ></div>
          );
        })}
      </div>

      <h4>{page.name}</h4>
    </div>
  );
};
export default ProductPage_left_content;
