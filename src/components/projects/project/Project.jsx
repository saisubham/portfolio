import React from "react";
import "./Project.css";

const Project = ({ name, image, link }) => {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="p-img" src={image} alt={name} />
      </a>
      <div className="p-text">{name}</div>
    </div>
  );
};

export default Project;
