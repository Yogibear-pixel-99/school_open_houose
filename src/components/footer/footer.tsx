import MyLogo from "../../shared/components/my-logo/my-logo";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import pencil from "../../assets/images/footer/pencil-underline_640_small.png";
import kidsLogo from "../../assets/images/footer/kids-160168_1280.png";

export default function Footer() {
  return (
    <>
      <section className={`${styles["main-content"]} pad-main-header`}>
        <div className={`${styles["left"]} footer-contact-txt-font`}>
          <span>
            <a href="https://www.puercherjoachim.com" target="_blank">
              Joachim Pürcher
            </a>
          </span>
          <br />
          <span>
            <a href="mailto:contact@puercherjoachim.com">
              contact@puercherjoachim.com
            </a>
          </span>
          <br />
          <span>Webentwickler</span>
          <br />
          <div>
            <img src={pencil} alt="Bleistift" />
          </div>
        </div>
        <div className={`${styles["middle"]}`}>
          <a
            className={`${styles["logo-wrapper"]}`}
            href="https://www.puercherjoachim.com"
            target="_blank">
            <MyLogo clrClass="logo-red" hvrColor="logo-hover-red" />
          </a>
          <nav>
            <Link
              className={`${styles["footer-link"]} small-txt-font`}
              to="/imprint">
              Impressum
            </Link>
            <span> | </span>
            <Link
              className={`${styles["footer-link"]} small-txt-font`}
              to="/privacy">
              Datenschutz
            </Link>
          </nav>
        </div>
        <div className={`${styles["right"]}`}>
          <img src={kidsLogo} alt="kids logo" />
        </div>
      </section>
    </>
  );
}
