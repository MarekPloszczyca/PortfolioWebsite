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
  const [distances, setDistances] = useState<SetStateAction<number[]>>([]);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null);

  function sectionDistance(ref: MutableRefObject<null>) {
    const distance: number = ref.current?.getBoundingClientRect().top;
    setDistances((old: number[]) => [...old, distance]);
  }
  useEffect(() => {
    sectionDistance(aboutRef);
    sectionDistance(techRef);
    sectionDistance(projectsRef);
    sectionDistance(contactRef);
  }, []);
  return (
    <Fragment>
      <Navbar distances={distances} />
      <Home />
      <About aboutRef={aboutRef} />
      <TechStack techRef={techRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </Fragment>
  );
}

export default App;
