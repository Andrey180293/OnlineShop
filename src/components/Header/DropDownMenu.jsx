import "./header.scss";
import { NavLink } from "react-router-dom";

const DropDownMenu = ({
  theme,
  isThemToogle,
  isOpenMenu,
  setVisiblePopup,
  visiblePopup,
  toogleMenu,
}) => {
  const closeMenu = () => {
    toogleMenu(!isOpenMenu);
    setVisiblePopup(!visiblePopup);
  };
  return (
    <ul className={`burger  ${!isOpenMenu && "hide"}`}>
      <NavLink to="/" onClick={() => toogleMenu(!isOpenMenu)}>
        <li className="burger-header center-align">My Shop Online</li>
      </NavLink>

      <li className="item" onClick={() => closeMenu()}>
        Логiн
      </li>

      <li className="item">Каталог Товарiв</li>
      <NavLink to="/product" onClick={() => toogleMenu(!isOpenMenu)}>
        <li className="item">
          <span className="new badge">4</span>Корзина
        </li>{" "}
      </NavLink>

      <li className="item">Контакти</li>
    </ul>
  );
};
export default DropDownMenu;
