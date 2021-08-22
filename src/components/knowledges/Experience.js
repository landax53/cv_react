import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience-dev">
                <h3 className="mobileDisplay">Expériences Dév. Web</h3>
                <h3 className="computerDisplay">Expériences développement Web</h3>
                <div className="exp-1">
                    <h4>Apprentissage Javascript Full-Stack</h4>
                    <h5>Depuis Mai 2020</h5>
                    <p>Cours en ligne opensource (OpenClassrooms, FreeCodeCamp, Youtube)
                    Rencontres et prises de conseils auprès de développeurs séniors.</p>
                </div>

                <div className="exp-2">
                    <h4>Conception UI d'un logiciel SaaS </h4>
                    <h5>2020 - Avril 2021</h5>
                    <p>Chargé de projet côté client d'un logiciel de gestion de patrimoine génie civil et portuaire
                    en collaboration avec la société informatique NETISYS.
                    </p>  
                </div>
                
                <div className="exp-3">
                    <h4>BootCamp - The Hacking Project</h4>
                    <h5>Avril - Mai 2020</h5>
                    <p>Introduction au développement web (HTML/ CSS/ JS/ Git/ Bootstrap)</p>
                </div>

            </div>

            <div className="experience-btp">
                <h3 className="mobileDisplay">Expériences Ingé. BTP</h3>
                <h3 className="computerDisplay">Expériences Ingénieur BTP</h3>
                <div className="exp-1">
                    <h4>Chargé d'affaires - ACCOAST - Vannes</h4>
                    <h5>2020 - 2021</h5>
                    <p>Diagnostics structurel et préconisation de réparation d'ouvrages portuaires.</p>
                </div>
                <div className="exp-2">
                    <h4>Chargé d'études - VINCI Construction - Saint Nazaire</h4>
                    <h5>2018 - 2020</h5>
                    <p>Dimensionnement d'ouvrages de génie civil et portuaire et suivi d'exécution des chantiers.
                    </p>
                </div>
                <div className="exp-3">
                    <h4>Chargé d'études - INGEROP - Rennes</h4>
                    <h5>2016 - 2018</h5>
                    <p>Gestion des appels d'offres et de la conception d'ouvrages de génie civil et portuaire. </p>
                </div> 
            </div>

        </div>
        
        
    );
};

export default Experience;