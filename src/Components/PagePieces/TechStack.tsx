import { MutableRefObject } from "react";
import SectionTitle from "../SectionTitle";
import TechGrid from "../TechGrid";
import styles from "./TechStack.module.scss";

interface Props {
  techRef:MutableRefObject<null>;
}

export default function TechStack(props:Props) {
  return (
    <div className={styles.techStack}>
      <SectionTitle id="My Tech Stack" myDivRef={props.techRef}/>
      <p>Technologies I've been working with most</p>
      <TechGrid />
    </div>
  );
}
