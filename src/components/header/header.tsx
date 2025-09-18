import styles from "./header.module.scss";
import {Link} from "react-router-dom";
import busLogo from "../../assets/images/header/school-bus-296824.svg";

export default function Header() {
  return (
    <section className={`${styles["main-content"]} pad-main-header`}>
      <div>
        <h1 className="sub-header-font">Tag der offenen Tür - Für die Schüler der 4. Klassen der Volksschule Schönering.</h1>
        <nav className="link-font">
          <Link to="/#allSchools">Zu den Schulen</Link>
          <Link to="/#contactForm">Infos ergänzen</Link>
          <Link to="/#schoolInfos">Schulinfos für 2025/26</Link>
          {/* <a href="#allSchools">Zu den Schulen</a>
          <a href="#contactForm">Infos ergänzen</a>
          <a href="#schoolInfos">Schulinfos für 2025/26</a> */}
        </nav>
      </div>

      <div>
        <div className={styles["img-wrapper"]}>
          <img
            src={busLogo}
            alt="Schulbus"
          />
        </div>
      </div>
    </section>
  );
}
