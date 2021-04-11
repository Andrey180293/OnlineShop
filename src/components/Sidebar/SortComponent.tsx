import { useState, FC } from "react";
import "../Header/header.scss";
type PropsType = {
  setFilter: (str: string) => void;
};
const SortComponent: FC<PropsType> = ({ setFilter }) => {
  const [activeLink, setActiveLink] = useState<string>("all");

  const Sort = (str: string) => {
    setActiveLink(str);
    setFilter(str);
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 111,
        marginTop: "270px",
        width: "15%",
      }}
    >
      <ul className="collection " style={{ cursor: "pointer" }}>
        <li
          className={`collection-item  ${activeLink === "all" && " active"} `}
          onClick={() => Sort("all")}
        >
          {" "}
          Всі
        </li>
        <li
          className={`collection-item ${
            activeLink === "price_hight" && "active"
          }`}
          onClick={() => Sort("price_hight")}
        >
          Ціна<i className="small material-icons">arrow_drop_up</i>
        </li>
        <li
          className={`collection-item ${
            activeLink === "price_low" && "active"
          } `}
          onClick={() => Sort("price_low")}
        >
          {" "}
          Ціна
          <i className="small material-icons">arrow_drop_down</i>
        </li>
        <li
          className={`collection-item  ${activeLink === "name" && "active"} `}
          onClick={() => Sort("name")}
        >
          По назві
        </li>
      </ul>
    </div>
  );
};

export default SortComponent;
