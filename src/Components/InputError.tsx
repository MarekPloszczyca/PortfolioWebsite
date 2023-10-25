import styles from "./InputError.module.scss";

export default function InputError(props: { message: string }) {
  return <p className={styles.error}>{props.message}</p>;
}
