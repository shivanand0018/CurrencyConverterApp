import React from 'react'
import './Footer.css';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <p style={{ fontWeight: 'bolder', padding: '10px' }}>&copy;Copyright</p>
            </div>
            <div style={{ fontSize: '30px', padding: '10px' }}>
                <FaTwitter />{'  '}
                <FaFacebook />{'  '}
                <FaInstagram />
            </div>
            <div></div>
        </div>
    )
}

export default Footer