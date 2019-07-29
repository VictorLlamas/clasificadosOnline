import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CustomNavBar extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="sm" fixed='top'>
               <Navbar.Brand href="/"> Clasificados Online </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem className="fix-links-headers"> 
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem className="fix-links-headers">   
                            <Link to="/signin">Entrar</Link>
                        </NavItem>
                        <NavItem className="fix-links-headers"> 
                            <Link to="/about">About</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        )
    }
}

export default CustomNavBar