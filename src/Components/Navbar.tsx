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
  border:"none",
};

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
        <button className={styles.active}>
          <HomeOutline style={iconStyle} />
        </button>
      <button>
        <InformationCircleOutline style={iconStyle} />
      </button>
      <button>
        <LayersOutline style={iconStyle} />
      </button>
      <button>
        <BriefcaseOutline style={iconStyle} />
      </button>
      <button>
        <MailOutline style={iconStyle} />
      </button>
    </nav>
  );
}
