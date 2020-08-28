import React from 'react';
import emailjs from 'emailjs-com';
import s from './FeedbackPage.module.css';


export default function FeedbackPage() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('sergr0058@gmail.com.', 'myself_email', e.target, 'user_zFOLE1HVXQAzX9dPVOAus')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.fieldBlock}>
                <form  className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input value='Sergei' type="text" name="user_name" />
                    <label>Email</label>
                    <input value='sergr-3@yandex.ru' type="email" name="user_email" />
                    <label>Message</label>
                    <div><textarea className={s.inputField} name="message" /></div>
                    <input lassName={s.button} type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}

