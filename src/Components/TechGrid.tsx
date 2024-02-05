import { useState, useEffect, Fragment } from "react";
import Technology from "./Technology";
import { useSelector } from "react-redux";

import Html from "../Assets/html5.png";
import Css from "../Assets/css3.png";
import Js from "../Assets/js.png";
import React from "../Assets/react.png";
import Next from "../Assets/NextJs.png";
import NextWhite from "../Assets/NextJs-white.png";
import TypeScript from "../Assets/TypeScript.png";
import RestAPI from "../Assets/restAPI.png";
import TailwindCss from "../Assets/tailwindCss.png";
import Sass from "../Assets/sass.png";
import Git from "../Assets/git.png";
import Github from "../Assets/github-light.png";
import GithubWhite from "../Assets/Github-white.png";
import Figma from "../Assets/figma.png";

import styles from "./TechGrid.module.scss";

class Tech {
  icon: string;
  darkIcon?: string;
  title: string;

  constructor(icon: string, title: string, darkIcon?: string) {
    this.icon = icon;
    this.title = title;
    this.darkIcon = darkIcon;
  }
}

const technologies = [
  new Tech(Html, "HTML5"),
  new Tech(Css, "CSS3"),
  new Tech(Js, "JavaScript"),
  new Tech(React, "React(incl. Redux & Router)"),
  new Tech(Next, "Next.js", NextWhite),
  new Tech(TypeScript, "TypeScript"),
  new Tech(TailwindCss, "TailwindCSS"),
  new Tech(Sass, "SCSS,SASS"),
  new Tech(RestAPI, "RestAPI"),
  new Tech(Git, "Git"),
  new Tech(Github, "GitHub", GithubWhite),
  new Tech(Figma, "Figma"),
];

export default function TechGrid() {
  const [techGrid, setTechGrid] = useState<JSX.Element[]>();
  const mode = useSelector((state: { dark: boolean }) => state.dark);

  const techHandler = () => {
    const techMap = technologies.map((tech) => {
      return (
        <Technology
          key={tech.title}
          icon={mode ? (tech.darkIcon ? tech.darkIcon : tech.icon) : tech.icon}
          title={tech.title}
        />
      );
    });
    setTechGrid(techMap);
  };

  useEffect(techHandler, [mode]);

  return (
    <Fragment>
      <div className={styles.techGrid}>{techGrid}</div>
      <p className={styles.more}>And much more to come...</p>
    </Fragment>
  );
}
