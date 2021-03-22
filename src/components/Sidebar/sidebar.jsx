import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ activeSidebarLink, SetPage, setProd }) => {
  return (
    <div
    // className="col s12 m0 l2 hide-on-med-and-down"
    // style={{ minHeight: "100vh" }}
    >
      <div className="collection ">
        <NavLink
          to={`/sidebar/${setProd(0)}`}
          className={`collection-item  ${
            activeSidebarLink === 0 && " active"
          } `}
          onClick={(e) => SetPage(0)}
        >
          {" "}
          Мотоцикли
        </NavLink>
        <NavLink
          to={`/sidebar/${setProd(1)}`}
          className={`collection-item ${activeSidebarLink === 1 && "active"} `}
          onClick={(e) => SetPage(1)}
        >
          Телефони
        </NavLink>
        <NavLink
          to={`/sidebar/${setProd(2)}`}
          className={`collection-item ${activeSidebarLink === 2 && "active"} `}
          onClick={(e) => SetPage(2)}
        >
          Роботи-пилососи
        </NavLink>
        <NavLink
          to={`/sidebar/${setProd(3)}`}
          className={`collection-item  ${activeSidebarLink === 3 && "active"} `}
          onClick={() => SetPage(3)}
        >
          Квадрокоптери
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
