import React, { Component } from 'react';

class ProjectList extends Component {
    render() {
        const projects = this.props.projects;

        return (
            <div className="flex-col">
                {projects.map((project, index) => (
                    <article key={index}>
                        <a href={project.url}>
                            <div className="flex-row portfolio-container">
                                <div className="portfolio-img-box"><img alt={project.alt} src={project.img}/></div>
                                <div className="flex-col portfolio-text">
                                    <h4 className="portfolio-title" id={`portfolio-project-${index}`}>{project.title}</h4>
                                    <p className="portfolio-description">{project.description}</p>
                                    <ul>
                                        {project.topics.map((topic, index) => (
                                            <li key={index} className="project-category">{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        );
    }
}

export default ProjectList;
