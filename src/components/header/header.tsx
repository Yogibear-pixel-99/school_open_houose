import styles from "./header.module.scss";

export default function Header() {
  return (
    <section className={`${styles["main-content"]} pad-main-header`}>
      <div>
        <h1 className="sub-header-font">Tag der offenen Tür - Für die Schüler der 4. Klassen der Volksschule Schönering.</h1>
        <nav className="link-font">
          <a href="#allSchools">Zu den Schulen</a>
          <a href="#contactForm">Infos ergänzen</a>
          <a href="#schoolInfos">Schulinfos für 2025/26</a>
        </nav>
      </div>

      <div>
        <div className={styles["img-wrapper"]}>
          <img
            src="src/assets/images/header/school-bus-296824.svg"
            alt="Schulbus"
          />
        </div>
      </div>
    </section>
  );
}
