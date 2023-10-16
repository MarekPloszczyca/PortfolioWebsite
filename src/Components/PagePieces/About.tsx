import Description from "../Description";
import SectionTitle from "../SectionTitle";
import questionMark from "../../Assets/questionMark.png";
import roundQuestionMark from "../../Assets/roundQuestionMark.png";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div>
      <SectionTitle title="About" />
      <div className={styles.aboutContainer}>
        <Description />
        <div>
          <img className={styles.firstMark} src={questionMark}></img>
          <img className={styles.secondMark} src={questionMark}></img>
          <img className={styles.bigMark} src={roundQuestionMark}></img>
        </div>
      </div>
    </div>
  );
}
