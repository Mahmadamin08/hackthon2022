import React from 'react';
import './Footer.css';
const Footer = () => {

    return (
        <footer className='footer'>
            <h1>Ministry of sports and cultural activities Government of India</h1>
            <ul className='footer-links'>
                <li><a href="#" >Home</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Events</a></li>
                <li><a href="#" >Contact</a></li>
            </ul>
            <p>&copy; Ministry of sports and cultural activities Government of India. {(new Date().getFullYear())} All Rights Reserved</p>
        </footer>
    )
};

export default Footer;
