
import styles from "./Home.module.scss";
import { MutableRefObject } from "react";
import Background from "../Background";

interface Props {
  myDivRef: MutableRefObject<null>;
}

export default function Home(props: Props) {
  return (
    <div className={styles.home} id="Home" ref={props.myDivRef}>
      <Background />
     
    </div>
  );
}
