import "./TabBar.scss";

import { useState } from "react";
import TabItems from "./TabItem";
import TabDescription from "./TabDescription";

const TabBar = ({ page }) => {
  const [activeTab, setActivTab] = useState(0);
  return (
    <div className="page-container-right-description">
      <TabItems setActivTab={setActivTab} activeTab={activeTab} />
      <TabDescription activeTab={activeTab} page={page} />
    </div>
  );
};
export default TabBar;
