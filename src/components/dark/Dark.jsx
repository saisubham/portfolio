import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import "./Dark.css";

const Dark = () => {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div
      className="d"
      style={{
        backgroundColor: darkMode ? "#1A1A40" : "white",
        borderColor: darkMode ? "#2750b5" : "black",
      }}
    >
      <i className="bi bi-sun-fill d-icon"></i>
      <i className="bi bi-moon-fill d-icon"></i>
      <div
        className="d-btn"
        onClick={handleClick}
        style={{
          backgroundColor: darkMode ? "#2750b5" : "black",
          left: !darkMode ? "0" : "25px",
        }}
      ></div>
    </div>
  );
};

export default Dark;
