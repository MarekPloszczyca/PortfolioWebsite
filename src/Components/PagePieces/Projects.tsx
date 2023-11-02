import SectionTitle from "../SectionTitle";
import ProjectGrid from "../ProjectGrid";
import styles from "./Projects.module.scss";
import { MutableRefObject } from "react";

interface Props {
  projectsRef: MutableRefObject<null>;
}

export default function Projects(props: Props) {
  return (
    <div className={styles.projects}>
      <SectionTitle id="Projects" myDivRef={props.projectsRef}></SectionTitle>
      <ProjectGrid />
    </div>
  );
}
