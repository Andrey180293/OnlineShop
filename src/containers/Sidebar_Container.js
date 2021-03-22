import "../App.scss";

import {
  setAllProducts,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
} from "../store/action-creators/product";

import { setActiveSidebarLink, setLoad } from "../store/action-creators/theme";

import { connect } from "react-redux";
import Sidebar from "../components/Sidebar/sidebar";
import Preloader from "../commons/Preloader";
import SidebarFilter from "../components/Sidebar/SidebarFilter/sidebarFilter";
import SortComponent from "../components/Header/SortComponent";

function Sidebar_Container({
  setAllProducts,
  setHeaderNavContent,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
  setActiveSidebarLink,
  activeSidebarLink,
  setLoad,
  isLoad,
  product,
}) {
  const SetPage = async (n) => {
    setLoad(false);
    await setActionType(n);
    await setActiveSidebarLink(n);
    await setHeaderNavContent(true);
    setLoad(true);
  };

  const setActionType = (i) => {
    if (i === 0) return setMotorcycles();
    if (i === 1) return setPhones();
    if (i === 2) return setRobots();
    if (i === 3) return setQudrocopters();
  };

  const setProd = (i) => {
    if (i === 0) return "motorcycle";
    if (i === 1) return "phone";
    if (i === 2) return "robot";
    if (i === 3) return "qudrocopters";
  };
  return (
    <div className="col s12 m0 l2 hide-on-med-and-down">
      <Sidebar
        setAllProducts={setAllProducts}
        setProd={setProd}
        SetPage={SetPage}
        activeSidebarLink={activeSidebarLink}
      />
      <SortComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isLoad: state.theme.isLoad,

    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    activeSidebarLink: state.product.activeSidebarLink,
    product: state.product.product,
  };
};

export default connect(mapStateToProps, {
  setAllProducts,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
  setActiveSidebarLink,
  setLoad,
})(Sidebar_Container);
