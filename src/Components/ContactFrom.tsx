/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useReducer, ChangeEvent } from "react";

const serviceID = "PortfolioWebsite";
const templateID = "template_x2slm9n";
const publicKey = "5GZD6bKI9widLn-mj";
const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const inputChange = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        name: action.nextName,
        email: state.email,
        message: state.message,
      };
    case "email":
      return {
        name: state.name,
        email: action.nextEmail,
        message: state.message,
      };
    case "message":
      return {
        name: state.name,
        email: state.email,
        message: action.nextMessage,
      };
  }
};

export default function ContactForm(props) {
  const [nameInput, setNameInput] = useState(true);
  const [emailInput, setEmailInput] = useState(true);
  const [messageInput, setMessageInput] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSentOut, setIsSentOut] = useState(false);

  const [inputValues, dispatch] = useReducer(inputChange, {
    name: "",
    email: "",
    message: "",
  });

  const nameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "name", nextName: event.target.value });
  };
  const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "email", nextEmail: event.target.value });
  };
  const messageInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: "message", nextMessage: event.target.value });
  };

  const inputValidation = () => {
    inputValues?.name.trim() === "" ? setNameInput(false) : setNameInput(true);

    !inputValues?.email.trim().match(validEmail)
      ? setEmailInput(false)
      : setEmailInput(true);

    inputValues?.message.trim() === ""
      ? setMessageInput(false)
      : setMessageInput(true);
  };

  useEffect(() => {
    inputValidation();
  }),
    [inputValues?.name, inputValues?.email, inputValues?.message];

  const submitHandler = () => {
    setSubmitted(true);
  };

  const sendEmail = async (event: {
    preventDefault: () => void;
    target: string | HTMLFormElement;
  }) => {
    event.preventDefault();
    if (isSentOut) {
      return;
    }
    inputValidation();
    try {
      if (nameInput && emailInput && messageInput) {
        setIsSending(true);
        setTimeout(() => {
          setIsSending(false);
          setIsSentOut(true);
          event.target.reset();
          props.mailSent();
        }, 1000); // await emailjs.sendForm(serviceID, templateID, event.target, publicKey);
        // setIsSending(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <input
        className={submitted && !nameInput ? styles.wrong : undefined}
        name="name"
        type="text"
        placeholder="NAME"
        autoComplete="name"
        onChange={nameInputHandler}
        onClick={() => {
          setNameInput(true);
          setSubmitted(false);
        }}
      ></input>
      <input
        className={submitted && !emailInput ? styles.wrong : undefined}
        name="email"
        type="email"
        placeholder="EMAIL"
        autoComplete="email"
        onChange={emailInputHandler}
        onClick={() => {
          setEmailInput(true);
          setSubmitted(false);
        }}
      ></input>
      <textarea
        className={submitted && !messageInput ? styles.wrong : undefined}
        name="message"
        placeholder="YOUR MESSAGE"
        onChange={messageInputHandler}
        onClick={() => {
          setMessageInput(true);
          setSubmitted(false);
        }}
      ></textarea>
      <button name="Submit" type="submit" onClick={submitHandler}>
        {!isSending && !isSentOut && <p>SEND</p>}
        {isSending && (
          <div className={styles.loadingContainer}>
            {isSending && <div className={styles.loading}></div>}
          </div>
        )}
        {
          <div>
            {isSentOut && <span className={styles.tick}>&#10003;</span>}
          </div>
        }
      </button>
    </form>
  );
}
