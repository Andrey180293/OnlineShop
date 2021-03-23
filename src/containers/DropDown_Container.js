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

const DropDown_Container = ({
  isOpenMenu,
  setVisiblePopup,
  visiblePopup,
  toogleMenu,
  cartItem,
  setMotorcycles,
  setPhones,
  setRobots,
  setQudrocopters,
}) => {
  const [isdropDown, togleDropDown] = useState(false);
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
    if (n === null) {
      setVisiblePopup(!visiblePopup);
    }
    setActionType(n);
  };

  return (
    <DropDownMenu
      cartItem={cartItem}
      isdropDown={isdropDown}
      togleDropDown={togleDropDown}
      setActionType={setActionType}
      closeMenu={closeMenu}
      closeDropMenu={closeDropMenu}
      toogleMenu={toogleMenu}
      isOpenMenu={isOpenMenu}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart.items,
  };
};
export default compose(
  connect(mapStateToProps, {
    setMotorcycles,
    setPhones,
    setRobots,
    setQudrocopters,
  })
)(DropDown_Container);
