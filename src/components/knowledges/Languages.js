import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state= {
        languages: [
            {id: 1, value: "Javascript", xp: 1},
            {id: 2, value: "Css", xp: 1},
        ],

        frontend: [
            {id: 1, value: "Bootstrap", xp: 1},
            {id: 2, value: "React", xp: 0.5},
            {id: 3, value: "Sass", xp: 0.5},
        ],

        backend: [
            {id: 1, value: "Node", xp: 0.5},
            {id: 2, value: "Express", xp: 0.5},
            {id: 3, value: "MongoDB", xp: 0.5},
            
        ]
    }
    render() {

        let { languages, frontend, backend} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                languages = {languages}
                className = "languagesDisplay"
                title = "languages"
                />

                <ProgressBar 
                languages = {frontend}
                className = "frontendDisplay"
                title = "frontend"
                />

                <ProgressBar 
                languages = {backend}
                className = "backendDisplay"
                title = "backend"
                />

                
            </div>
        );
    }
}

export default Languages;