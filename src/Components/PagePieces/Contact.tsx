import { Fragment } from "react";
import SectionTitle from "../SectionTitle";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactFrom";
import Informations from "../Informations";

export default function Contact() {
  return (
    <Fragment>
      <SectionTitle title="Contact" />
      <footer className={styles.contact}>
        <p>
          If you have any questions or cooperation offers, feel free to message
          me
        </p>
        <ContactForm />
        <Informations />
      </footer>
     
    </Fragment>
  );
}
