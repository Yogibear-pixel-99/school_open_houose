import styles from "./text-content.module.scss";

export default function HeroText() {
  return (
    <div
      className={`${styles["content"]} pad-txt-box border-txt-box std-glas-effect-shadow`}>
      <h3 className="sub-header-font-small">Der Schulwechsel steht bevor</h3>
      <p className="main-txt-font">
        Das vierte Volksschuljahr hat begonnen. Viele von euch stellen sich noch
        einige Fragen diesbezüglich.
      </p>
      <ul className="main-txt-font">
        <li>Welche Schulen stehen zur Auswahl?</li>
        <li>Welche Schwerpunkte haben diese?</li>
        <li>Wann ist Tag der offenen Tür?</li>
        <li>Muss ich mein Kind dazu anmelden?</li>
      </ul>
      <p className="main-txt-font">
        Gleich unterhalb habe ich alle Schulen aufgelistet, die in Frage kommen.
        Bitte schickt mir von Schulen die noch fehlen eine EMail, damit ich sie
        hinzufügen kann. Danke!
      </p>
    </div>
  );
}
