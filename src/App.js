import { useContext } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Dark from "./components/dark/Dark";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Social from "./components/social/Social";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#1A1A40" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Intro />
      <Projects />
      <Contact />
      <Social />
      <Dark />
    </div>
  );
}

export default App;
