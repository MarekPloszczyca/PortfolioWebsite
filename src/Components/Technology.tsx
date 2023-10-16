import styles from "./Technology.module.scss";

interface Props {
  icon: string;
  title: string;
 
}

export default function Technology(props: Props) {
  return (
    <div className={styles.technology}>
      <img src={props.icon}></img>
      <p>{props.title}</p>
    </div>
  );
}
