import { Fragment, useState } from "react";
import SectionTitle from "../SectionTitle";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactFrom";
import Informations from "../Informations";

export default function Contact() {
  const [sentMail, setSentMail] = useState(false);

  const mailSent = () => {
    setSentMail(true);
  };
  return (
    <Fragment>
      <SectionTitle title="Contact" />
      <div className={styles.text}>
        <p>
          If you have any questions or cooperation offers, feel free to message
          me
        </p>
      </div>
      <footer className={styles.contact}>
        <ContactForm mailSent={mailSent} />
        <Informations sentMail={sentMail} />
      </footer>
    </Fragment>
  );
}
