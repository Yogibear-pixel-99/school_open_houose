import styles from "./section-separator.module.scss";

/**
 * A simple horizontal separator line used to visually divide sections of the page.
 *
 * @returns {JSX.Element} A div element styled as a separator line.
 */
export default function SectionSeparator() {
  return <div className={styles["separator"]}></div>;
}
