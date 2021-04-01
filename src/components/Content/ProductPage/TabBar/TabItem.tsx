import "./TabBar.scss";
import { FC } from "react";
type PropsType = {
  setActivTab: (n: number) => void;
  activeTab: number;
};
const TabItems: FC<PropsType> = ({ activeTab, setActivTab }) => {
  return (
    <ul className="tabItems ">
      <li
        className={`tabItem   ${activeTab === 0 && " activeTab"} `}
        onClick={() => setActivTab(0)}
      >
        <span>Характеристики</span>
      </li>

      <li
        className={`tabItem  ${activeTab === 1 && "activeTab "} `}
        onClick={() => setActivTab(1)}
      >
        <span>Про товар</span>{" "}
      </li>
    </ul>
  );
};
export default TabItems;
