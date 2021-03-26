import "../App.scss";
import {
  setMotorcycles,
  setPhones,
  setRobots,
  setQudrocopters,
} from "../store/action-creators/product";
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
  setMotorcycles: () => void;
  setPhones: () => void;
  setRobots: () => void;
  setQudrocopters: () => void;
}

const DropDown_Container = ({
  cartItem,
  visiblePopup,
  isOpenMenu,
  setVisiblePopup,
  toogleMenu,
  setMotorcycles,
  setPhones,
  setRobots,
  setQudrocopters,
}: DropDownProps) => {
  const [isdropDown, togleDropDown] = useState<boolean>(false);
  const setActionType = (i: number | null) => {
    if (i === 0) return setMotorcycles();
    if (i === 1) return setPhones();
    if (i === 2) return setRobots();
    if (i === 3) return setQudrocopters();
  };

  const closeDropMenu = (n: number | null) => {
    toogleMenu(!isOpenMenu);
    if (n === null) {
      setVisiblePopup(!visiblePopup);
    }
    setActionType(n);
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
    setMotorcycles,
    setPhones,
    setRobots,
    setQudrocopters,
  })
)(DropDown_Container);
