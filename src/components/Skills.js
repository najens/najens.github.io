import React, { Component } from 'react';
import SkillList from './SkillList';
import data from '../data/skills';

class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <div className="container flex-col">
                    <header>
                        <h3 id="skills-heading">Skills</h3>
                        <div className="header-bar"></div>
                    </header>
                    <SkillList skills={data.skills} labels={data.labels} />
                </div>
            </section>
        );
    }
}

export default Skills;
