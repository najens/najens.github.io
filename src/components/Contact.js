import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container flex-col">
                    <header>
                        <h3 id="contact-heading">Contact</h3>
                        <div className="header-bar"></div>
                    </header>
                    <div className="flex-row full-width">
                        <form className="full-width" id="contact-form">
                            <div className="form-group">
                                <label htmlFor="input-name">Name</label>
                                <input type="text" className="contact-input" id="input-name" placeholder="Name" name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-email">Email</label>
                                <input type="text" className="contact-input" id="input-email" placeholder="Email" name="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-message">Message</label>
                                <textarea type="text" className="contact-input" id="input-message" rows="4" placeholder="Your message" name="message"/>
                            </div>
                            <input type="submit" className="submit-btn" value="SEND"/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
