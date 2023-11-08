import styles from "./SectionTitle.module.scss";
import { MutableRefObject } from "react";
import { useSelector } from "react-redux";

interface Props {
  id: string;
  myDivRef: MutableRefObject<null>;
}

export default function SectionTitle(props: Props) {
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  return (
    <div
      className={mode ? styles.darkModeTitle : styles.title}
      id={props.id}
      ref={props.myDivRef}
    >
      <h3>{props.id}</h3>
    </div>
  );
}
