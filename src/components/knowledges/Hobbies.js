import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-pencil-alt"></i>
                    <span>Dessin</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-robot"></i>
                    <span>Robotique</span>
                </li>
                <li className="hobby">
                    <i class="fab fa-bitcoin"></i>
                    <span>Crypto/Blockchain</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-landmark"></i>
                    <span>Histoire & Architecture</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;