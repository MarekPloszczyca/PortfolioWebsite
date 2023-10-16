import { useState, useEffect, Fragment } from "react";
import Technology from "./Technology";

import Html from "../Assets/html5.png";
import Css from "../Assets/css3.png";
import Js from "../Assets/js.png";
import React from "../Assets/react.png";
import TypeScript from "../Assets/TypeScript.png";
import Sass from "../Assets/sass.png";
import Git from "../Assets/git.png";
import Github from "../Assets/github.png";
import Figma from "../Assets/figma.png";

import styles from "./TechGrid.module.scss";

class Tech {
  icon: string;
  title: string;

  constructor(icon: string, title: string) {
    this.icon = icon;
    this.title = title;
  }
}

const technologies = [
  new Tech(Html, "HTML5"),
  new Tech(Css, "CSS3"),
  new Tech(Js, "JavaScript"),
  new Tech(React, "React(incl. Redux & Router)"),
  new Tech(TypeScript, "TypeScript"),
  new Tech(Sass, "SCSS,SASS"),
  new Tech(Git, "Git"),
  new Tech(Github, "GitHub"),
  new Tech(Figma, "Figma"),
];

export default function TechGrid() {
  const [techGrid, setTechGrid] = useState<JSX.Element[]>();

  const techHandler = () => {
    const techMap = technologies.map((tech) => {
      return (
        <Technology
          key={tech.title}
          icon={tech.icon}
          title={tech.title}
        
        />
      );
    });
    setTechGrid(techMap);
  };

  useEffect(techHandler, []);

  return (
    <Fragment>
      <div className={styles.techGrid}>{techGrid}</div>
      <p className={styles.more}>And much more to come...</p>
    </Fragment>
  );
}
