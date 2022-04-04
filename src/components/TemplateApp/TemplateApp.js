import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './TemplateApp.module.css';
import NavbarApp from "../NavbarApp/NavbarApp";
import FooterApp from "../FooterApp/FooterApp";

function TemplateApp (props) {
    const {children,
        navItems,
        starWarsLogo,
        unimibLogo,
        urlUnimib
    } = props;

    return (
        <div className={style.templateApp}>
            <NavbarApp navItems={navItems} starWarsLogo={starWarsLogo}/>
            <main>
                {children}
            </main>
            <FooterApp navItems={navItems} starWarsLogo={starWarsLogo} unimibLogo={unimibLogo} urlUnimib={urlUnimib}/>
        </div>
    );
}

export default TemplateApp;