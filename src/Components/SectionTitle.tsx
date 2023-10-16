import styles from "./SectionTitle.module.scss"

interface Props {
  title: string;
}

export default function SectionTitle(props: Props) {
  return <div className={styles.title}><h3>{props.title}</h3></div>;
}
