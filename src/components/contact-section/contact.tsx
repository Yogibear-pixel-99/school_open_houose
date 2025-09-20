import styles from "./contact.module.scss";
import LeftContactContent from "./left-content/left-content";
import RightContactContent from "./right-content/right-content";

/**
 * React component that renders the main contact section.
 *
 * This section is divided into two parts:
 * - Left side content rendered by the `LeftContactContent` component.
 * - Right side content rendered by the `RightContactContent` component.
 *
 * The section has an ID of "contactForm" for anchoring and uses CSS modules for styling.
 *
 * @returns {JSX.Element} The rendered contact main section with left and right content areas.
 */
export default function ContactMainSection() {
  return (
    <section id="contactForm" className={`${styles["main-content"]}`}>
      <div className={`${styles["wrapper-left"]} pad-main`}>
        <LeftContactContent />
      </div>
      <div className={`${styles["wrapper-right"]} pad-main`}>
        <RightContactContent />
      </div>
    </section>
  );
}
