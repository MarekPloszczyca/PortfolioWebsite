/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  HomeOutline,
  InformationCircleOutline,
  LayersOutline,
  BriefcaseOutline,
  MailOutline,
} from "react-ionicons";
import { useReducer } from "react";

import styles from "./Navbar.module.scss";

const iconStyle = {
  color: "#494949",
  height: "1.5rem",
  width: "1.5rem",
  border: "none",
};

const inputChange = (state, action) => {
  switch (action.type) {
    case "home":
      return {
        homeActive: true,
        aboutActive: false,
        techActive: false,
        projectsActive: false,
        contactActive: false,
      };
    case "about":
      return {
        homeActive: false,
        aboutActive: true,
        techActive: false,
        projectsActive: false,
        contactActive: false,
      };
    case "tech":
      return {
        homeActive: false,
        aboutActive: false,
        techActive: true,
        projectsActive: false,
        contactActive: false,
      };
    case "projects":
      return {
        homeActive: false,
        aboutActive: false,
        techActive: false,
        projectsActive: true,
        contactActive: false,
      };
    case "contact":
      return {
        homeActive: false,
        aboutActive: false,
        techActive: false,
        projectsActive: false,
        contactActive: true,
      };
  }
};

export default function Navbar() {
  const [activeBars, dispatch] = useReducer(inputChange, {
    homeActive: true,
    aboutActive: false,
    techActive: false,
    projectsActive: false,
    contactActive: false,
  });

  const activeNavbarHandler = (type: string) => {
    dispatch({ type: type });
  };
  return (
    <nav className={styles.navBar}>
      <a
        href="#Home"
        className={activeBars?.homeActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler("home");
        }}
      >
        <button>
          <HomeOutline style={iconStyle} />
        </button>
      </a>
      <a
        href="#About"
        className={activeBars?.aboutActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler("about");
        }}
      >
        <button>
          <InformationCircleOutline style={iconStyle} />
        </button>
      </a>
      <a
        href="#My Tech Stack"
        className={activeBars?.techActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler("tech");
        }}
      >
        <button>
          <LayersOutline style={iconStyle} />
        </button>
      </a>
      <a
        href="#Projects"
        className={activeBars?.projectsActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler("projects");
        }}
      >
        <button>
          <BriefcaseOutline style={iconStyle} />
        </button>
      </a>
      <a
        href="#Contact"
        className={activeBars?.contactActive ? styles.active : undefined}
        onClick={() => {
          activeNavbarHandler("contact");
        }}
      >
        <button>
          <MailOutline style={iconStyle} />
        </button>
      </a>
    </nav>
  );
}
