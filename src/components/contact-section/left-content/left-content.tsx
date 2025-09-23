import styles from "./left-content.module.scss";
import childAndBooks from "../../../assets/images/contact-infos/girl-160172_640.webp";

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
          Für fehlende Inhalte, Anregungen, Ideen oder Wünsche bezüglich dieser
          Seite kontaktiert mich bitte – entweder per WhatsApp oder über das
          vorhandene Kontaktformular. Danke.
        </p>
        <p className={`main-txt-font`}>
          Die Idee ist es, alle Infos bezüglich des Schuljahres und
          unserer Schule auf einer Seite zu haben.
        </p>
        <p className={`main-txt-font`}>
          Alle Infos auf einen Blick, auch am Smartphone.
        </p>
      </div>
      <div className={styles['img-wrapper']}>
        <img src={childAndBooks} alt="Schulkind" />
      </div>
    </section>
  );
}
