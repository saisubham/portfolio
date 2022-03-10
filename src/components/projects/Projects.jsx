import React, { useContext } from "react";
import Project from "./project/Project";

import ChatAppImg from "../../img/chatapp.jpg";
import BlockchainImg from "../../img/blockchain.jpg";
import TuringMachineImg from "../../img/TuringMachine.jpg";
import SpringAuthImg from "../../img/springauth.jpg";

import "./Projects.css";
import { ThemeContext } from "../../context";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectList = [
    {
      key: 1,
      name: "Chat app",
      image: ChatAppImg,
      link: "https://github.com/saisubham/chat-app-client",
    },
    {
      key: 2,
      name: "Blockchain app",
      image: BlockchainImg,
      link: "https://github.com/saisubham/tiny-blockchain",
    },
    {
      key: 3,
      name: "Auth app in Spring",
      image: SpringAuthImg,
      link: "https://github.com/saisubham/spring-auth",
    },
    {
      key: 4,
      name: "Turing machine simulator",
      image: TuringMachineImg,
      link: "https://github.com/saisubham/turing-machine-simulator",
    },
  ];

  return (
    <div className="p" style={{ backgroundColor: darkMode && "#1A1A40" }}>
      <div className="p-header">
        <h1>Projects</h1>
        <h2>Some of my projects</h2>
      </div>
      <ul className="p-items">
        {projectList.map((project) => (
          <Project
            key={project.key}
            name={project.name}
            image={project.image}
            link={project.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
