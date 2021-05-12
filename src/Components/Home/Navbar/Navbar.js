import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [downBar, setDownbar] = useState(false);
    const Toggle = () =>{
        setDownbar(!downBar)
        // console.log(downBar)
        const w = document.querySelector('.nav-links');
        w.classList.toggle('open')       
    }
  
    return (
        <nav className='nav'>
            <h1 className='logo'></h1>
            <div  className='hamburger'  onClick={Toggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
               
                <li>
                    <Link to='about-me'>About Me</Link>
                </li>
                <li>
                    <Link to='projects'>Projects</Link>
                </li>
                <li>
                    <Link to='contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;