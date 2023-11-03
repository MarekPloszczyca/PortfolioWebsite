/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/PagePieces/Home";
import About from "./Components/PagePieces/About";
import TechStack from "./Components/PagePieces/TechStack";
import Projects from "./Components/PagePieces/Projects";
import Contact from "./Components/PagePieces/Contact";
import {
  Fragment,
  useRef,
  useEffect,
  MutableRefObject,
  useState,
  SetStateAction,
} from "react";

function App() {
  const [refs, setDistances] = useState<
    SetStateAction<MutableRefObject<null>[]>
  >([]);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null);

  const sectionRefs = (ref: MutableRefObject<null>) => {
    const forwardRef = ref.current;
    setDistances((old: any) => [...old, forwardRef]);
  };

  useEffect(() => {
      sectionRefs(homeRef);
      sectionRefs(aboutRef);
      sectionRefs(techRef);
      sectionRefs(projectsRef);
      sectionRefs(contactRef); 
  },[]);

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
