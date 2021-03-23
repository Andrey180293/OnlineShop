import { useState, FC } from "react";
import "../Header/header.scss";
type PropsType = {
  setFilter: (str: string) => void;
};
const SortComponent: FC<PropsType> = ({ setFilter }) => {
  const [activeLink, setActiveLink] = useState("all");

  const SetPage = (str: string) => {
    setActiveLink(str);
    setFilter(str);
  };

  return (
    <div>
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

export default SortComponent;