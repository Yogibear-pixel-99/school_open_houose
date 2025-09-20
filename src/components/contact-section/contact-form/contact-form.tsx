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

  let formValid: boolean[] = [];

  const [errorClasses, setErrorClasses] = useState({
    errorName: "",
    errorEmail: "",
    errorSchool: "",
    errorMessage: "",
    errorPrivacy: "",
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

    if (validInputs() && errorsTrue()) {
      sendData();
    }
  };

  function errorsTrue() {
    return Object.values(checkErrors).every((value) => value === false);
  }

  function validInputs() {
    checkInputError(/^[a-zA-ZäöüÄÖÜß0-9 ]*$/, contactData.name, "errorName");
    checkInputError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      contactData.email,
      "errorEmail"
    );
    checkInputError(
      /^[a-zA-ZäöüÄÖÜß0-9 .,;:!?'"\-–—_+=\/\\|@#$%^&*~`]*$/,
      contactData.school,
      "errorSchool"
    );
    checkInputError(
      /^[a-zA-ZäöüÄÖÜß0-9 .,;:!?'"\-–—_+=\/\\|@#$%^&*~`]*$/,
      contactData.message,
      "errorMessage"
    );
    checkPrivacyError();

    return formValid.every((value) => value === true);
  }

  function checkInputError(
    regex: RegExp,
    srcPath: string,
    errorClassName: keyof typeof errorClasses
  ) {
    if (srcPath.trim() === "") {
      errorClasses[errorClassName] = "";
      return;
    }

    if (!regex.test(srcPath)) {
      formValid.push(false);
      errorClasses[errorClassName] = "error-color";
    } else {
      formValid.push(true);
      errorClasses[errorClassName] = "";
    }
  }

  function checkPrivacyError() {
    const updateClasses = { ...errorClasses };

    if (contactData.privacy === false) {
      formValid.push(false);
      updateClasses["errorPrivacy"] = "error-color";
    } else {
      formValid.push(true);
      updateClasses["errorPrivacy"] = "";
    }
    setErrorClasses(updateClasses);
  }

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

  const endPoint: string =
    "https://www.puercherjoachim.com/schoolinfos/sendMailSchool.php";

  const sendData = async () => {
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
          } input-placeholder-font input-std-layout`}
          type="text"
          id="fullname"
          name="fullname"
          maxLength={20}
          placeholder={contactDataPlaceholder.nameEmpty}
          value={contactData.name}
          onChange={changeNameValue}
        />
        <span className={`input-error-font ${errorClasses.errorName}`}>
          Kein gültiger Name
        </span>
      </label>
      <label className="input-label-font" htmlFor="email">
        E-Mail Adresse
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font input-std-layout`}
          type="text"
          id="email"
          name="email"
          maxLength={30}
          placeholder={contactDataPlaceholder.emailEmpty}
          value={contactData.email}
          onChange={changeEmailValue}
        />
        <span className={`input-error-font ${errorClasses.errorEmail}`}>
          Keine gültige EMail Addresse
        </span>
      </label>
      <label className="input-label-font" htmlFor="school">
        {" "}
        Zu ergänzende Schule
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font input-std-layout`}
          type="text"
          id="school"
          name="school"
          maxLength={30}
          placeholder={contactDataPlaceholder.schoolEmpty}
          value={contactData.school}
          onChange={changeSchoolValue}
        />
        <span className={`input-error-font ${errorClasses.errorSchool}`}>
          Nur Buchstaben und Zahlen
        </span>
      </label>
      <label className="input-label-font" htmlFor="question">
        Andere Fragen oder Anregungen
        <input
          className={`${
            errors.name ? styles["error"] : ""
          } input-placeholder-font input-std-layout`}
          type="text"
          name="question"
          id="question"
          maxLength={200}
          placeholder={contactDataPlaceholder.messageEmpty}
          value={contactData.message}
          onChange={changeQuestionValue}
        />
        <span className={`input-error-font ${errorClasses.errorMessage}`}>
          Keine Sonderzeichen
        </span>
      </label>
      <div className={`${styles["checkbox-wrapper"]} input-label-font`}>
        <label className="input-label-font" htmlFor="privacy">
          {" "}
        </label>
        <input
          className={`input-placeholder-font ${styles["checkbox-field"]}`}
          type="checkbox"
          name="privacy"
          id="privacy"
          checked={contactData.privacy}
          onChange={changePrivacyValue}
        />
        <span className={styles["custom-checkbox"]}>
          Ich akzeptiere die <a href="#">Datenschutzerklärung</a>.
        </span>
      </div>
      <span
        className={`input-error-font ${errorClasses.errorPrivacy} ${styles["privacy-error"]}`}>
        Akzeptiere die Datenschutzerklärung
      </span>
      <button type="submit" className="button-std-font btn-std-layout">
        Abschicken
      </button>
    </form>
  );
}
