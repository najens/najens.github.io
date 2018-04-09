import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                name: '',
                email: '',
                message: ''
            }
        };
    }

    handleChange(e) {
        e.preventDefault();
        let formValues = this.state.formValues;
        let name = e.target.name;
        let value = e.target.value;

        formValues[name] = value;

        this.setState({formValues})
    }

    render() {
        return (
            <section id="contact">
                <div className="container flex-col">
                    <header>
                        <h3 id="contact-heading">Contact</h3>
                        <div className="header-bar"></div>
                    </header>
                    <div className="flex-row full-width">
                        <form action="https://mailthis.to/kanimambo" method="POST" encType="mulitpart/form-data" className="full-width" id="contact-form">
                            <div className="form-group">
                                <label htmlFor="input-name">Name</label>
                                <input type="text" className="contact-input" id="input-name" placeholder="Name" name="name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-email">Email</label>
                                <input type="text" className="contact-input" id="input-email" placeholder="Email" name="email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-message">Message</label>
                                <textarea type="text" className="contact-input" id="input-message" rows="4" placeholder="Your message" name="message" value={this.state.formValues["message"]} onChange={this.handleChange.bind(this)} required/>
                            </div>
                            <input type="hidden" name="_subject" value="Portfolio Contact"/>
                            <input type="hidden" name="_honeypot" value=""/>
                            <input type="submit" className="submit-btn" value="SEND"/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
