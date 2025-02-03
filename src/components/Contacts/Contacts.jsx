import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css"

import "../../ i18n.js"
import { useTranslation } from "react-i18next";

function Contacts() {

    const { t , i18n} = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hg7qsrp', 'template_vli5gex', form.current, {
                publicKey: '6w8yuVG7mrmxJfcM2',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
       <div className='contactscontainer'>

        <h2>{t("c1")}</h2>

        
        <div className='ccontainer'>
        
            <div className='contform'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>{t("c2")}</label>
                    <input className='cinput' type="text" name="user_name" required/>
                    <label>{t("c3")}</label>
                    <input className='cinput'  type="email" name="user_email" required/>
                    <label>{t("c4")}</label>
                    <textarea className='cinput'  name="message" required/>
                    <input className='cinput-btn' type="submit" value={t("c5")} />
                </form>
            </div>
            <div className='contdesc'> 
                <div>{t("c6")}</div>
                <div className='ccont'>oleg7778um89@gmail.com</div>
                <div className='ccont'>+49 179 221 5230</div>
            </div>
            
        </div>
        </div>
    )
}

export default Contacts
