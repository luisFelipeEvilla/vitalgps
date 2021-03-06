import React from 'react'
import { Link } from "react-router-dom";
import './header.css'

import logo from '../../assets/logo/logo.png';

const Header = () => (
    <nav id="header" className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo"  className='brand-logo'/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">Sobre nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact">Contactanos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" tabIndex="-1" aria-disabled="true">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header