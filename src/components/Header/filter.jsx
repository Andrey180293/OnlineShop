import { connect } from "react-redux";
import { setFilter } from "../../store/action-creators/filter";
import "../Header/header.scss";

const Filter = ({ setFilter, visibleHeadNavContent }) => {
  return (
    <div class={`nav-content ${!visibleHeadNavContent && "hide"} `}>
      <ul className="tabs header-nav ">
        <li className="header-nav-tab" onClick={() => setFilter("all")}>
          All
        </li>
        <li className="header-nav-tab" onClick={() => setFilter("price_hight")}>
          hight
        </li>
        <li className="header-nav-tab" onClick={() => setFilter("price_low")}>
          {" "}
          low
        </li>
        <li className="header-nav-tab" onClick={() => setFilter("name")}>
          name
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { setFilter })(Filter);
