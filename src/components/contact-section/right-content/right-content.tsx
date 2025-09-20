

import ContactForm from "../contact-form/contact-form";
import styles from "./right-content.module.scss";

/**
 * React component that renders the right side of the contact section.
 *
 * This component wraps the ContactForm component inside a styled section.
 * It applies padding, glass effect shadow, and border styles via CSS modules.
 *
 * @returns {JSX.Element} The styled section containing the contact form.
 */
export default function RightContactContent () {
    return (
        <section className={`${styles['main-content']} pad-txt-box std-glas-effect-shadow border-txt-box`}>

        <ContactForm />
            
        </section>
    );
}