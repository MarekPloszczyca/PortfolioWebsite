import styles from "./Description.module.scss";

interface Props {
  aboutScrolled: boolean;
}

export default function Description(props: Props) {
  return (
    <p className={props.aboutScrolled ? styles.displayed : styles.description}>
      <span>I</span> am an International Logistics graduate who decided to try
      my hand at web programming. After just a few days of self-study, I knew
      this was the career path I wanted to associate with my future. The choice
      fell on a typical front-end stack, but in the future I would like to
      explore the back-end as well, to be able to create websites from A to Z on
      my own, which I am looking forward to. For now, however, I am
      concentrating on learning and honing my skills in the user-visible part of
      web applications.
    </p>
  );
}
