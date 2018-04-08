import React, { Component } from 'react';
import logo from '../img/logo.png';
import SectionList from './SectionList';
import sections from '../data/sections';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {toggleOpen: false};
    }

    navClick = () => {
        this.setState(prevState => ({
            toggleOpen: !prevState.toggleOpen
        }));
    }

    render() {
        return (
            <nav className="nav-bar">
                <div className="nav-container flex-row">
                    <img alt="Logo" className="logo" src={logo}/>
                    <button onClick={this.navClick} className="nav-button" id="nav-btn">
                        <i className="material-icons">menu</i>
                    </button>
                </div>
                {this.state.toggleOpen ? <SectionList sections={sections} /> : null}
            </nav>
        );
    }
}

export default Navbar;
