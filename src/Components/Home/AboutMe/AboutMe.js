import React from 'react';
import './AboutMe.css';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
    return (
        <div>
            {/* about me */}
            <div className="about-me">
                <h1 className='align'>About Me</h1>
                <Slide duration={2000} right>
                    <div>
                        <div className='header-line'></div>
                    </div>
                </Slide>
                <Slide duration={1000} bottom>
                    <div className='about-me-detail'>
                        <p> <strong>Hi, I am FARIHA AKTAR.</strong> I want to be a front-end developer. Though i have just  started in this field, I believe i have potentials and skills to start my career. I have done many personal projects that you can see in my project section in detail. As a junior front end developer, now my goal is to work in a team so i can share my skill set and also learn from my team members. </p>
                    </div>
                </Slide>

                {/* skill section */}
                <Slide duration={2000} bottom>
                    <div className='skills'>
                        <div className='skill'>
                            <div className='about-skill'>
                                <FontAwesomeIcon className='design-icon' icon={faLayerGroup} />
                                <h3 style={{ fontWeight: 500, }}>WEB DESIGN</h3>
                            </div>
                            <div className='line1'></div>
                        </div>
                        <div className='skill'>
                            <div className='about-skill'>
                                <FontAwesomeIcon className='react' icon={faReact} />
                                <h3 style={{ fontWeight: 500, }}>React</h3>
                            </div>
                            <div className='line2'></div>
                        </div>
                        <div className='skill'>
                            <div className='about-skill'>
                                <FontAwesomeIcon className='javascript' icon={faJsSquare} />
                                <h3 style={{ fontWeight: 500, }}>JavaScript</h3>
                            </div>
                            <div className='line3'></div>
                        </div>
                        <div className='skill'>
                            <div className='about-skill'>
                                <FontAwesomeIcon className='code' icon={faCode} />
                                <h3 style={{ fontWeight: 500, }}>HTML/CSS</h3>
                            </div>
                            <div className='line4'></div>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* Hire me button */}
            <Slide duration={2000} bottom>
                <div className='button-section'>
                    <a href="https://drive.google.com/uc?export=download&id=1dGv0vCzSjL5yCdD_iEopDjtRYd504l_k" className='button'>HIRE ME</a>
                </div>
            </Slide>

            {/* skill bar section */}
            <div style={{ marginTop: 90 }}>
                <h1 className='align'>Skills</h1>
                <Slide duration={2000} right>
                    <div>
                        <div className='skills-line'></div>
                    </div>
                </Slide>

                <div className='skills-bar-section'>

                    <Slide duration={1000} left>
                        <div className='bar-section'>
                            <p>HTML5</p>
                            <div className='bar'>
                                <div className='skill-bar html-bar'><h6 className='skill-bar-text'>90%</h6></div>
                            </div>
                        </div>
                    </Slide>

                    <Slide duration={2000} left>
                        <div className='bar-section'>
                            <p>CSS3</p>
                            <div className='bar'>
                                <div className='skill-bar css-bar'><h6 className='skill-bar-text'>80%</h6></div>
                            </div>
                        </div>
                    </Slide>

                    <Slide duration={3000} left>
                        <div className='bar-section'>
                            <p>React</p>
                            <div className='bar'>
                                <div className='skill-bar react-bar'><h6 className='skill-bar-text'>65%</h6></div>
                            </div>
                        </div>
                    </Slide>

                    <Slide duration={3500} left>
                        <div className='bar-section'>
                            <p>JavaScript</p>
                            <div className='bar'>
                                <div className='skill-bar js-bar'> <h6 className='skill-bar-text'>75%</h6></div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;