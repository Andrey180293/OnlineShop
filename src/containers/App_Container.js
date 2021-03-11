import { useEffect, useState, useRef } from "react";
import App from "../App";
import "../App.scss";

import { toggleTheme } from "../store/action-creators/theme";

import { connect } from "react-redux";
import firebase from "firebase/app";
import { database } from "firebase";

function AppContainer({ theme, toggleTheme, isThemToogle }) {
  return (
    <>
      <App
        theme={theme}
        isThemToogle={isThemToogle}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme,
    isThemToogle: state.theme.isThemToogle,

    //isLoading: state.books.isLoading,
  };
};

export default connect(mapStateToProps, {
  toggleTheme,
})(AppContainer);
