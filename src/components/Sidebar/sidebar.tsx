import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

type PropsType = {
  activeSidebarLink: number | false;
  SetPage: (item: number) => void;
  setProd: (item: number) => string;
};

const Sidebar: FC<PropsType> = ({ activeSidebarLink, SetPage, setProd }) => {
  return (
    <div>
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
