import hand from "../Assets/WavingIcon.png";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

export default function Header() {
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  return (
    <div className={mode ? styles.darkModeHeader : styles.headerContainer}>
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
