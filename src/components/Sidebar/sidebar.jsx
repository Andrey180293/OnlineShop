import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ setProductType, setHeaderNavContent }) => {
  const [activeLink, SetActiveLink] = useState(0);
  const SetPage = (n) => {
    setProductType(n);
    SetActiveLink(n);
    setHeaderNavContent(true);
  };
  const setProd = (i) => {
    if (i === 0) return "piper";
    if (i === 1) return "phone";
    if (i === 2) return "robot";
    if (i === 3) return "kwadrokopter";
  };
  return (
    <div
      className="col s12 m0 l2 hide-on-med-and-down"
      // style={{ minHeight: "100vh" }}
    >
      <div className="collection ">
        <NavLink
          to={`/sidebar/${setProd(0)}`}
          className={`collection-item  ${activeLink === 0 && " active"} `}
          onClick={(e) => SetPage(0)}
        >
          {" "}
          Перець
        </NavLink>
        <NavLink
          to={`/sidebar/${setProd(1)}`}
          className={`collection-item ${activeLink === 1 && "active"} `}
          onClick={(e) => SetPage(1)}
        >
          Телефони
        </NavLink>
        <NavLink
          to={`/sidebar/${setProd(2)}`}
          className={`collection-item ${activeLink === 2 && "active"} `}
          onClick={(e) => SetPage(2)}
        >
          Роботи
        </NavLink>
        <NavLink
          to={`/sidebar/${setProd(3)}`}
          className={`collection-item  ${activeLink === 3 && "active"} `}
          onClick={(e) => SetPage(3)}
        >
          Квадрокоптери
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
