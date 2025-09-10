
import styles from "./school-infos.module.scss";

export default function SchoolInfos () {
    return (
        <section className={`${styles['main-content']} pad-main`}>
        <h1 className={`${styles['header']} header-font`}>Hier folgen nach der offiziellen Information alle Termine für das Schuljahr 2025/26.</h1>
    </section>
    );
}