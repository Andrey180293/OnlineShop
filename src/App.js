import { useState } from "react";
import Footer from "./components/Footer/footer";
import { Route } from "react-router-dom";
import Content_Container from "./containers/Content_Container";
import Product_Page_Container from "./containers/Product_Page_Container";
import Sidebar_Container from "./containers/Sidebar_Container";
import Header_Container from "./containers/Header_Container";
import Cart_Container from "./containers/Cart_Container";
import DropDown_Container from "./containers/DropDown_Container";

const App = ({ theme, isThemToogle, toggleTheme }) => {
  const [isOpenMenu, toogleMenu] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);

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
        />
        <Sidebar_Container />
        <DropDown_Container
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
            render={() => <Content_Container visiblePopup={visiblePopup} />}
          />
          <Route
            path="/sidebar/:prod"
            render={() => <Content_Container visiblePopup={visiblePopup} />}
          />
          <Route path="/cart" render={() => <Cart_Container />} />
          <Route
            path="/bar/:product/:id"
            render={() => <Product_Page_Container />}
          />
        </div>
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default App;
