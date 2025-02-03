import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

import "../../ i18n.js"
import { useTranslation } from "react-i18next";

function Header() {

    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "de" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <div className='navcontainer'>
            <div className="gradient-border" id="box">
                <ul>

                    <li><NavLink className="navl" to="/">{t("Home")}</NavLink></li>
                    <li><NavLink className="navl" to="/projects">{t("Projects")}</NavLink></li>
                    <li><NavLink className="navl" to="/contacts">{t("Contacts")}</NavLink></li>
                    <li><button className='languagebtn' onClick={toggleLanguage}>{t("button")}</button></li>
                </ul>
            </div>
        </div>

    )
}

export default Header
