import styles from "./privacy-policy.module.scss";
import Header from "../header/header";
import { Link } from "react-router-dom";

/**
 * React component displaying the Privacy Policy information.
 *
 * This component renders a static privacy policy section including legal information
 * about data collection, cookies, server log files, and user rights in compliance with GDPR.
 *
 * @returns {JSX.Element} A section containing the full privacy policy text and a navigation link.
 */
export default function PrivacyPolicy() {
  return (
    <section className={`${styles["main-content"]}`}>
      <Header />
      <div className="pad-main">
      <div className={styles["shadow-separator"]}></div>
        <h2 className="sub-header-font">Erklärung zur Informationspflicht</h2>

        <h2 className="sub-header-font-small">Datenschutzerklärung</h2>

        <p className="main-txt-font">
          In folgender Datenschutzerklärung informieren wir Sie über die
          wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite.
          Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage
          der gesetzlichen Bestimmungen (Datenschutzgrundverordnung,
          Telekommunikationsgesetz 2003).
        </p>

        <p className="main-txt-font">
          Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese
          besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der
          Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein
          berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
        </p>

        <h2 className="sub-header-font-small">Kontakt mit uns</h2>

        <p className="main-txt-font">
          Wenn Sie uns, entweder über unser Kontaktformular auf unserer
          Webseite, oder per E-Mail kontaktieren, dann werden die von Ihnen an
          uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den
          Fall von weiteren Anschlussfragen für sechs Monate bei uns
          gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe
          Ihrer übermittelten Daten.
        </p>

        <h2 className="sub-header-font-small">Cookies</h2>

        <p className="main-txt-font">
          Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um
          kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
          abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies
          dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies
          bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie
          ermöglichen es uns, Ihren Browser beim nächsten Besuch
          wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren
          Browser so einrichten, dass er Sie über das Setzen von Cookies
          informiert und Sie dies nur im Einzelfall erlauben. Bei der
          Deaktivierung von Cookies kann die Funktionalität unserer Website
          eingeschränkt sein.
        </p>

        <h2 className="sub-header-font-small">Server Log Files</h2>

        <p className="main-txt-font">
          Diese Webseite und der damit verbundene Provider erhebt im Zuge der
          Webseitennutzung automatisch Informationen im Rahmen sogenannter
          „Server-Log Files“. Dies betrifft insbesondere:
        </p>

        <p className="main-txt-font">
          IP-Adresse oder Hostname <br />
          den verwendeten Browser <br />
          Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit <br />
          aufgerufene Seiten der Webseite <br />
          Spracheinstellungen und Betriebssystem <br />
          'Leaving page' (auf welcher URL hat der Benutzer die Webseite
          verlassen) <br />
          ISP (Internet Service Provider)
        </p>

        <p className="main-txt-font">
          Diese erhobenen Informationen werden nicht personenbezogen verarbeitet
          oder mit personenbezogenen Daten in Verbindung gebracht.
        </p>

        <p className="main-txt-font">
          Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden
          rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu
          überprüfen.
        </p>

        <h2 className="sub-header-font-small">Ihre Rechte als Betroffener</h2>

        <p className="main-txt-font">
          Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns
          gespeichert sind grundsätzlich ein Recht auf:
        </p>

        <p className="main-txt-font">
          Auskunft <br />
          Löschung der Daten <br />
          Berichtigung der Daten <br />
          Übertragbarkeit der Daten <br />
          Widerruf und Widerspruch zur Datenverarbeitung <br />
          Einschränkung
        </p>

        <p className="main-txt-font">
          Sie erreichen uns unter folgenden Kontaktdaten:
        </p>

        <p className="main-txt-font">
          Webseitenbetreiber: Joachim Pürcher <br />
          Telefonnummer: <a href="tel:00436767704199">+43 676 770 41 99</a>{" "}
          <br />
          Email:{" "}
          <a className="main-txt-font" href="mail:contact@PuercherJoachim.com">
            {" "}
            contact@PuercherJoachim.com
          </a>
        </p>

        <p className="main-txt-font">
          Quelle Datenschutzgenerator Österreich DSGVO
        </p>
        <Link className={`${styles["back-link"]} link-font`} to="/">
          Zurück
        </Link>
      </div>
    </section>
  );
}
