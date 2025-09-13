import MyLogo from "../../shared/components/my-logo/my-logo";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <section className={`${styles["main-content"]} pad-main-header`}>
        <div className={`${styles["left"]}`}>
          <span>Joachim Pürcher</span>
          <br />
          <span>contact@puercherjoachim.com</span>
          <br />
          <span>Web- Anwendungentwickler</span>
          <br />
          <div>
            <img
              src="../src/assets/images/footer/pencil-underline_640_small.png"
              alt="Bleistift"
            />
          </div>
        </div>
        <div className={`${styles["middle"]}`}>
          <div>
            <MyLogo clrClass="logo-red" hvrColor="logo-hover-red" />
          </div>
          <nav>
            <a href="#">Impressum</a>
            <span> | </span>
            <a href="#">Datenschutz</a>
          </nav>
        </div>
        <div className={`${styles["right"]} footer-contact-txt-font`}>
          <img
            src="../src/assets/images/footer/kids-160168_1280.png"
            alt="kids logo"
          />
        </div>
      </section>
    </>
  );
}
