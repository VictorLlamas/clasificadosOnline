import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/navbar.css';
import Auth from '../Auth';
import Logout from './Logout';

class CustomNavBar extends Component{
    verifyIfItsAuth(){
        if(Auth.isAuthenticated()){
          return (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/myinfo">My Info</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/myads">My Ads</NavLink>
              </li>
              <li className="nav-item">
                <Logout/>
              </li>
            </ul>
          )
        }else{
          return(
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home 
                <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Sign-in</NavLink>
              </li>
            </ul>
          ) 
        }
      }
      
    render() {
        return (
        <header className="navbar navbar-expand-sm navbar-dark bg-dark flex-column flex-md-row bd-navbar sticky-top">
            <Link className="navbar-brand mb-0 h1" to="/">Clasificados Online</Link>
            <button className="navbar-toggler navbar-toggler-right" 
            type="button" data-toggle="collapse" 
            data-target="#navbarCollapse" aria-controls="navbarCollapse" 
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {this.verifyIfItsAuth()}
                </div>
            </div>
        </header>
        )
    }
}

export default CustomNavBar;
