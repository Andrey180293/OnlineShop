import "./header.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

import {
  setMotorcycles,
  setPhones,
  setRobots,
  setQudrocopters,
} from "../../store/action-creators/product";

const DropDownMenu = ({
  theme,
  isThemToogle,
  isOpenMenu,
  setVisiblePopup,
  visiblePopup,
  toogleMenu,
  cartItem,
  setProductType,
  setMotorcycles,
  setPhones,
  setRobots,
  setQudrocopters,
}) => {
  const [dropDown, togleDropDown] = useState(false);
  const setActionType = (i) => {
    if (i === 0) return setMotorcycles();
    if (i === 1) return setPhones();
    if (i === 2) return setRobots();
    if (i === 3) return setQudrocopters();
  };
  const closeMenu = () => {
    toogleMenu(!isOpenMenu);
    setVisiblePopup(!visiblePopup);
  };
  const closeDropMenu = (n) => {
    toogleMenu(!isOpenMenu);
    setActionType(n);
  };
  return (
    <ul className={`burger  ${!isOpenMenu && "hide"}`}>
      <li className="item" onClick={() => closeMenu()}>
        Логiн
      </li>

      <li className="item drop_down " onClick={() => togleDropDown(!dropDown)}>
        <span> Каталог Товарiв</span>
        <ul className={`dropdown_content ${!dropDown && "hide"}`}>
          <li>
            <NavLink
              to={`/sidebar/motorcycle`}
              onClick={() => closeDropMenu(0)}
            >
              Motorcycles
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
              to={`/sidebar/qudrocopters`}
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
export default connect(null, {
  setMotorcycles,
  setPhones,
  setRobots,
  setQudrocopters,
})(DropDownMenu);
