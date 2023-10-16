import Project from "./Project";
import styles from "./ProjectGrid.module.scss"
export default function ProjectGrid() {
  return (
    <div className={styles.projectGrid}>
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}
