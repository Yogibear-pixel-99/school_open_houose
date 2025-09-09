import styles from "./header-content.module.scss";

export default function Header() {
  return <section className={`${styles["main-content"]}`}>
    <h1 className="sub-header-font">Für die Schüler der Volksschule Schönering... was kommt jetzt?</h1>
    <div>
      <nav className="link-font">
        <a href="">Zu den Schulen</a>
        <a href="">Infos ergänzen</a>
        
      </nav>
      <div className={styles['img-wrapper']}>
        <img src="src/assets/images/header/board-3700116_640.jpg" alt="Smileys" />
      </div>
    </div>
  </section>;
}
