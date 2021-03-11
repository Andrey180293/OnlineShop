import { connect } from "react-redux";
import { setFilter } from "../../store/action-creators/filter";

const Filter = ({ setFilter, visibleHeadNavContent }) => {
  return (
    <div class={`nav-content ${!visibleHeadNavContent && "hide"} `}>
      <ul
        class="tabs tabs-transparent"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#0d47a1",
        }}
      >
        <li className="tab" onClick={() => setFilter("all")}>
          <a> all</a>
        </li>
        <li className="tab" onClick={() => setFilter("price_hight")}>
          <a>hight </a>
        </li>
        <li className="tab" onClick={() => setFilter("price_low")}>
          <a> low</a>
        </li>
        <li className="tab" onClick={() => setFilter("name")}>
          <a>name </a>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { setFilter })(Filter);
