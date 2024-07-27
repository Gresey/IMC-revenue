import React from 'react';

const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f1f1f1',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        margin: '0',
        fontFamily: 'Arial, sans-serif'
    };

    const coffeeIconStyle = {
        fontSize: '1.2em',
        color: '#6f4f28'
    };

    return (
        <p style={footerStyle}>
            Made with 
            <span style={coffeeIconStyle}>☕</span> 
            by Syntax Sorcerer
        </p>
    );
};

export default Footer;
