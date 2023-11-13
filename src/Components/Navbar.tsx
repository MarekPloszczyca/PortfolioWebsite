/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Home,
  InformationCircle,
  Layers,
  Briefcase,
  Mail,
} from "react-ionicons";
import { useReducer, useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "../GlobalStates/store";

import styles from "./Navbar.module.scss";

const iconStyle = {
  height: "1.5rem",
  width: "1.5rem",
  border: "none",
};

const inputChange = (state: any, action: { type: string }) => {
  switch (action.type) {
    case "home":
      return {
        ...state,
        homeActive: true,
        aboutActive: false,
        techActive: false,
        projectsActive: false,
        contactActive: false,
      };
    case "about":
      return {
        ...state,
        homeActive: false,
        aboutActive: true,
        techActive: false,
        projectsActive: false,
        contactActive: false,
      };
    case "tech":
      return {
        ...state,
        homeActive: false,
        aboutActive: false,
        techActive: true,
        projectsActive: false,
        contactActive: false,
      };
    case "projects":
      return {
        ...state,
        homeActive: false,
        aboutActive: false,
        techActive: false,
        projectsActive: true,
        contactActive: false,
      };
    case "contact":
      return {
        ...state,
        homeActive: false,
        aboutActive: false,
        techActive: false,
        projectsActive: false,
        contactActive: true,
      };
  }
};

interface Props {
  refs: any;
  aboutAnimation: () => void;
  firstProjectsAnimation: () => void;
  secondProjectsAnimation: () => void;
}

export default function Navbar(props: Props) {
  const [activeBars, dispatch] = useReducer(inputChange, {
    homeActive: true,
    aboutActive: false,
    techActive: false,
    projectsActive: false,
    contactActive: false,
  });
  const [distances, setDistances] = useState([]);
  const [resized, setResized] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  const modeHandler = useDispatch();

  const activeNavbarHandler = (section: number) => {
    if (section === 0) {
      return window.scrollTo(0, 0);
    }
    props.refs[section].scrollIntoView();
  };

  useEffect(() => {
    if (distances.length === 5) {
      setCurrentScroll(window.scrollY);
    }
  }, [distances.length]);

  useEffect(() => {
    const resizeHandler = () => {
      const resizing = () => {
        resized ? setResized(false) : setResized(true);
      };
      let timeout = undefined;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(resizing, 100);
    };

    if (resized) {
      setCurrentScroll(window.scrollY);
    }

    window.addEventListener("resize", resizeHandler);

    const array = props.refs.map(
      (ref: {
        getBoundingClientRect: () => { (): any; new (): any; top: number };
      }) => {
        return ref.getBoundingClientRect().top;
      }
    );
    return setDistances(array);
  }, [props.refs, resized]);

  useEffect(() => {
    const scrollHandler = () => {
      if (distances[1] - 500 < window.scrollY) {
        props.aboutAnimation();
      }
      if (distances[3] - 700 < window.scrollY) {
        props.firstProjectsAnimation();
      }
      if (distances[3] +   100 < window.scrollY) {
        props.secondProjectsAnimation();
      }
      const windowScroll = window.scrollY + 200;
      if (windowScroll < distances[1] + currentScroll) {
        return dispatch({ type: "home" });
      }
      if (windowScroll < distances[2] + currentScroll) {
        return dispatch({ type: "about" });
      }
      if (windowScroll < distances[3] + currentScroll) {
        return dispatch({ type: "tech" });
      }
      if (windowScroll < distances[4] + currentScroll) {
        return dispatch({ type: "projects" });
      }
      if (windowScroll > distances[4] + currentScroll) {
        return dispatch({ type: "contact" });
      }
    };
    window.removeEventListener("scroll", scrollHandler);
    if (distances.length === 5) {
      window.addEventListener("scroll", scrollHandler);
    }
  }, [distances, currentScroll, props]);

  return (
    <Fragment>
      <nav className={mode ? styles.darkMode : styles.navBar}>
        <button
          className={
            activeBars?.homeActive
              ? mode
                ? styles.darkModeActive
                : styles.active
              : undefined
          }
          onClick={() => {
            activeNavbarHandler(0);
          }}
        >
          <Home color={mode ? "#d8d7d7" : "#1c1c1c"} style={iconStyle} />
        </button>
        <button
          className={
            activeBars?.aboutActive
              ? mode
                ? styles.darkModeActive
                : styles.active
              : undefined
          }
          onClick={() => {
            activeNavbarHandler(1);
          }}
        >
          <InformationCircle
            color={mode ? "#d8d7d7" : "#1c1c1c"}
            style={iconStyle}
          />
        </button>
        <button
          className={
            activeBars?.techActive
              ? mode
                ? styles.darkModeActive
                : styles.active
              : undefined
          }
          onClick={() => {
            activeNavbarHandler(2);
          }}
        >
          <Layers color={mode ? "#d8d7d7" : "#1c1c1c"} style={iconStyle} />
        </button>
        <button
          className={
            activeBars?.projectsActive
              ? mode
                ? styles.darkModeActive
                : styles.active
              : undefined
          }
          onClick={() => {
            activeNavbarHandler(3);
          }}
        >
          <Briefcase color={mode ? "#d8d7d7" : "#1c1c1c"} style={iconStyle} />
        </button>
        <button
          className={
            activeBars?.contactActive
              ? mode
                ? styles.darkModeActive
                : styles.active
              : undefined
          }
          onClick={() => {
            activeNavbarHandler(4);
          }}
        >
          <Mail color={mode ? "#d8d7d7" : "#1c1c1c"} style={iconStyle} />
        </button>
      </nav>
      <div className={styles.modeButtonContainer}>
        <button
          className={mode ? styles.darkModeButton : styles.modeButton}
          onClick={() => {
            mode ? modeHandler(light()) : modeHandler(dark());
          }}
        ></button>
      </div>
    </Fragment>
  );
}
