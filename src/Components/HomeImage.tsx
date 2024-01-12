import image from "../Assets/LandingImage.jpg";
import styles from "./HomeImage.module.scss";
interface Props {
  aboutScrolled: boolean;
}

export default function HomeImage(props: Props) {
  return (
    <div className={props.aboutScrolled ? styles.displayed : styles.homeImage}>
      <img src={image}></img>
    </div>
  );
}
