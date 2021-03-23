import { useState } from "react";
import Footer from "./components/Footer/footer";
import PopUp from "./components/popUp/PopUp";
import { Route } from "react-router-dom";
import Content_Container from "./containers/Content_Container";
import Product_Page_Container from "./containers/Product_Page_Container";
import Sidebar_Container from "./containers/Sidebar_Container";
import Header_Container from "./containers/Header_Container";
import Cart_Container from "./containers/Cart_Container";
import DropDown_Container from "./containers/DropDown_Container";

function App({ theme, isThemToogle, toggleTheme, cartItem, setAllProducts }) {
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
        <DropDown_Container
          cartItem={cartItem}
          toogleMenu={toogleMenu}
          isOpenMenu={isOpenMenu}
          setVisiblePopup={setVisiblePopup}
          visiblePopup={visiblePopup}
        />
        <div
          style={{
            minHeight: "100vh",
          }}
        >
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
