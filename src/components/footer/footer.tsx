import MyLogo from "../../shared/components/my-logo/my-logo";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import pencil from "../../assets/images/footer/pencil-underline_640_small.png";
import kidsLogo from "../../assets/images/footer/kids-160168_1280_small.png";

/**
 * React component that renders the website footer.
 *
 * The footer includes contact information, links to legal pages (imprint and privacy),
 * a personal logo linking to the developer's website, and decorative imagery.
 * It also includes a responsive layout for desktop and mobile views.
 *
 * @returns {JSX.Element} The rendered footer section including contact info, logo, links, and images.
 */
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
          <span className={`${styles["my-mail"]}`}>
            <a href="mailto:contact@puercherjoachim.com">
              contact@puercherjoachim.com
            </a>
            <br />
          </span>
          <span>Webentwickler</span>
          <br></br>
          <span>
          <a href="tel:+436767704199">+43 676 770 41 99</a>
          </span>
          <br />
          <div>
            <img src={pencil} alt="Bleistift" />
          </div>
          <nav className={`${styles["mobile-imprint-policy"]}`}>
            <Link
              className={`${styles["footer-link"]} small-txt-font`}
              to="/imprint">
              Impressum
            </Link>
            <Link
              className={`${styles["footer-link"]} small-txt-font`}
              to="/privacy">
              Datenschutz
            </Link>
          </nav>
        </div>
        <div className={`${styles["middle"]}`}>
          <a
            className={`${styles["logo-wrapper"]}`}
            href="https://www.puercherjoachim.com"
            target="_blank">
            <MyLogo clrClass="logo-red" hvrColor="logo-hover-red" />
          </a>
          <nav className={`${styles["desktop-imprint-policy"]}`}>
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
