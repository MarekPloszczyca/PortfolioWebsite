import styles from "./Background.module.scss";
import Header from "./Header";
import ToProjectButton from "./ToProjectsButton";

export default function Background(props: { toProjects: () => void }) {
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.starsTwo}></div>
      <div className={styles.startsThree}></div>
      <div className={styles.title}>
        <Header />
        <ToProjectButton toProjects={props.toProjects} />
      </div>
    </div>
  );
}
