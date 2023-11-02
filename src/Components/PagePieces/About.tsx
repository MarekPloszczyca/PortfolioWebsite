import Description from "../Description";
import SectionTitle from "../SectionTitle";
import aboutImage from "../../Assets/AboutImage.jpg";
import styles from "./About.module.scss";
import { MutableRefObject } from "react";

interface Props {
  aboutRef: MutableRefObject<null>;
}

export default function About(props: Props) {
  return (
    <div>
      <SectionTitle id="About" myDivRef={props.aboutRef} />
      <div className={styles.aboutContainer}>
        <Description />
        <div>
          <img src={aboutImage}></img>
        </div>
      </div>
    </div>
  );
}
