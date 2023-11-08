/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  HomeOutline,
  InformationCircleOutline,
  LayersOutline,
  BriefcaseOutline,
  MailOutline,
} from "react-ionicons";
import { useReducer, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "../GlobalStates/store";

import styles from "./Navbar.module.scss";

const iconStyle = {
  color: "#494949",
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
    props.refs[section].scrollIntoView();
  };

  useEffect(() => {
    if (distances.length === 5) {
      setCurrentScroll(window.scrollY);
      console.log(mode);
    }
  }, [distances.length, mode]);

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
      const windowScroll = window.scrollY + 100;
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
  }, [distances, currentScroll]);

  return (
    <nav className={styles.navBar}>
      <button
        className={activeBars?.homeActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler(0);
        }}
      >
        <HomeOutline style={iconStyle} />
      </button>
      <button
        className={activeBars?.aboutActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler(1);
        }}
      >
        <InformationCircleOutline style={iconStyle} />
      </button>
      <button
        className={activeBars?.techActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler(2);
        }}
      >
        <LayersOutline style={iconStyle} />
      </button>
      <button
        className={activeBars?.projectsActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler(3);
        }}
      >
        <BriefcaseOutline style={iconStyle} />
      </button>
      <button
        className={activeBars?.contactActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler(4);
        }}
      >
        <MailOutline style={iconStyle} />
      </button>
      <button
        onClick={() => {
          mode ? modeHandler(light()) : modeHandler(dark());
        }}
      >
        Test
      </button>
    </nav>
  );
}
