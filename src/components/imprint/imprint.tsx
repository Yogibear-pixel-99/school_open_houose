import styles from "./imprint.module.scss";
import Header from "./../header/header";
import { Link } from "react-router-dom";

export default function Imprint() {
  return (
    <section id="imprint" className={`${styles["main-content"]}`}>
      <Header />
      <div className="pad-main">
        <h1 className="sub-header-font">Impressum</h1>

        <h2 className="sub-header-font-small">Angaben zum Diensteanbieter</h2>

        <p className="main-txt-font">
          Joachim Pürcher<br></br> Schöneringer Straße 12e<br></br> 4073
          Wilhering
        </p>

        <p className="main-txt-font">
          Tel.: <a href="tel:00436767704199">+43 676 770 41 99</a>
          <br></br>
          E-Mail:
          <a className="main-txt-font" href="mail:contact@PuercherJoachim.com">
            {" "}
            contact@PuercherJoachim.com
          </a>
        </p>

        <h2 className="sub-header-font-small">
          Haftung für den Inhalte dieser Seite
        </h2>

        <p className="main-txt-font">
          Wir sind stets bemüht, die Inhalte dieser Website aktuell und korrekt
          zu halten. Dennoch können wir keine Gewähr für die Vollständigkeit,
          Richtigkeit und Aktualität sämtlicher Inhalte übernehmen, insbesondere
          nicht für solche, die von Dritten stammen. Als Anbieter von Diensten
          sind wir nicht verpflichtet, übermittelte oder gespeicherte
          Informationen zu überwachen oder nach Hinweisen auf rechtswidrige
          Aktivitäten zu suchen. Verpflichtungen zur Entfernung oder Sperrung
          der Nutzung von Informationen gemäß den allgemeinen Gesetzen bleiben
          hiervon unberührt – auch wenn wir nicht für den Inhalt verantwortlich
          sind. Wenn Ihnen problematische oder rechtswidrige Inhalte auffallen,
          bitten wir Sie, uns rasch zu informieren. Die entsprechenden
          Kontaktdaten finden Sie im Impressum.
        </p>

        <h2 className="sub-header-font-small">
          Externe Links auf dieser Seite
        </h2>

        <p className="main-txt-font">
          Unsere Website enthält Verweise auf externe Internetseiten. Für deren
          Inhalte übernehmen wir keine Verantwortung. Eine Haftung kommt nicht
          in Betracht, da uns keine Hinweise auf rechtswidrige Inhalte vorlagen
          und auch keine solchen bekannt geworden sind. Sollte sich dies ändern,
          entfernen wir die entsprechenden Verlinkungen umgehend. Wenn Sie auf
          rechtswidrige Links stoßen, benachrichtigen Sie uns bitte. Die
          Kontaktdaten finden Sie im Impressum.
        </p>

        <h2 className="sub-header-font-small">Hinweis zum Urheberrecht</h2>

        <p className="main-txt-font">
          Einige Inhalte dieser Website (Texte, Bilder, etc.) unterliegen dem
          Urheberrecht. Bitte kontaktieren Sie uns, bevor Sie Inhalte
          weiterverbreiten, kopieren oder anderweitig nutzen – beispielsweise
          durch Veröffentlichung auf anderen Seiten. Bei unberechtigter Nutzung
          behalten wir uns rechtliche Schritte vor. Falls Sie Inhalte entdecken,
          die Urheberrechte verletzen, bitten wir um eine kurze Mitteilung.
        </p>

        <h2 className="sub-header-font-small">Zusätzliche Onlinepräsenzen</h2>
        <p className="main-txt-font">Dieses Impressum gilt ebenfalls für</p>

        <a
          className="main-txt-font"
          href="https://www.puercherjoachim.com/"
          target="_blank">
          https://www.puercherjoachim.com/
        </a>

        <p className="main-txt-font">
          Alle Inhalte sind urheberrechtlich geschützt.
        </p>
        <div>
          <Link className={`${styles["back-link"]} link-font`} to="/">
            Zurück
          </Link>
        </div>
      </div>
    </section>
  );
}
