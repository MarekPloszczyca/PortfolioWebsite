import SectionTitle from "../SectionTitle";
import ProjectGrid from "../ProjectGrid";
import styles from "./Projects.module.scss";
import { MutableRefObject } from "react";

interface Props {
  projectsRef: MutableRefObject<null>;
  projectsFirstDisplay: boolean;
  projectsSecondDisplay: boolean;
}

export default function Projects(props: Props) {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>
        <SectionTitle id="Projects" myDivRef={props.projectsRef} />
      </div>
      <ProjectGrid
        projectsFirstDisplay={props.projectsFirstDisplay}
        projectsSecondDisplay={props.projectsSecondDisplay}
      />
    </div>
  );
}
