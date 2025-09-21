import styles from "./contact-form.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * ContactForm component provides a form for users to submit their contact information,
 * including name, email, school to be added, message, and privacy consent.
 *
 * It validates inputs for correctness and emptiness, persists data in sessionStorage,
 * and sends the data via POST to a backend endpoint.
 *
 * @component
 * @returns {JSX.Element} The rendered contact form element.
 */
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

  type InputErrors = {
    name: boolean;
    email: boolean;
    message: boolean;
    privacy: boolean;
    school: boolean;
  };

  const [errors, setErrors] = useState<InputErrors>({
    name: false,
    email: false,
    message: false,
    privacy: false,
    school: false,
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

  useEffect(() => {
    const savedContactData: string | null =
      sessionStorage.getItem("contactData");
    if (savedContactData) {
      setContactData(JSON.parse(savedContactData));
    }
  }, []);

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
    const newData = { ...contactData, name: event.target.value };
    setContactData(newData);
    sessionStorage.setItem("contactData", JSON.stringify(newData));
  };

  const changeEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...contactData, email: event.target.value };
    setContactData(newData);
    sessionStorage.setItem("contactData", JSON.stringify(newData));
  };

  const changeSchoolValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...contactData, school: event.target.value };
    setContactData(newData);
    sessionStorage.setItem("contactData", JSON.stringify(newData));
  };

  const changeQuestionValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...contactData, message: event.target.value };
    setContactData(newData);
    sessionStorage.setItem("contactData", JSON.stringify(newData));
  };

  const changePrivacyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...contactData, privacy: event.target.checked };
    setContactData(newData);
    sessionStorage.setItem("contactData", JSON.stringify(newData));
  };

  /**
   * Handles form submission: validates inputs and sends data if valid.
   * @param {React.FormEvent<HTMLFormElement>} event - The form submit event
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const payload = JSON.stringify(contactData);
    console.log(payload);
    debugger
    checkIfEmpty();

    if (validInputs() && errorsTrue()) {
      sendData(payload);
    }
  };

  /**
   * Checks if any validation errors exist
   * @returns {boolean} True if no errors, false otherwise
   */
  function errorsTrue() {
    return Object.values(checkErrors).every((value) => value === false);
  }

  /**
   * Validates inputs against regex patterns and privacy checkbox
   * @returns {boolean} True if all inputs valid, false otherwise
   */
  function validInputs() {
    checkInputError(/^[a-zA-ZäöüÄÖÜß0-9 ]*$/, contactData.name, "errorName");
    checkInputError(
      /^[A-Za-z0-9._-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/,
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

  /**
   * Validates single input using regex, updates errorClasses and formValid accordingly.
   * @param {RegExp} regex - The regex pattern to test against input value
   * @param {string} srcPath - The input value to validate
   * @param {keyof typeof errorClasses} errorClassName - The key for error class state to update
   */
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

  /** Checks if privacy checkbox is checked and updates state */
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

  /**
   * Checks if any required inputs are empty and sets placeholders and error states
   */
  const checkIfEmpty = () => {
    const updatedPlaceholder = { ...contactDataPlaceholder };
    const updateErrorClasses = { ...errors };
    const singleEmptyCheck = (
      objKey: keyof ContactForm | keyof InputErrors,
      objKeyEmpty: keyof ContactFormPlaceholder,
      errorPlaceholderText: string
    ) => {
      if (contactData[objKey] === "") {
        updatedPlaceholder[objKeyEmpty] = errorPlaceholderText;
        updateErrorClasses[objKey] = true;
      } else {
        updateErrorClasses[objKey] = false;
      }
    };
    singleEmptyCheck("name", "nameEmpty", "Leider fehlt dein Name");
    singleEmptyCheck("email", "emailEmpty", "Ups, leider keine E-Mail Adresse");
    singleEmptyCheck(
      "message",
      "messageEmpty",
      "Bitte schreib eine kurze Info"
    );
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

  /**
   * Sends the form data to the backend endpoint using fetch API.
   * Logs success or error to the console.
   * Deletes session storage data on fetch success.
   */
  const sendData = async (payload:string) => {
    try {
      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          responseType: "text",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`Fehler: ${response.status}`);
      }

      const data = await response.json();
      sessionStorage.removeItem('contactData');
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
          autoComplete="off"
          maxLength={20}
          placeholder={contactDataPlaceholder.nameEmpty}
          value={contactData.name}
          onChange={changeNameValue}
        />
        <span className={`input-error-font ${errorClasses.errorName}`}>
          Nur Buchstaben oder Zahlen
        </span>
      </label>
      <label className="input-label-font" htmlFor="email">
        E-Mail Adresse
        <input
          className={`${
            errors.email ? styles["error"] : ""
          } input-placeholder-font input-std-layout`}
          type="text"
          id="email"
          name="email"
          autoComplete="off"
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
            errors.school ? styles["error"] : ""
          } input-placeholder-font input-std-layout`}
          type="text"
          id="school"
          name="school"
          autoComplete="off"
          maxLength={30}
          placeholder={contactDataPlaceholder.schoolEmpty}
          value={contactData.school}
          onChange={changeSchoolValue}
        />
        <span className={`input-error-font ${errorClasses.errorSchool}`}>
          Keine Sonderzeichen erlaubt
        </span>
      </label>
      <label className="input-label-font" htmlFor="question">
        Andere Fragen oder Anregungen
        <input
          className={`${
            errors.message ? styles["error"] : ""
          } input-placeholder-font input-std-layout`}
          type="text"
          name="question"
          id="question"
          autoComplete="off"
          maxLength={200}
          placeholder={contactDataPlaceholder.messageEmpty}
          value={contactData.message}
          onChange={changeQuestionValue}
        />
        <span className={`input-error-font ${errorClasses.errorMessage}`}>
          Keine Sonderzeichen erlaubt
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
          Ich akzeptiere die{" "}
          <Link className={`${styles["privacy-link"]}`} to="/privacy">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </div>
      <span
        className={`input-error-font ${errorClasses.errorPrivacy} ${styles["privacy-error"]}`}>
        Akzeptiere die Datenschutzerklärung
      </span>
      <button type="submit" className={`button-std-font btn-std-layout`}>
        Abschicken
      </button>
    </form>
  );
}
