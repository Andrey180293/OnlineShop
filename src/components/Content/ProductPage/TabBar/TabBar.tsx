import "./TabBar.scss";

import { useState } from "react";
import TabItems from "./TabItem";
import TabDescription from "./TabProductProperties/TabDescription";
import { FC } from "react";
type PropsType = {
  page: {
    price: number;
    img: [];
    name: string;
  };
  pageIndex: number;
};
const TabBar: FC<PropsType> = ({ page, pageIndex }) => {
  const [activeTab, setActivTab] = useState<number>(0);
  return (
    <div className="page-container-right-description">
      <TabItems setActivTab={setActivTab} activeTab={activeTab} />
      <TabDescription activeTab={activeTab} page={page} pageIndex={pageIndex} />
    </div>
  );
};
export default TabBar;
