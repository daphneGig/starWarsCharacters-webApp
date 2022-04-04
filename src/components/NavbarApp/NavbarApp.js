import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import style from './NavbarApp.module.css';
import {NavLink as RouterLink} from "react-router-dom";

function NavbarApp (props) {
    const {starWarsLogo, navItems} = props;

    /* This function transforms every object of the array into an item of the navbar */
    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.appNavbarLink}>
                <RouterLink className={style.appNavbarLinkA} exact={item.exact} to={item.url}>
                    {item.text}
                </RouterLink>
            </NavItem>
        );
    });

    return (
        <Navbar collapseOnSelect expand="lg" className={style.appNavbar} variant="dark" >
            <Container>
                <Navbar.Brand>
                    <RouterLink to="/starWarsCharacters-webApp">
                        <img src={starWarsLogo} className="d-inline-block align-top app-logo" alt="Star Wars logo"/>
                    </RouterLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {itemList}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarApp;