import "../App.scss";

import { getProducts } from "../store/action-creators/product";
import { setFilter } from "../store/action-creators/filter";

import { setActiveSidebarLink } from "../store/action-creators/theme";

import { connect } from "react-redux";
import Sidebar from "../components/Sidebar/sidebar";
import SortComponent from "../components/Sidebar/SortComponent";
import { compose } from "redux";
import { StateType } from "../store/store";
import { FC } from "react";

type SidebarProps = {
  isActiveSidebarLink: number | false;
  setActiveSidebarLink: (isActiveSidebarLink: number | false) => void;
  setVisiblePopup: (visiblePopup: boolean) => void;
  toogleMenu: (isOpenMenu: boolean) => void;
  getProducts: (link: string) => void;
  setFilter: () => void;
};

const Sidebar_Container: FC<SidebarProps> = ({
  isActiveSidebarLink,
  getProducts,

  setActiveSidebarLink,
  setFilter,
}) => {
  const SetPage = (n: number, link: string) => {
    getProducts(link);
    setActiveSidebarLink(n);
  };
  const sidebarMenuArray = [
    { name: "Мотоцикли", link: "motorcycles", number: 0 },
    { name: "Телефони", link: "phones", number: 1 },
    { name: "Роботи-пилососи", link: "robots", number: 2 },
    { name: "Квадрокоптери", link: "qudrocopters", number: 3 },
  ];

  return (
    <div className="col s12 m0 l2 hide-on-med-and-down">
      <Sidebar
        sidebarMenuArray={sidebarMenuArray}
        SetPage={SetPage}
        isActiveSidebarLink={isActiveSidebarLink}
      />
      <SortComponent setFilter={setFilter} />
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,

    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    isActiveSidebarLink: state.theme.isActiveSidebarLink,
    // @ts-ignore
    product: state.product.product,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    getProducts,
    setActiveSidebarLink,
    setFilter,
  })
)(Sidebar_Container);
