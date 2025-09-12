

import ContactForm from "../contact-form/contact-form";
import styles from "./right-content.module.scss";

export default function RightContactContent () {
    return (
        <section className={`${styles['main-content']} pad-txt-box std-glas-effect-shadow border-txt-box`}>

        <ContactForm />
            
        </section>
    );
}