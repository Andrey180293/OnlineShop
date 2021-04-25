import { useEffect } from "react";

const SnackBar = ({ message, setOpenSnackBar }) => {
  useEffect(() => {
    setTimeout(() => setOpenSnackBar(false), 4000);
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1111,
        margin: "10vh 15%",
        minWidth: "25px",
        maxWidth: "80%",
        lineHeight: "35px",
        fontSize: "20px",
        backgroundColor: "#66bb6a   ",
        overflow: "hidden",
        borderRadius: "5px",
      }}
    >
      <p style={{ margin: "0 5px" }}> {message}</p>
    </div>
  );
};

export default SnackBar;
