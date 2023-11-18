import Project from "./Project";
import styles from "./ProjectGrid.module.scss";
import LinkLightIcon from "../Assets/link-light.png";
import LinkDarkIcon from "../Assets/link-dark.png";
import GitHubLight from "../Assets/github-light.png";
import PassGenOne from "../Assets/WebsitesScreenshots/PassGen1.jpg";
import PassGenTwo from "../Assets/WebsitesScreenshots/PassGen2.jpg";
import PassGenThree from "../Assets/WebsitesScreenshots/PassGen3.jpg";
import ConnectOne from "../Assets/WebsitesScreenshots/ConnectFour1.jpg";
import ConnectTwo from "../Assets/WebsitesScreenshots/ConnectFour2.jpg";
import ConnectThree from "../Assets/WebsitesScreenshots/ConnectFour3.jpg";
interface Props {
  projectsFirstDisplay: boolean;
  projectsSecondDisplay: boolean;
}

export default function ProjectGrid(props: Props) {
  return (
    <div className={styles.projectGrid}>
      <Project
        screenshots={[LinkLightIcon, LinkDarkIcon, GitHubLight]}
        style={
          props.projectsFirstDisplay ? styles.firstDisplayed : styles.leftOne
        }
      />
      <Project
        screenshots={[GitHubLight, LinkLightIcon, LinkDarkIcon]}
        style={
          props.projectsFirstDisplay ? styles.secondDisplayed : styles.rightOne
        }
      />
      <Project
        screenshots={[ConnectOne, ConnectTwo, ConnectThree]}
        style={props.projectsSecondDisplay ? styles.leftTwo : undefined}
      />
      <Project
        screenshots={[PassGenOne, PassGenTwo, PassGenThree]}
        style={props.projectsSecondDisplay ? styles.rightTwo : undefined}
      />
    </div>
  );
}
