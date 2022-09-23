import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="products">Products</a>
                <a href="contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;