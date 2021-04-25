const Preloader = () => {
  return (
    <div
      style={{
        padding: "30vh 30%",
        minHeight: "85vh",
      }}
    >
      <div className="progress" style={{ height: "5px", width: "100%" }}>
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default Preloader;
