import { MutableRefObject } from "react";
import SectionTitle from "../SectionTitle";
import TechGrid from "../TechGrid";
import styles from "./TechStack.module.scss";
import { useSelector } from "react-redux";

interface Props {
  techRef: MutableRefObject<null>;
}

export default function TechStack(props: Props) {
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  return (
    <div className={mode ? styles.dark : styles.techStack}>
      <SectionTitle id="My Tech Stack" myDivRef={props.techRef} />
      <p>Technologies I've been working with most</p>
      <TechGrid />
    </div>
  );
}
