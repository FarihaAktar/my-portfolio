import React from 'react';
import './Projects.css';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projectOne from '../../../../image/project1.jpg';
import projectTwo from '../../../../image/projectTwo.jpg';
import projectThree from '../../../../image/project3.png';

const Projects = () => {
    return (
        <div className='projects-section'>
            <h1 className='align'>My Recent Projects</h1>
            <Slide duration={2000} right>
                <div>
                    <div className='projects-line'></div>
                </div>
            </Slide>

            {/* projects */}
            <div className='project-one'>
                <Slide duration={2000} right>
                    <div className='project-one-img-section'>
                        <div className='project-img'>
                            <img src={projectOne} alt="" />
                        </div>
                    </div>
                </Slide>
                <Slide duration={2000} left>
                    <div className='project-one-detail'>
                        <h2 className='splash-header'>Splash Photography Studio</h2>
                        <p>It's a service site website. It's one of my personal project that I have done.</p>
                        <p>React Js, React-Router-Dom, React-Hook-Form, CSS, Context API, MongoDB, Firebase Authentication system, JavaScript are used in this project. </p>
                        <div>
                            <h3>Website: <a className='website-link' href="https://splash-44b4f.web.app/">Live link</a></h3>
                            <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/splash-photography-studio"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* project two */}
            <div className='project-two'>
                <Slide duration={2000} right>
                    <div className='project-two-detail'>
                        <h2 className='shopaholic-header'>Shopaholic</h2>
                        <p><strong>SHOPAHOLIC</strong> is an E-Commerce website. clients can shop here. They can check their orders. This project also include google sign-in method.</p>
                        <p>Database CRUD operation, React js, JS, React-Router-Dom, Font-awesome, Firebase, mongoDB are used while making this project.</p>
                        <div>
                            <h3>Website: <a className='website-link' href="https://shopaholic-ae91f.web.app/">Live link</a></h3>
                            <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/shopaholic-shopping-site"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                        </div>
                    </div>
                </Slide>
                <Slide duration={2000} left>
                    <div className='project-one-img-section'>
                        <div className='project-img'>
                            <img src={projectTwo} alt="" />
                        </div>
                    </div>
                </Slide>
            </div>

            {/* project three */}
            <div className='project-three'>
                <Slide duration={2000} right>
                    <div className='project-one-img-section'>
                        <div className='project-img'>
                            <img src={projectThree} alt="" />
                        </div>
                    </div>
                </Slide>
                <Slide duration={2000} left>
                    <div className='project-one-detail'>
                        <h2 className='rescue-header'>Rescue Riders</h2>
                        <p>It's a riding service website similar to UBER. It's also responsive for mobile.</p>
                        <p>I made this project using react, javascript, customize css, google map. </p>
                        <div>
                            <h3>Website: <a className='website-link' href="https://eager-poitras-54f586.netlify.app">Live link</a></h3>
                            <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/rescue-riders"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                        </div>
                    </div>
                </Slide>
            </div>

        </div>
    );
};

export default Projects;