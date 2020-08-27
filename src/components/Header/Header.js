import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header-logo'>
                <img style={{height: '100px'}} src={logo} alt=""/>
            </div>

            <nav align="center">
                <a href="/home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/contact">Contact</a>
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;