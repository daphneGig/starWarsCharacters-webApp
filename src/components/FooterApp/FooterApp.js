import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './FooterApp.module.css';
import {NavLink as RouterLink, NavLink} from "react-router-dom";

function FooterApp (props) {
    const {navItems, starWarsLogo, unimibLogo, urlUnimib} = props;

    /* This function transforms every object of the array into an item for the secondary footer navigation */
    const itemList = navItems.map((item) => {
        return (
            <li key={item.url} className="nav-item mb-2">
                <NavLink exact={item.exact} to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        );
    });

    return (
        <footer className={style.appFooter}>
            <Container>
                <Row className="align-items-center text-center mt-5 pt-5 mb-5 mb-md-0">
                    <Col md={4} className="mb-4 mb-md-0">
                        <RouterLink to="/starWarsCharacters-webApp">
                            <img src={starWarsLogo} className="d-inline-block align-top app-logo" alt="Star Wars logo"/>
                        </RouterLink>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="mb-3">Explore Star Wars universe</h5>
                        <ul className={style.appFooterNav}>
                            {itemList}
                        </ul>
                    </Col>
                    <Col md={4}>
                        <a href={urlUnimib} target="blank">
                            <img src={unimibLogo} className="app-logo-unimib" alt="Unimib logo"/>
                        </a>
                    </Col>
                </Row>
                <Row className={style.appFooterCopyright}>
                    <Col className="text-center">
                        <p className="mb-0">Developed by Daphne Giganti</p>
                        <p className="mt-0">Course of "Tecnologie e Applicazioni dei Sistemi Distribuiti" 2021/2022, Università degli Studi Milano-Bicocca</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterApp;