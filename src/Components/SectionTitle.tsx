import styles from "./SectionTitle.module.scss";
import { MutableRefObject } from "react";

interface Props {
  id: string;
  myDivRef: MutableRefObject<null>;
}

export default function SectionTitle(props: Props) {
  return (
    <div className={styles.title} id={props.id} ref={props.myDivRef}>
      <h3>{props.id}</h3>
    </div>
  );
}
