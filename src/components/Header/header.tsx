import { FC } from "react";
import "../Header/header.scss";
import { NavLink } from "react-router-dom";
type PropsType = {
  theme: {
    headFootBg: string;
  };
  isThemToogle: boolean;
  visiblePopup: boolean;
  cartItem: [];
  isOpenMenu: boolean;
  toggleTheme: (isThemToogle: boolean) => void;
  toogleMenu: (isOpenMenu: boolean) => void;
  setVisiblePopup: (visiblePopup: boolean) => void;
  SetPage: () => void;
};
const Header: FC<PropsType> = ({
  theme,
  isThemToogle,
  visiblePopup,
  cartItem,
  isOpenMenu,
  toggleTheme,
  toogleMenu,
  setVisiblePopup,
  SetPage,
}) => {
  return (
    <nav className={`nav-extended ${theme.headFootBg}`}>
      <div className="nav-wrapper">
        <NavLink
          to="/"
          className="brand-logo  "
          style={{ marginLeft: "10px" }}
          onClick={() => SetPage()}
        >
          Logo
        </NavLink>

        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons" onClick={() => toogleMenu(!isOpenMenu)}>
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
              <span className="lever"></span>
            </label>
          </li>
          <li className=" hide-on-med-and-down">
            {!cartItem.length ? (
              <a>
                <i
                  className="large material-icons "
                  //   style={{ marginRight: "68px" }}
                >
                  shopping_cart
                </i>
              </a>
            ) : (
              <NavLink to={`/${"cart"}`} style={{ display: "flex" }}>
                <i className="large material-icons">shopping_cart</i>
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
    </nav>
  );
};
export default Header;
