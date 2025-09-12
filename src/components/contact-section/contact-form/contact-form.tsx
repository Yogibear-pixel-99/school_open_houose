
import styles from "./contact-form.module.scss";
import { useState } from "react";

export default function ContactForm () {


type contactForm = {
    name: string;
    email: string;
    school: string;
    question: string;
    privacy: boolean;
}


const [contactData, setContactData] = useState<contactForm>({
    name: '',
    email: '',
    school: '',
    question: '',
    privacy: false
})


const changeNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {

    setContactData({...contactData, name: event.target.value});
    console.log(contactData);
}
const changeEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    setContactData({...contactData, email: event.target.value});
}
const changeSchoolValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({...contactData, school: event.target.value});

}
const changeQuestionValue = (event: React.ChangeEvent<HTMLInputElement>) => {
     setContactData({...contactData, question: event.target.value});

}
const changePrivacyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
     setContactData({...contactData, privacy: event.target.checked});

}


    return (
        <form className={styles['main-content']} action="">
            <label htmlFor="fullname"> Name
                <input type="text" name="fullname" value={contactData.name} onChange={changeNameValue}/>
            </label>
            <label htmlFor="email">E-Mail Adresse 
                <input type="text" name="email" value={contactData.email} onChange={changeEmailValue}/>
            </label>
            <label htmlFor="school"> Zu ergänzende Schule
                <input type="text" name="school" value={contactData.school} onChange={changeSchoolValue} />
            </label>
            <label htmlFor="question">Andere Fragen oder Anregungen
                <input type="text" name="question" value={contactData.question} onChange={changeQuestionValue}/>
            </label>
            <label htmlFor="privacy"> Ich akzeptiere die <span><a href="#">Datenschutzerklärung</a>.</span>
                <input type="checkbox" name="privacy" checked={contactData.privacy} onChange={changePrivacyValue}/>
            </label>
        </form>
    );
}