import styles from "./Informations.module.scss";
import { Fragment } from "react";

interface Props {
  sentMail: boolean;
}

export default function Informations(props: Props) {
  return (
    <div className={styles.informations}>
      {!props.sentMail && (
        <Fragment>
          <h6>CONTACT ME:</h6>
          <div>
            <p>email: marploszczyca@gmail.com</p>
            <p>phone: +48 530752290</p>
          </div>
        </Fragment>
      )}
      {props.sentMail && <span className={styles.mailSent}><h6>Your message was successfully sent</h6></span>}
    </div>
  );
}
