import Description from "../Description";
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
        <Description aboutScrolled={props.aboutScrolled} />
        <div className={props.aboutScrolled ? styles.animated : undefined}>
       
        </div>
      </div>
    </div>
  );
}
