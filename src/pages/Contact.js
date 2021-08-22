import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
    return (
        <div className="contact">
                <Navigation />
                <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Laval</span>
                            </li>
                           
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="vincentlandais@live.com">
                                    <span className="clickInput" onClick={() => {
                                        alert('Email copié !')}}>
                                            vincentlandais@live.com
                                    </span>
                                </CopyToClipboard>
                            </li>
                            
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0648434345">
                                    <span className="clickInput" onClick={() => {
                                        alert('Téléphone copié !')}}>
                                            06 48 82 95 67
                                    </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/vincent-landais/" target="_blank" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/landax53" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://stackoverflow.com/users/13154794/vincent" target="_blank" rel="noopener noreferrer">
                                <h4>Stack Overflow</h4>
                                <i className="fab fa-stack-overflow"></i>
                            </a>
                            <a href="https://codepen.io/landax53" target="_blank" rel="noopener noreferrer">
                                <h4>CodePen</h4>
                                <i className="fab fa-codepen"></i>
                            </a>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default Contact;