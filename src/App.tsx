import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/PagePieces/Home";
import About from "./Components/PagePieces/About";
import TechStack from "./Components/PagePieces/TechStack";
import Projects from "./Components/PagePieces/Projects";
import Contact from "./Components/PagePieces/Contact";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
