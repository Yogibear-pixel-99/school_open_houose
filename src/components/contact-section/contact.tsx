import styles from "./contact.module.scss";
import LeftContactContent from "./left-content/left-content";
import RightContactContent from "./right-content/right-content";

export default function ContactMainSection() {
  return (
    <section className={`${styles["main-content"]}`}>
      <div className={`${styles['wrapper-left']} pad-main`}>
        <LeftContactContent />
      </div>
      <div className={`${styles['wrapper-right']} pad-main`}>
        <RightContactContent />
      </div>
    </section>
  );
}
