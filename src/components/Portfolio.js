import React, { Component } from 'react';
import ProjectList from './ProjectList';
import projects from '../data/projects';

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="container flex-col">
                    <header>
                        <h3 id="portfolio-heading">Portfolio</h3>
                        <div className="header-bar"></div>
                    </header>
                    <div className="flex-row">
                        <ProjectList projects={projects} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
