import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
      <form className={styles.contactForm}>
        <input
          name="Name"
          type="text"
          placeholder="NAME"
          autoComplete="name"
        ></input>
        <input
          name="Email"
          type="email"
          placeholder="EMAIL"
          autoComplete="email"
        ></input>
        <textarea name="Message" placeholder="YOUR MESSAGE"></textarea>
        <button name="Submit" type="submit">
          SEND
        </button>
      </form>
    
  );
}
