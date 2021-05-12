import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
    return (
        <div className='header-content'>
            <div className='avatar'>
                <div className='avatar-img'></div>
            </div>
            <div className='header-detail'>
                <div className='detail'>
                    <h1 className='header-name'>Fariha Aktar</h1>
                    <div className='header-text'>
                        <h2 style={{ fontFamily: "'Shippori Mincho', serif" }}>Front End Developer</h2>
                        <p style={{ color: '#cdd0cb', fontFamily: "'Shippori Mincho', serif" }}>I am an enthusiastic self-driven individual who loves programming and wants to establish a career in this field. </p>
                    </div>
                    <div style={{ marginTop: 50 }}>
                        <a className='resume-btn' href="https://drive.google.com/uc?export=download&id=1dGv0vCzSjL5yCdD_iEopDjtRYd504l_k">Download Resume</a>
                    </div>

                </div>

                {/* <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a> */}


            </div>

        </div>
    );
};

export default Header;