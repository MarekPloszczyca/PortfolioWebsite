import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";

const serviceID = "PortfolioWebsite";
const templateID = "template_x2slm9n";
const publicKey = "5GZD6bKI9widLn-mj";

export default function ContactForm() {
  const sendEmail = (event: { preventDefault: () => void; target: string | HTMLFormElement; }) => {
    event.preventDefault();
    try {
      emailjs.sendForm(serviceID, templateID, event.target, publicKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <input
        name="name"
        type="text"
        placeholder="NAME"
        autoComplete="name"
      ></input>
      <input
        name="email"
        type="email"
        placeholder="EMAIL"
        autoComplete="email"
      ></input>
      <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
      <button name="Submit" type="submit">
        SEND
      </button>
    </form>
  );
}
