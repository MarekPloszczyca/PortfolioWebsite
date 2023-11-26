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
  title:string;
  description:string;
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
      <div className={styles.descriptionContainer}><h5>{props.title}</h5>
      <p>
     {props.description}
      </p>
      <div>
        <p>
          <img src={mode ? LinkDarkIcon : LinkLightIcon}></img>Live preview
        </p>
        <p>
          <img src={mode ? GitHubDark : GitHubLight}></img>View code
        </p>
      </div></div>
    </div>
  );
}
