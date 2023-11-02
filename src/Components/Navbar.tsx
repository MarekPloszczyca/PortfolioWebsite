/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  HomeOutline,
  InformationCircleOutline,
  LayersOutline,
  BriefcaseOutline,
  MailOutline,
} from "react-ionicons";
import { useReducer, useEffect, useState } from "react";

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
 

  const activeNavbarHandler = (section: number) => {
    props.refs[section].scrollIntoView();
  };

  

  useEffect(() => {
    const array = props.refs.map(
      (ref: {
        getBoundingClientRect: () => { (): any; new (): any; y: number };
      }) => {
        return ref.getBoundingClientRect().y;
      }
    );
    return setDistances((previous) => {
      return previous.concat(array);
    });
  }, [props.refs]);

  const scrollHandler = () => {
    const windowScroll = window.scrollY+ 100;
    if (windowScroll < distances[1]) {
      return dispatch({ type: "home" });
    }
    if (windowScroll < distances[2]) {
      return dispatch({ type: "about" });
    }
    if (windowScroll < distances[3]) {
      return dispatch({ type: "tech" });
    }
    if (windowScroll < distances[4]) {
      return dispatch({ type: "projects" });
    }
    if (windowScroll > distances[4]) {
      return dispatch({ type: "contact" });
    }
  };


  useEffect(() => {
    window.removeEventListener("scroll", scrollHandler);
    if (distances.length === 5) {
      return window.addEventListener("scroll", scrollHandler);
    }
  }, [distances]);

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
    </nav>
  );
}
