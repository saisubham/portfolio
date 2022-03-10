import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import "./Social.css";

const Social = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="s">
      <ul className="s-wrapper">
        <li className="s-item">
          <a
            href="https://in.linkedin.com/in/subham-sai-behera"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-linkedin s-icon"
              style={{ color: darkMode && "#FA58B6" }}
            ></i>
          </a>
        </li>
        <li className="s-item">
          <a
            href="https://github.com/saisubham"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-github s-icon"
              style={{ color: darkMode && "#FA58B6" }}
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
