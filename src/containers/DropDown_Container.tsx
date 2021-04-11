import "../App.scss";
import { getProducts } from "../store/action-creators/product";
import { connect } from "react-redux";
import { compose } from "redux";
import DropDownMenu from "../components/Header/DropDownMenu";
import { useState } from "react";
import { StateType } from "../store/store";

interface DropDownProps {
  isOpenMenu: boolean;
  visiblePopup: boolean;
  cartItem: [];

  setVisiblePopup: (visiblePopup: boolean) => void;
  toogleMenu: (isOpenMenu: boolean) => void;
  getProducts: (link: string) => void;
}

const DropDown_Container = ({
  cartItem,
  visiblePopup,
  isOpenMenu,
  setVisiblePopup,
  toogleMenu,
  getProducts,
}: DropDownProps) => {
  const [isdropDown, togleDropDown] = useState<boolean>(false);

  const closeDropMenu = (n: number | null, link: string) => {
    toogleMenu(!isOpenMenu);
    if (n === null) {
      setVisiblePopup(!visiblePopup);
    }
    getProducts(link);
  };

  return (
    <DropDownMenu
      cartItem={cartItem}
      isdropDown={isdropDown}
      isOpenMenu={isOpenMenu}
      togleDropDown={togleDropDown}
      closeDropMenu={closeDropMenu}
      toogleMenu={toogleMenu}
    />
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    cartItem: state.cart.items,
  };
};
export default compose<StateType>(
  connect(mapStateToProps, {
    getProducts,
  })
)(DropDown_Container);
