import "./header.scss";
import { NavLink } from "react-router-dom";
import { FC } from "react";

type PropsType = {
  cartItem: [];
  isdropDown: boolean;
  isOpenMenu: boolean;
  toogleMenu: (item: boolean) => void;
  closeDropMenu: (n: number | null, link: string) => void;
  togleDropDown: (item: boolean) => void;
};

const DropDownMenu: FC<PropsType> = ({
  cartItem,
  isdropDown,
  isOpenMenu,
  toogleMenu,
  closeDropMenu,
  togleDropDown,
}) => {
  return (
    <ul className={`burger   ${!isOpenMenu && "hide"}`}>
      <li
        className="item drop_down "
        onClick={() => togleDropDown(!isdropDown)}
      >
        <span> Каталог Товарiв</span>
        <ul className={`dropdown_content ${!isdropDown && "hide"}`}>
          <li>
            <NavLink
              to={`/products/motorcycles`}
              onClick={() => closeDropMenu(0, "motorcycles")}
            >
              Motorcycles
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/products/phones`}
              onClick={() => closeDropMenu(1, "phones")}
            >
              Phone
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/products/robots`}
              onClick={() => closeDropMenu(2, "robots")}
            >
              Robot
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/products/qudrocopters`}
              onClick={() => closeDropMenu(3, "qudrocopters")}
            >
              Qudrocopters
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
