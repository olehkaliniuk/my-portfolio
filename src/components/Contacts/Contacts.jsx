import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";
import "../../ i18n.js";
import { useTranslation } from "react-i18next";

function Contacts() {
    const { t } = useTranslation();
    const form = useRef();
    const contactsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (contactsRef.current) {
            observer.observe(contactsRef.current);
        }

        return () => {
            if (contactsRef.current) {
                observer.unobserve(contactsRef.current);
            }
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hg7qsrp', 'template_vli5gex', form.current, {
                publicKey: '6w8yuVG7mrmxJfcM2',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSent(true);
                    setTimeout(() => setIsSent(false), 3000); // Через 3 сек. возвращаем кнопку в исходное состояние
                    form.current.reset(); // Очистка формы
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
       <div ref={contactsRef} className={`contactscontainer ${isVisible ? 'visible' : ''}`}>
        <h2>{t("c1")}</h2>

        <div className='ccontainer'>
            <div className='contform'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>{t("c2")}</label>
                    <input className='cinput' type="text" name="user_name" required/>
                    <label>{t("c3")}</label>
                    <input className='cinput' type="email" name="user_email" required/>
                    <label>{t("c4")}</label>
                    <textarea className='cinput' name="message" required/>
                    <input 
                        className='cinput-btn' 
                        type="submit" 
                        value={isSent ? t("c7") : t("c5")}
                        disabled={isSent} 
                    />
                </form>
            </div>
            <div className='contdesc'> 
                <div>{t("c6")}</div>
                <div className='ccont'>oleg7778um89@gmail.com</div>
                <div className='ccont'>+49 179 221 5230</div>
            </div>
        </div>
       </div>
    );
}

export default Contacts;
