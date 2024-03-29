import Description from "../Description";
import HomeImage from "../HomeImage";
import SectionTitle from "../SectionTitle";

import styles from "./About.module.scss";
import { MutableRefObject } from "react";

interface Props {
  aboutRef: MutableRefObject<null>;
  aboutScrolled: boolean;
}

export default function About(props: Props) {
  return (
    <div>
      <SectionTitle id="About" myDivRef={props.aboutRef} />
      <div
        className={
          props.aboutScrolled ? styles.displayed : styles.aboutContainer
        }
      >
        <div className={styles.sectionContainer}>
          <Description aboutScrolled={props.aboutScrolled} />
          <HomeImage aboutScrolled={props.aboutScrolled} />
        </div>
      </div>
    </div>
  );
}
