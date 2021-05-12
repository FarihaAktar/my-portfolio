import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Slide from 'react-reveal/Slide';


const Contact = () => {

    const handleBlur = (e) => {
        let isTextValid = true;

        if (e.target.name === '_replyto') {
            const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            isTextValid = re.test(e.target.value);
            console.log(isTextValid)
            if (isTextValid === false) {
                alert("Enter a valid email!")
            }
        }
        if (e.target.name === 'phone') {
            const re = /^[0-9\-\+]{9,15}$/;
            isTextValid = re.test(e.target.value);
            console.log(isTextValid)
        }
    }

    return (
        <div className='contact-section'>
            <div className='contact'>
                <Slide duration={2000} left>
                    <div className='contact-info'>
                        <h3 className='contact-header'>Contact Info </h3>
                        <p className='contact-header'>farihaaktar258@gmail.com</p>
                        <div>
                            <a href="https://www.linkedin.com/feed"> <FontAwesomeIcon className='contact-icon' icon={faLinkedin} /></a>
                            <a href="https://github.com/Farihaakter"><FontAwesomeIcon className='contact-icon' icon={faGithubSquare} /></a>
                        </div>
                    </div>
                </Slide>

                <Slide duration={2000} right>
                    <div className='contact-form'>
                        <h2 className='get-in-touch'>Get In Touch</h2>
                        <form className='form' action="https://formspree.io/f/mwkaleqw" method="POST">
                            <input className='text' id="fname" type="text" name="name" placeholder='Your Name' required></input>
                            <br />
                            <br />
                            <input className='text' id="user-email" onBlur={handleBlur} type="email" name="_replyto" placeholder='Your Email' required></input>
                            <br />
                            <br />
                            <input className='text' id="user-phone" type="text" name="phone" placeholder='Phone Number' required></input>
                            <br />
                            <br />
                            <textarea className='text-msg' id="massage" type="text" name="massage" placeholder='Enter Massage' required></textarea>
                            <br />
                            <br />
                            <input className='submit-btn' type="submit" value="SEND"></input>
                        </form>
                    </div>

                </Slide>
            </div>

        </div>
    );
};

export default Contact;