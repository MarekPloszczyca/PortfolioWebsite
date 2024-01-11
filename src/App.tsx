import "./App.module.scss";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/PagePieces/Home";
import About from "./Components/PagePieces/About";
import TechStack from "./Components/PagePieces/TechStack";
import Projects from "./Components/PagePieces/Projects";
import Contact from "./Components/PagePieces/Contact";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [refs, setRefs] = useState<null[]>([]);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null);
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  const [aboutScroll, setAboutScroll] = useState(false);
  const [projectsFirstScroll, setProjectsFirstScroll] = useState(false);
  const [projectsSecondScroll, setProjectsSecondScroll] = useState(false);

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

  const aboutAnimation = () => {
    setAboutScroll(true);
  };

  const projectsFirstAnimation = () => {
    setProjectsFirstScroll(true);
  };
  const projectsSecondAnimation = () => {
    setProjectsSecondScroll(true);
  };

  return (
    <div className={mode ? styles.dark : styles.light}>
      <Navbar
        refs={refs}
        aboutAnimation={aboutAnimation}
        firstProjectsAnimation={projectsFirstAnimation}
        secondProjectsAnimation={projectsSecondAnimation}
      />
      <Home myDivRef={homeRef} />
      <div className={styles.container}>
        <About aboutRef={aboutRef} aboutScrolled={aboutScroll} />
        <TechStack techRef={techRef} />
        <Projects
          projectsRef={projectsRef}
          projectsFirstDisplay={projectsFirstScroll}
          projectsSecondDisplay={projectsSecondScroll}
        />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}

export default App;
