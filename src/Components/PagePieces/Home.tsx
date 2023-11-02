import HomeImage from "../HomeImage";
import Header from "../Header";
import styles from "./Home.module.scss";
import { MutableRefObject } from "react";

interface Props{
  myDivRef: MutableRefObject<null>;
}

export default function Home(props:Props) {
  return (
    <div className={styles.home} id="Home" ref={props.myDivRef}>
      <HomeImage />
      <Header />
    </div>
  );
}
