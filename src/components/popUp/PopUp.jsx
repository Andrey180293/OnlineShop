import React, { useState } from "react";
import "./PopUp.scss";

const PopUp = ({ visiblePopup }) => {
  return (
    <div className={`popup ${visiblePopup ? " show" : " hide"}`}>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" class="validate" />
              <label for="icon_prefix">First Name</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" class="validate" />
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PopUp;
