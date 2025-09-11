

import styles from "./left-content.module.scss";

export default function LeftContactContent () {
    return (
        <section className={`${styles['main-content']} pad-txt-box std-glas-effect-shadow border-txt-box`}>

        <h3 className={`${styles['header']} sub-header-font-small`}>Kontaktiert mich</h3>
        <p className={`${styles['text-box']} main-txt-font`}>Für fehlenden Inhalt, Anregungen, Ideen oder Wünsche bezüglich dieser Seite, kontaktiert mich bitte. Entweder per WhatsApp oder über das vorhanden Kontaktforumlar nebenbei.</p>
        <p className={`${styles['']}`}>Die Idee dieser Seite ist, alle Infos bezüglich dem Schuljahr und unserer Schule auf einer Seite zu haben. Kein lästiges Zettel suchen oder ständinges nachfragen mehr.</p>
        <p className={`${styles['']}`}>Alle Infos auf einen Blick, immer und überall, auch am Smartphone.</p>
        <div className={`${styles['logos-wrapper']} pad-txt-box`}></div>
            
        </section>
    );
}