
import styles from "./contact-form.module.scss";


export default function ContactForm () {
const [name, setName] = '';
const [email, setEmail] = '';
const [school, setSchool] = '';
const [question, setQuestion] = '';


type contactForm = {
    name: string;
    email: string;
    school: string;
    question: string;
    privacyCheck: boolean;
}


    return (

        <form className={styles['main-content']} action="">
            <label htmlFor="fullname"> Name
                <input type="text" name="fullname" />
            </label>
            <label htmlFor="email">E-Mail Adresse 
                <input type="text" name="email" />
            </label>
            <label htmlFor="school"> Zu ergänzende Schule
                <input type="text" name="school" />
            </label>
            <label htmlFor="question">Andere Fragen oder Anregungen
                <input type="text" name="question" />
            </label>
            <label htmlFor="privacy"> Ich akzeptiere die <span><a href="#">Datenschutzerklärung</a>.</span>
                <input type="checkbox" name="privacy" />
            </label>
        </form>
    );
}