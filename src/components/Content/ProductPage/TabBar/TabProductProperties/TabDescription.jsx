import "../TabBar.scss";
import MotorcyclesProperties from "./MotorcyclesProperties";
import QudrocoptersProperties from "./QudrocoptersProperties";
import RobotsProperties from "./RobotsProperties";
import PhonesProperties from "./PhonesProperties";

const TabDescription = ({ activeTab, page, pageIndex }) => {
  console.log(pageIndex);
  return (
    <>
      <div className={`tabDescription ${activeTab === 1 ? "show" : "hide"} `}>
        {" "}
        <p>{page.about}</p>
      </div>

      <div className={`tabDescription ${activeTab === 0 ? "show" : "hide"} `}>
        {" "}
        {pageIndex === 1 && <MotorcyclesProperties page={page} />}
        {pageIndex === 2 && <PhonesProperties page={page} />}
        {pageIndex === 3 && <RobotsProperties page={page} />}
        {pageIndex === 4 && <QudrocoptersProperties page={page} />}
      </div>
    </>
  );
};
export default TabDescription;
