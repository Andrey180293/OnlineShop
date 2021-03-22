import { useState } from "react";
import { connect } from "react-redux";
import { setFilter } from "../../store/action-creators/filter";
import "../Header/header.scss";

const SortComponent = ({ setFilter, visibleHeadNavContent }) => {
  const [activeLink, setActiveLink] = useState("all");

  const SetPage = async (str) => {
    setActiveLink(str);
    setFilter(str);
  };

  return (
    <div
    // className="col s12 m0 l2 hide-on-med-and-down"
    // style={{ minHeight: "100vh" }}
    >
      <ul className="collection " style={{ cursor: "pointer" }}>
        <li
          className={`collection-item  ${activeLink === "all" && " active"} `}
          onClick={() => SetPage("all")}
        >
          {" "}
          all
        </li>
        <li
          className={`collection-item ${
            activeLink === "price_hight" && "active"
          }`}
          onClick={() => SetPage("price_hight")}
        >
          price_hight
        </li>
        <li
          className={`collection-item ${
            activeLink === "price_low" && "active"
          } `}
          onClick={() => SetPage("price_low")}
        >
          price_low
        </li>
        <li
          className={`collection-item  ${activeLink === "name" && "active"} `}
          onClick={() => SetPage("name")}
        >
          Name
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { setFilter })(SortComponent);
