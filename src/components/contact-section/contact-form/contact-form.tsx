import styles from "./contact-form.module.scss";
import { useState } from "react";

export default function ContactForm() {
  type contactForm = {
    name: string;
    email: string;
    school: string;
    question: string;
    privacy: boolean;
  };

  const [contactData, setContactData] = useState<contactForm>({
    name: "",
    email: "",
    school: "",
    question: "",
    privacy: false,
  });

  const changeNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, name: event.target.value });
  };
  const changeEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, email: event.target.value });
  };
  const changeSchoolValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, school: event.target.value });
  };
  const changeQuestionValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, question: event.target.value });
  };
  const changePrivacyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, privacy: event.target.checked });
  };

  return (
    <form className={styles["main-content"]} action="">
      <label className='input-label-font' htmlFor="fullname">
        {" "}
        Name
        <input className="input-placeholder-font"
          type="text"
          id="fullname"
          name="fullname"
          value={contactData.name}
          onChange={changeNameValue}
        />
      </label>
      <label className='input-label-font' htmlFor="email">
        E-Mail Adresse
        <input className="input-placeholder-font"
          type="text"
          id="email"
          name="email"
          value={contactData.email}
          onChange={changeEmailValue}
        />
      </label>
      <label className='input-label-font' htmlFor="school">
        {" "}
        Zu ergänzende Schule
        <input className="input-placeholder-font"
          type="text"
          id="school"
          name="school"
          value={contactData.school}
          onChange={changeSchoolValue}
        />
      </label>
      <label className='input-label-font' htmlFor="question">
        Andere Fragen oder Anregungen
        <input className="input-placeholder-font"
          type="text"
          name="question"
          id="question"
          value={contactData.question}
          onChange={changeQuestionValue}
        />
      </label>
      <label className='input-label-font' htmlFor="privacy">
        {" "}
        <span>
          <a href="#">Datenschutzerklärung</a>.
        </span>
        Ich akzeptiere die{" "}
        <input className="input-placeholder-font"
          type="checkbox"
          name="privacy"
          id="privacy"
          checked={contactData.privacy}
          onChange={changePrivacyValue}
        />
      </label>

      <button className="button-std-font">Abschicken</button>
    </form>
  );
}
