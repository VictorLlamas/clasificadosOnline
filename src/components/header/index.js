import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

function Header(){
    return(
        <Navbar collapseOnSelect bg="light" expand="sm" fixed='top'>
            <Navbar.Brand href="#home">Clasificados Online</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavItem> 
                        <Nav.Link href="#buy">Comprar</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#rent">Rentar</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#sell">Vender</Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            <Nav className="justify-content-end">
                <Nav.Link href="#login">Entrar</Nav.Link>
                <Nav.Link href="#help">Ayuda</Nav.Link>
            </Nav>
        </Navbar>
        
    )
}

export default Header