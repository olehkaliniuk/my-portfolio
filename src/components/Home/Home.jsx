import React from 'react'
import "./Home.css"
import { TypeAnimation } from 'react-type-animation';

import "../../ i18n.js"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

function Home() {

    const { t , i18n} = useTranslation();


    return (
        <div className='homecontainer'>
            <h2>{t("h1")}</h2>
            <h1 className='animtext'>{t("h2")}<br />{t("h3")}</h1>
            <h4>
                <TypeAnimation className='runtext'
                key={i18n.language}
                    sequence={[
                        t("h4"),
                        1000,
                        t("h4"),
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "25px", display: 'inline-block', }}
                    repeat={Infinity}
                />
            </h4>

            <NavLink to="/projects" className='gradient-button'>{t("h5")}</NavLink>
        </div>
    )
}

export default Home
