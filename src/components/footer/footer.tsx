import MyLogo from "../../shared/components/my-logo/my-logo";
import styles from "./footer.module.scss";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className={`${styles["main-content"]} pad-main-header`}>
        <div className={`${styles["left"]} footer-contact-txt-font`}>
          <span>Joachim Pürcher</span>
          <br />
          <span>contact@puercherjoachim.com</span>
          <br />
          <span>Webentwickler</span>
          <br />
          <div>
            <img
              src="./src/assets/images/footer/pencil-underline_640_small.png"
              alt="Bleistift"
            />
          </div>
        </div>
        <div className={`${styles["middle"]}`}>
          <a className={`${styles["logo-wrapper"]}`} href="https://www.puercherjoachim.com" target="_blank">
            <MyLogo clrClass="logo-red" hvrColor="logo-hover-red" />
          </a>
          <nav>
            <Link className={`${styles['footer-link']} small-txt-font`} to="/imprint">Impressum</Link>
            <span> | </span>
            <Link className={`${styles['footer-link']} small-txt-font`} to="/privacy">Datenschutz</Link>
          </nav>
        </div>
        <div className={`${styles["right"]}`}>
          <img
            src="./src/assets/images/footer/kids-160168_1280.png"
            alt="kids logo"
          />
        </div>
      </section>
    </>
  );
}
