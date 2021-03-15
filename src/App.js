import DropDownMenu from "./components/Header/DropDownMenu";
import { useState } from "react";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Cart from "./components/Cart/cart";
import ProductPage from "./components/Content/ProductPage/ProductPage";
import PopUp from "./components/popUp/PopUp";
import { Route, withRouter } from "react-router-dom";
import Content_Container from "./containers/Content_Container";
import Product_Page_Container from "./containers/Product_Page_Container";
import Sidebar_Container from "./containers/Sidebar_Container";
import Header_Container from "./containers/Header_Container";
import Cart_Container from "./containers/Cart_Container";

function App({
  theme,
  isThemToogle,
  toggleTheme,
  cartItem,
  setProductType,
  products,
}) {
  const [isOpenMenu, toogleMenu] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [visibleHeadNavContent, setHeaderNavContent] = useState(true);

  return (
    <>
      <div className={`row ${theme.contentBg}`} style={{ margin: "0" }}>
        <Header_Container
          theme={theme}
          isThemToogle={isThemToogle}
          toggleTheme={toggleTheme}
          toogleMenu={toogleMenu}
          isOpenMenu={isOpenMenu}
          setVisiblePopup={setVisiblePopup}
          visiblePopup={visiblePopup}
          setHeaderNavContent={setHeaderNavContent}
          visibleHeadNavContent={visibleHeadNavContent}
        />
        <Sidebar_Container setHeaderNavContent={setHeaderNavContent} />
        <DropDownMenu
          toogleMenu={toogleMenu}
          isOpenMenu={isOpenMenu}
          setVisiblePopup={setVisiblePopup}
          visiblePopup={visiblePopup}
          cartItem={cartItem}
          setProductType={setProductType}
        />
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Content_Container
                setHeaderNavContent={setHeaderNavContent}
                visiblePopup={visiblePopup}
              />
            )}
          />
          <Route
            path="/sidebar/:prod"
            render={() => (
              <Content_Container
                setHeaderNavContent={setHeaderNavContent}
                visiblePopup={visiblePopup}
              />
            )}
          />
          <Route path="/cart" render={() => <Cart_Container />} />
          <Route
            path="/bar/:product/:id"
            render={() => (
              <Product_Page_Container
                setHeaderNavContent={setHeaderNavContent}
              />
            )}
          />
          <PopUp visiblePopup={visiblePopup} />
        </div>
      </div>
      <Footer theme={theme} />
    </>
  );
}

export default App;
