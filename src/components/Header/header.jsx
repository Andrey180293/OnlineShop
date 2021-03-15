import { useState } from "react";
import "../Header/header.scss";
import { NavLink } from "react-router-dom";
import Filter from "./filter";

const Header = ({
  theme,
  isThemToogle,
  toggleTheme,
  isOpenMenu,
  toogleMenu,
  setVisiblePopup,
  visiblePopup,
  setHeaderNavContent,
  visibleHeadNavContent,
  setProductType,
  cartItem,
}) => {
  const SetPage = (n) => {
    setProductType(n);
    setHeaderNavContent(true);
  };
  return (
    <nav class={`nav-extended ${theme.headFootBg}`}>
      <div class="nav-wrapper">
        <NavLink
          to="/"
          className="brand-logo  "
          style={{ marginLeft: "10px" }}
          onClick={() => SetPage(false)}
        >
          Logo
        </NavLink>

        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons" onClick={() => toogleMenu(!isOpenMenu)}>
            menu
          </i>
        </a>
        <ul id="nav-mobile" className="right ">
          <li className="switch  ">
            <label>
              <li>
                <i className="medium material-icons   ">
                  {isThemToogle ? "brightness_5" : "brightness_3"}
                </i>
              </li>
              <input
                type="checkbox"
                checked={isThemToogle}
                onChange={() => toggleTheme(!isThemToogle)}
              />
              <span class="lever"></span>
            </label>
          </li>
          <li className=" hide-on-med-and-down">
            {!cartItem.length ? (
              <a>
                <i
                  class="large material-icons "
                  //   style={{ marginRight: "68px" }}
                >
                  shopping_cart
                </i>
              </a>
            ) : (
              <NavLink to={`/${"cart"}`} style={{ display: "flex" }}>
                <i class="large material-icons">shopping_cart</i>
                <span className="new badge red ">{cartItem.length}</span>
              </NavLink>
            )}
          </li>
          <li className=" hide-on-med-and-down">
            <div
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={() => setVisiblePopup(!visiblePopup)}
            >
              Реэстрацiя
            </div>
          </li>
        </ul>
      </div>
      <Filter visibleHeadNavContent={visibleHeadNavContent} />
    </nav>
  );
};
export default Header;
//local_grocery_store
//shopping_cart
