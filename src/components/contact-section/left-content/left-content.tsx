import styles from "./left-content.module.scss";
import childAndBooks from "../../../assets/images/contact-infos/girl-160172_640.png";

/**
 * React component that renders the left side of the contact section.
 *
 * This section contains introductory text encouraging users to contact
 * regarding missing content, suggestions, ideas, or requests related to the page.
 * It also includes an image of a child with books.
 *
 * Styling includes padding, glass effect shadow, and border styles applied via CSS modules.
 *
 * @returns {JSX.Element} The styled section with contact invitation text and an image.
 */
export default function LeftContactContent() {
  return (
    <section
      className={`${styles["main-content"]} pad-txt-box std-glas-effect-shadow border-txt-box`}>
      <div>
        <h3 className={`${styles["header"]} sub-header-font-small`}>
          Kontaktiert mich
        </h3>
        <p className={`${styles["text-box"]} main-txt-font`}>
          Für fehlenden Inhalt, Anregungen, Ideen oder Wünsche bezüglich dieser
          Seite, kontaktiert mich bitte. Entweder per WhatsApp oder über das
          vorhanden Kontaktforumlar nebenbei.
        </p>
        <p className={`${styles[""]} main-txt-font`}>
          Die Idee dieser Seite ist, alle Infos bezüglich dem Schuljahr und
          unserer Schule auf einer Seite zu haben. Kein lästiges Zettel suchen
          oder ständinges nachfragen mehr.
        </p>
        <p className={`${styles[""]} main-txt-font`}>
          Alle Infos auf einen Blick, immer und überall, auch am Smartphone.
        </p>
        
      </div>
      <div className={styles['img-wrapper']}>
        <img src={childAndBooks} alt="Schulkind" />
      </div>
    </section>
  );
}
