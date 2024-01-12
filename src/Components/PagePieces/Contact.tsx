import { useState, MutableRefObject } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../SectionTitle";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactFrom";
import Informations from "../Informations";

interface Props {
  contactRef: MutableRefObject<null>;
}

export default function Contact(props: Props) {
  const [sentMail, setSentMail] = useState(false);
  const mode = useSelector((state: { dark: boolean }) => state.dark);

  const mailSent = () => {
    setSentMail(true);
  };
  return (
    <div className={mode ? styles.dark : styles.container}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
      >
        <path d="M0 0 L50 100 L100 0 Z" ></path>
      </svg>
      <SectionTitle id="Contact" myDivRef={props.contactRef} />
      <div className={styles.text}>
        <p>
          If you have any questions, cooperation offers or suggestions, feel
          free to message me
        </p>
      </div>
      <div className={styles.formContainer}>
        <footer className={mode ? styles.darkModeContact : styles.contact}>
          <ContactForm mailSent={mailSent} />
          <Informations sentMail={sentMail} />
        </footer>
      </div>
    </div>
  );
}
