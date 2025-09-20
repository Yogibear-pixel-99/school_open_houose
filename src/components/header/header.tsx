import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import busLogo from "../../assets/images/header/school-bus-296824.svg";

export default function Header() {
  return (
    <section className={`${styles["main-content"]} pad-main-header`}>
      <div>
        <h1 className="sub-header-font">
          Tag der offenen Tür{" "}
          <span className="show-max-1000-block"> 4. Klassen Schönering</span>
          <span className="hide-max-1000">
            - Für die Schüler der 4. Klassen der Volksschule Schönering.
          </span>
        </h1>
        <div className={styles["img-wrapper"]}>
          <img src={busLogo} alt="Schulbus" />
        </div>
      </div>
      
     <nav className="link-font">
        <Link to="/#allSchools">Zu den Schulen</Link>
        <Link to="/#schoolInfos">Schulinfos für 2025/26</Link>
        <Link to="/#contactForm">Infos ergänzen</Link>
      </nav>
    </section>
  );
}
