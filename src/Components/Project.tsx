import styles from "./Project.module.scss";
import Dummy from "../Assets/dummy.jpg";
import LinkLightIcon from "../Assets/link-light.png";
import LinkDarkIcon from "../Assets/link-dark.png";
import GitHubLight from "../Assets/github-light.png";
import GitHubDark from "../Assets/github-dark.png";
import { useSelector } from "react-redux";

export default function Project() {
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  return (
    <div className={styles.project}>
      <img src={Dummy}></img>
      <h5>Project title goes here</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <p>
          <img src={mode ? LinkDarkIcon : LinkLightIcon}></img>Live preview
        </p>
        <p>
          <img src={mode ? GitHubDark : GitHubLight}></img>View code
        </p>
      </div>
    </div>
  );
}
