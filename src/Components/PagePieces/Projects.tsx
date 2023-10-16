import SectionTitle from "../SectionTitle";
import ProjectGrid from "../ProjectGrid";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <SectionTitle title="Projects"></SectionTitle>
      <ProjectGrid />
    </div>
  );
}
