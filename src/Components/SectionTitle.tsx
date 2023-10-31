import styles from "./SectionTitle.module.scss";

interface Props {
 
  id: string;
}

export default function SectionTitle(props: Props) {
  return (
    <div className={styles.title} id={props.id}>
      <h3>{props.id}</h3>
    </div>
  );
}
