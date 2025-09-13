import styles from "./header.module.scss";

export default function Header() {
  return <section className={`${styles["main-content"]} pad-main-header`}>
    <h1 className="sub-header-font">Für die Schüler der 4. Klasse Volksschule in Schönering... was kommt jetzt?</h1>
    <div>
      <nav className="link-font">
        <a href="">Zu den Schulen</a>
        <a href="">Infos ergänzen</a>
        <a href="">Schulinfos für 2025/26</a>
        
      </nav>
      <div className={styles['img-wrapper']}>
        <img src="src/assets/images/header/board-3700116_640.jpg" alt="Smileys" />
      </div>
    </div>
  </section>;
}
