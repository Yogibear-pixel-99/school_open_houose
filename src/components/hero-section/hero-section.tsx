import styles from "./hero-section.module.scss";
import Header from "../header/header";
import HeroText from "./text-content/text-content";

export default function HeroSection() {
  return (
    <>
      <Header />
      <section className={`${styles["main-content"]} pad-main`}>
        <div className={styles["shadow-separator"]}></div>
        <HeroText />
      </section>
    </>
  );
}
