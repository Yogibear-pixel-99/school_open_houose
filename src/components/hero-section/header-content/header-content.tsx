import styles from "./header-content.module.scss";

export default function Header() {
  return <section className={`${styles["main-content"]}`}>
    <h1 className="sub-header-font">Für die Schüler der Volksschule Schönering... was kommt jetzt?</h1>
  </section>;
}
