import "./header.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropDownMenu = ({
  theme,
  isThemToogle,
  isOpenMenu,
  setVisiblePopup,
  visiblePopup,
  toogleMenu,
  cartItem,
  setProductType,
}) => {
  const [dropDown, togleDropDown] = useState(false);

  const closeMenu = () => {
    toogleMenu(!isOpenMenu);
    setVisiblePopup(!visiblePopup);
  };
  const closeDropMenu = (n) => {
    toogleMenu(!isOpenMenu);
    setProductType(n);
  };
  return (
    <ul className={`burger  ${!isOpenMenu && "hide"}`}>
      <NavLink to="/" onClick={() => toogleMenu(!isOpenMenu)}>
        <li className="burger-header center-align">My Shop Online</li>
      </NavLink>

      <li className="item" onClick={() => closeMenu()}>
        Логiн
      </li>

      <li className="item drop_down " onClick={() => togleDropDown(!dropDown)}>
        <span> Каталог Товарiв</span>
        <ul className={`dropdown_content ${!dropDown && "hide"}`}>
          <li>
            <NavLink to={`/sidebar/piper`} onClick={() => closeDropMenu(0)}>
              Piper
            </NavLink>
          </li>
          <li>
            <NavLink to={`/sidebar/phone`} onClick={() => closeDropMenu(1)}>
              Phone
            </NavLink>
          </li>
          <li>
            <NavLink to={`/sidebar/robot`} onClick={() => closeDropMenu(2)}>
              Robot
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/sidebar/kwadrokopter`}
              onClick={() => closeDropMenu(3)}
            >
              keadro
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="item">
        <NavLink to={`/${"cart"}`} onClick={() => toogleMenu(!isOpenMenu)}>
          <div className={`${!cartItem.length && "btn-flat disabled"} `}>
            Корзина{" "}
            {cartItem.length > 0 && (
              <span className="new badge red ">{cartItem.length}</span>
            )}
          </div>
        </NavLink>
      </li>

      <li className="item">Контакти</li>
    </ul>
  );
};
export default DropDownMenu;
