import React, { FC } from "react";
import { NavLink } from "react-router-dom";

type PropsType = {
  isActiveSidebarLink: number | false;
  SetPage: (n: number, link: string) => void;
  sidebarMenuArray: any[];
};

const Sidebar: FC<PropsType> = ({
  isActiveSidebarLink,
  SetPage,
  sidebarMenuArray,
}) => {
  return (
    <div
      className="collection "
      style={{
        position: "fixed",
        zIndex: 111,
        marginTop: "70px",
        width: "15%",
      }}
    >
      {sidebarMenuArray &&
        sidebarMenuArray.map((item) => {
          return (
            <NavLink
              key={item.name + item.number}
              to={`/products/${item.link}`}
              className={`collection-item  ${
                isActiveSidebarLink === item.number && " active"
              } `}
              onClick={() => SetPage(item.number, item.link)}
            >
              {" "}
              {item.name}
            </NavLink>
          );
        })}
    </div>
  );
};
export default Sidebar;
