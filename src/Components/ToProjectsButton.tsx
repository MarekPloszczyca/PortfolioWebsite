import styles from "./ToProjectButton.module.scss";
import { ArrowForwardOutline } from "react-ionicons";

export default function ToProjectButton(props: { toProjects: () => void }) {
  return (
    <button className={styles.button} onClick={props.toProjects}>
      View my work <ArrowForwardOutline />
    </button>
  );
}
