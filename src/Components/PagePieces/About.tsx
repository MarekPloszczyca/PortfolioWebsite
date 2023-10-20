import Description from "../Description";
import SectionTitle from "../SectionTitle";
import aboutImage from "../../Assets/AboutImage.jpg";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div>
      <SectionTitle title="About" />
      <div className={styles.aboutContainer}>
        <Description />
        <div>
          <img src={aboutImage}></img>
        </div>
      </div>
    </div>
  );
}
