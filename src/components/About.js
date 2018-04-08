import React, { Component } from 'react';
import me from '../img/me.jpeg';
import FeatureList from './FeatureList';
import features from '../data/features';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container flex-col">
                    <header>
                        <h3 id="about-heading">About</h3>
                        <div className="header-bar"></div>
                    </header>
                    <div className="flex me-wrap">
                        <img alt="Me" id="about-img-1" src={me}/>
                        <h4 className="label" id="about-sub-1">Me</h4>
                        <p id="about-text-1">{`I'm a Full Stack Software Engineer in Provo, UT. I am passionate about developing data driven apps with elegant and easy to use interfaces. Let's make something special.`}</p>
                    </div>
                    <FeatureList features={features} />
                </div>
            </section>
        );
    }
}

export default About;
