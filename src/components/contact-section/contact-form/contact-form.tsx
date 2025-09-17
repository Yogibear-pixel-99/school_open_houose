import styles from "./contact-form.module.scss";
import { useState } from "react";

export default function ContactForm() {
  type ContactForm = {
    name: string;
    email: string;
    school: string;
    message: string;
    privacy: boolean;
  };

  type ContactFormPlaceholder = {
    nameEmpty: string;
    emailEmpty: string;
    messageEmpty: string;
    schoolEmpty: string;
    privacyNotChecked: string;
  };

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    privacy: false,
  });

  let checkErrors = {
    name: true,
    email: true,
    message: true,
    privacy: true,
  };

  const [contactData, setContactData] = useState<ContactForm>({
    name: "",
    email: "",
    school: "",
    message: "",
    privacy: false,
  });

  const [contactDataPlaceholder, setContactDataPlaceholder] =
    useState<ContactFormPlaceholder>({
      nameEmpty: "Bitte Namen eingeben",
      emailEmpty: "Bitte EMail Adresse eingeben",
      messageEmpty: "Hier eine kurze Nachricht eintragen",
      schoolEmpty: "Bitte den Namen der Schule eintragen",
      privacyNotChecked: "Bitte die Datenschutzerklärung akzeptieren",
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
    setContactData({ ...contactData, message: event.target.value });
  };
  const changePrivacyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, privacy: event.target.checked });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    checkIfEmpty();
    debugger;
    if (Object.values(checkErrors).every((value) => value === false)) {
      sendData();
    }
  };

  const checkIfEmpty = () => {
    const updatedPlaceholder = { ...contactDataPlaceholder };
    const updateErrorClasses = { ...errors };

    if (contactData.name === "") {
      updatedPlaceholder.nameEmpty = "Leider fehlt dein Name";
      updateErrorClasses.name = true;
    } else {
      updateErrorClasses.name = false;
    }

    if (contactData.email === "") {
      updatedPlaceholder.emailEmpty = "Ups, leider keine E-Mail Adresse";
      updateErrorClasses.email = true;
    } else {
      updateErrorClasses.email = false;
    }

    if (contactData.message === "") {
      updatedPlaceholder.messageEmpty = "Bitte schreib eine kurze Info";
      updateErrorClasses.message = true;
    } else {
      updateErrorClasses.message = false;
    }

    if (contactData.privacy === false) {
      updatedPlaceholder.privacyNotChecked =
        "Bitte die Datenschutzerklärung akzeptieren";
      updateErrorClasses.privacy = true;
    } else {
      updateErrorClasses.privacy = false;
    }

    checkErrors = updateErrorClasses;
    setContactDataPlaceholder(updatedPlaceholder);
    setErrors(updateErrorClasses);
  };

  const endPoint: string = "https://www.puercherjoachim.com/sendMailSchool.php";

  const sendData = async () => {
    debugger;
    try {
      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          responseType: "text",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`Fehler: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fehler beim Senden:", (error as Error).message);
    }
  };

  return (
    <form className={styles["main-content"]} onSubmit={handleSubmit}>
      <label className="input-label-font" htmlFor="fullname">
        {" "}
        Name
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font`}
          type="text"
          id="fullname"
          name="fullname"
          maxLength={20}
          placeholder={contactDataPlaceholder.nameEmpty}
          value={contactData.name}
          onChange={changeNameValue}
        />
      </label>
      <label className="input-label-font" htmlFor="email">
        E-Mail Adresse
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font`}
          type="text"
          id="email"
          name="email"
          maxLength={30}
          placeholder={contactDataPlaceholder.emailEmpty}
          value={contactData.email}
          onChange={changeEmailValue}
        />
      </label>
      <label className="input-label-font" htmlFor="school">
        {" "}
        Zu ergänzende Schule
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font`}
          type="text"
          id="school"
          name="school"
          maxLength={30}
          placeholder={contactDataPlaceholder.schoolEmpty}
          value={contactData.school}
          onChange={changeSchoolValue}
        />
      </label>
      <label className="input-label-font" htmlFor="question">
        Andere Fragen oder Anregungen
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font`}
          type="text"
          name="question"
          id="question"
          maxLength={200}
          placeholder={contactDataPlaceholder.messageEmpty}
          value={contactData.message}
          onChange={changeQuestionValue}
        />
      </label>
      <label className="input-label-font" htmlFor="privacy">
        {" "}
        <span>
          <a href="#">Datenschutzerklärung</a>.
        </span>
        Ich akzeptiere die{" "}
        <input
          className="input-placeholder-font"
          type="checkbox"
          name="privacy"
          id="privacy"
          checked={contactData.privacy}
          onChange={changePrivacyValue}
        />
      </label>

      <button type="submit" className="button-std-font">
        Abschicken
      </button>
    </form>
  );
}
