import "../ProductPage.scss";

const TabDescription = ({ activeTab, page }) => {
  return (
    <>
      <div className={`tabDescription ${activeTab === 0 ? "show" : "hide"} `}>
        {" "}
        <p>{page.about}</p>
      </div>

      <div className={`tabDescription ${activeTab === 1 ? "show" : "hide"} `}>
        {" "}
        <p>{page.properties}</p>
      </div>
    </>
  );
};
export default TabDescription;
