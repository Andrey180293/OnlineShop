import "../App.scss";
import {
  toggleTheme,
  setActiveSidebarLink,
} from "../store/action-creators/theme";
import { getProducts } from "../store/action-creators/product";

import { connect } from "react-redux";
import Header from "../components/Header/header";
import { StateType } from "../store/store";
import { compose } from "redux";
interface HeaderProps {
  theme: {
    headFootBg: string;
  };
  isThemToogle: boolean;
  cartItem: [];
  isOpenMenu: boolean;
  visiblePopup: boolean;
  toggleTheme: (isThemToogle: boolean) => void;
  toogleMenu: (isOpenMenu: boolean) => void;
  setVisiblePopup: (visiblePopup: boolean) => void;
  setHeaderNavContent: (visibleHeadNavContent: boolean) => void;
  getProducts: (link: string) => void;
  setActiveSidebarLink: (isActive: boolean) => void;
}

const Header_Container = ({
  theme,
  isThemToogle,
  cartItem,
  isOpenMenu,
  visiblePopup,
  setActiveSidebarLink,
  toggleTheme,
  toogleMenu,
  setVisiblePopup,
  getProducts,
}: HeaderProps) => {
  const SetPage = () => {
    getProducts("");
    setActiveSidebarLink(false);
  };

  return (
    <Header
      SetPage={SetPage}
      theme={theme}
      isThemToogle={isThemToogle}
      toggleTheme={toggleTheme}
      toogleMenu={toogleMenu}
      isOpenMenu={isOpenMenu}
      setVisiblePopup={setVisiblePopup}
      visiblePopup={visiblePopup}
      cartItem={cartItem}
    />
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,
    cartItem: state.cart.items,
    byFilter: state.filter.byFilter,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    toggleTheme,
    getProducts,
    setActiveSidebarLink,
  })
)(Header_Container);
