import { FC } from "react";
import "./PopUp.scss";
type PropsType = {
  visiblePopup: boolean;
};
const PopUp: FC<PropsType> = ({ visiblePopup }) => {
  return (
    <div className={`popup ${visiblePopup ? " show" : " hide"}`}>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label htmlFor="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PopUp;
