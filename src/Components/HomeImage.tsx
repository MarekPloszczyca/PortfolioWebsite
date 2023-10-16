import image from "../Assets/LandingImage.jpg";
import styles from "./HomeImage.module.scss";

export default function HomeImage() {
 return <div className={styles.homeImage}>
    <img src={image}></img>
  </div>;
}
