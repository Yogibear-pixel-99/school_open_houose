import styles from "./hero-section.module.scss";
import Header from "../header/header";
import HeroText from "./text-content/text-content";
import SectionSeparator from "../../shared/components/section-separator/section-separator";

/**
 * React component for the Hero Section of the webpage.
 *
 * This component renders the page header and the main hero section layout,
 * including a decorative shadow separator and a nested component for hero text content.
 *
 * Typically used at the top of a landing or home page to introduce the user to the website's main purpose or message.
 *
 * @returns {JSX.Element} The rendered hero section including the header and text content.
 */
export default function HeroSection() {
  return (
    <div className={`${styles["main-content-wrapper"]}`}>
 
      <Header />
     
      <section className={`${styles["main-content"]} pad-main`}>
        <div className={styles["shadow-separator"]}></div>
        <HeroText />
      </section>
        <SectionSeparator />
    </div>
  );
}
