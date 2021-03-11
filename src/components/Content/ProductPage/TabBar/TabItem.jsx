import "./TabBar.scss";

const TabItems = ({ activeTab, setActivTab }) => {
  return (
    <ul className="tabItems ">
      <li
        className={`tabItem  ${activeTab === 0 && "activeTab "} `}
        onClick={() => setActivTab(0)}
      >
        <span>Про товар</span>{" "}
      </li>

      <li
        className={`tabItem   ${activeTab === 1 && " activeTab"} `}
        onClick={() => setActivTab(1)}
      >
        <span>Характеристики</span>
      </li>
    </ul>
  );
};
export default TabItems;
