import styles from "./text-content.module.scss";

/**
 * React component that renders the hero section text content.
 *
 * This component provides introductory information to parents and students
 * about the upcoming school transition. It includes common questions
 * and a note encouraging users to suggest missing schools via email.
 *
 * It is intended to be used inside a hero or landing section to provide
 * context and engage users with helpful information.
 *
 * @returns {JSX.Element} A styled content box with headline, text, and a list of FAQs.
 */
export default function HeroText() {
  return (
    <div
      className={`${styles["content"]} pad-txt-box border-txt-box std-glas-effect-shadow`}>
      <h3 className="sub-header-font-small">Der Schulwechsel steht bevor</h3>
      <p className="main-txt-font">
        Das vierte Volksschuljahr hat begonnen. Viele von euch stellen sich noch
        einige Fragen dazu.
      </p>
      <ul className="main-txt-font">
        <li>Welche Schulen stehen zur Auswahl?</li>
        <li>Welche Schwerpunkte haben diese?</li>
        <li>Wann ist der Tag der offenen Tür?</li>
        <li>Muss ich mein Kind dafür anmelden?</li>
      </ul>
      <p className="main-txt-font">
        Gleich unten habe ich alle Schulen aufgelistet, die infrage kommen.
        Bitte schickt mir eine E-Mail zu Schulen, die noch fehlen, damit ich sie
        hinzufügen kann. Danke!
      </p>
    </div>
  );
}
