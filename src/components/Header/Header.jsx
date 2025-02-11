import React, { useState } from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import menu from "../../img/menu.png";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "de" : "en";
        i18n.changeLanguage(newLang);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navcontainer'>
            <div className="gradient-border" id="box">
                
                <ul>
                    <button className='menubtn' onClick={toggleMenu}> <img src={menu} alt="" /></button>
                    <li className={isMenuOpen ? "open" : "close"}><NavLink className="navl" onClick={toggleMenu} to="/home" >{t("Home")}</NavLink></li>
                    <li className={isMenuOpen ? "open" : "close"}><NavLink className="navl" onClick={toggleMenu} to="/projects" >{t("Projects")}</NavLink></li>
                    <li className={isMenuOpen ? "open" : "close"}><NavLink className="navl" onClick={toggleMenu} to="/contacts" >{t("Contacts")}</NavLink></li>
                    <li className={isMenuOpen ? "open" : "close"}><button className="languagebtn"  onClick={toggleLanguage}>{t("button")}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
