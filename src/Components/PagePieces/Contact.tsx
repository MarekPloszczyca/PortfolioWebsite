import { Fragment, useState, MutableRefObject } from "react";
import SectionTitle from "../SectionTitle";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactFrom";
import Informations from "../Informations";

interface Props {
  contactRef: MutableRefObject<null>;
}

export default function Contact(props: Props) {
  const [sentMail, setSentMail] = useState(false);

  const mailSent = () => {
    setSentMail(true);
  };
  return (
    <Fragment>
      <SectionTitle id="Contact" myDivRef={props.contactRef} />
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
