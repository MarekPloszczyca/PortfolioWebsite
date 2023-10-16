import hand from "../Assets/WavingIcon.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>
        <span>
          Hello <img src={hand}></img>,
        </span>
        <span>
          My name is <span className={styles.name}>Marek</span>
        </span>
        <span>
          I'm a <span className={styles.underline}>Front-End</span> Developer
        </span>
      </h1>
    </div>
  );
}
