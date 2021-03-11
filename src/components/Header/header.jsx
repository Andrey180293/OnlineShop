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
}) => {
  const SetPage = (n) => {
    setProductType(n);
    setHeaderNavContent(true);
  };
  return (
    <nav class={`nav-extended ${theme.headFootBg}`}>
      <div class="nav-wrapper">
        <NavLink
          to="/piper"
          className="brand-logo  "
          style={{ marginLeft: "10px" }}
          onClick={() => SetPage(0)}
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
            <NavLink to={`/${"cart"}`}>
              Корзина <span className="new badge">4</span>
            </NavLink>
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
/*
   <NavLink to="/" className="brand-logo   hide-on-med-and-down">
            My Shop yhho
          </NavLink>

           <NavLink to="/cart">
                Корзина <span className="new badge">4</span>
              </NavLink>{" "}
               <div className="left" onClick={() => toogleMenu(!isOpenMenu)}>



                <ul className="right ">
            <li className="switch ">
              <label>
                <li>
                  <i className="medium material-icons  ">
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

            <li className="hide-on-small-only">
              <NavLink to="/cart">
                Корзина <span className="new badge">4</span>
              </NavLink>{" "}
            </li>
            <li className=" hide-on-small-only ">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setVisiblePopup(!visiblePopup)}
              >
                Реэстрацiя
              </div>
            </li>
          </ul>

*/
