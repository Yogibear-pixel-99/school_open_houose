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
        Ich habe die gängigsten Schulen aufgelistet, um etwas den Überblick zu
        behalten. Falls eine Schule fehlt, schickt mir bitte eine E-Mail über
        den Kontaktbereich oder fügt sie selbst im Bereich „Schulen“ hinzu.
        Dafür benötigt ihr den Code, den ich geteilt habe.
      </p>
    </div>
  );
}
