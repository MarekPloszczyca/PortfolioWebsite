import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/PagePieces/Home";
import About from "./Components/PagePieces/About";
import TechStack from "./Components/PagePieces/TechStack";
import Projects from "./Components/PagePieces/Projects";
import Contact from "./Components/PagePieces/Contact";
import { Fragment, useRef, useEffect, useState } from "react";

function App() {
  const [refs, setRefs] = useState<null[]>([]);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    if (refs.length === 5) {
      return;
    }
    const refsArray = [homeRef, aboutRef, techRef, projectsRef, contactRef];
    const array = refsArray.map((ref) => {
      return ref.current;
    });
    setRefs(array);
  }, [refs]);

  return (
    <Fragment>
      <Navbar refs={refs} />
      <Home myDivRef={homeRef} />
      <About aboutRef={aboutRef} />
      <TechStack techRef={techRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </Fragment>
  );
}

export default App;
