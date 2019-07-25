import React from 'react'
import { Navbar, Nav, NavItem, Form, FormControl, Button, Container } from 'react-bootstrap'

function Header(){
    return(
        <Container>
            <Navbar bg="dark" expand="lg" fixed='top'>
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
                <Form inline>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#login">Entrar</Nav.Link>
                    <Nav.Link href="#help">Ayuda</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
        
    )
}

export default Header