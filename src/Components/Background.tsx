import styles from "./Background.module.scss";
import Header from "./Header";


export default function Background() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.starsTwo}></div>
      <div className={styles.startsThree}></div>
      <div className={styles.title}>
        <Header />
      </div>
    </div>
  );
}
