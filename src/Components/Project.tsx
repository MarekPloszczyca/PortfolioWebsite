import styles from "./Project.module.scss";
import LinkLightIcon from "../Assets/link-light.png";
import LinkDarkIcon from "../Assets/link-dark.png";
import GitHubLight from "../Assets/github-light.png";
import GitHubDark from "../Assets/github-dark.png";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

interface Props {
  style: string | undefined;
  screenshots: string[];
}

export default function Project(props: Props) {
  const mode = useSelector((state: { dark: boolean }) => state.dark);
  const [newInterval, setNewInterval] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const interval = useRef<number>();


  
  useEffect(() => {
    if (!newInterval) {
      return clearInterval(interval.current);
    }
    if (newInterval) {
      interval.current = setInterval(() => {
        setSlideNumber((current) => {
          if (current === 2) {
            return current - 2;
          }
          return current + 1;
        });
      }, 2000);
    }
  }, [newInterval]);

  return (
    <div
      onMouseEnter={() => {
        setNewInterval(true);
      }}
      onMouseLeave={() => {
        setNewInterval(false);
        setSlideNumber(0);
      }}
      className={`${props.style} + ${styles.project}`}
    >
      <img src={props.screenshots[slideNumber]}></img>
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
