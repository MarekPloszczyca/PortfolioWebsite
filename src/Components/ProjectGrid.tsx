import Project from "./Project";
import styles from "./ProjectGrid.module.scss";

interface Props {
  projectsFirstDisplay: boolean;
  projectsSecondDisplay: boolean;
}

export default function ProjectGrid(props: Props) {
  return (
    <div className={styles.projectGrid}>
      <Project
        style={
          props.projectsFirstDisplay ? styles.firstDisplayed : styles.leftOne
        }
      />
      <Project
        style={
          props.projectsFirstDisplay ? styles.secondDisplayed : styles.rightOne
        }
      />
      <Project
        style={props.projectsSecondDisplay ? styles.leftTwo : undefined}
      />
      <Project
        style={props.projectsSecondDisplay ? styles.rightTwo : undefined}
      />
    </div>
  );
}
