import {
  HomeOutline,
  InformationCircleOutline,
  LayersOutline,
  BriefcaseOutline,
  MailOutline,
} from "react-ionicons";

import styles from "./Navbar.module.scss";

const iconStyle = {
  color: "#494949",
  height: "1.5rem",
  width: "1.5rem",
};

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.active}>
        <HomeOutline style={iconStyle} />
      </div>
      <div>
        <InformationCircleOutline style={iconStyle} />
      </div>
      <div>
        <LayersOutline style={iconStyle} />
      </div>
      <div>
        <BriefcaseOutline style={iconStyle} />
      </div>
      <div>
        <MailOutline style={iconStyle} />
      </div>
    </nav>
  );
}
