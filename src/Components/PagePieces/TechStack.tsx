import SectionTitle from "../SectionTitle";
import TechGrid from "../TechGrid";
import styles from "./TechStack.module.scss";

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <SectionTitle title="My Tech Stack" />
      <p>Technologies I've been working with most</p>
      <TechGrid />
    </div>
  );
}
