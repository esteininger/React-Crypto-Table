import React from 'react';
import logo from './logo.png';
import './Header.css';

const containerStyle = {
  fontSize: '40px'
}

const Header = () => {
    return (
        <div className="Header">
          <img src={logo} className="Header-logo"/>
        </div>
    )
}

export default Header;
