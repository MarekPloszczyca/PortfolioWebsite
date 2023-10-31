import HomeImage from "../HomeImage";
import Header from "../Header";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home} id="Home">
      <HomeImage />
      <Header />
    </div>
  );
}
