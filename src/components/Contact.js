import React, { Component } from 'react';
import $ from 'jquery';

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

    handleSubmit(e) {
        if(!this.state.formValues.name || !this.state.formValues.email || !this.state.formValues.message) {
            alert('Missing Info!');
        } else {
            console.log(this.state.formValues);
            $.ajax({
                url: 'https://formspree.io/najens@gmail.com',
                method: 'POST',
                data: this.state.formValues,
                dataType: 'json'
            });
            let formValues = this.state.formValues;
            formValues['name'] = '';
            formValues['email'] = '';
            formValues['message'] = '';
            this.setState({formValues});
            alert('Message Sent!');
        }
        e.preventDefault();
        console.log(this.state.formValues);
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
                        <form onSubmit={this.handleSubmit.bind(this)} className="full-width" id="contact-form">
                            <div className="form-group">
                                <label htmlFor="input-name">Name</label>
                                <input type="text" className="contact-input" id="input-name" placeholder="Name" name="name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-email">Email</label>
                                <input type="text" className="contact-input" id="input-email" placeholder="Email" name="email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-message">Message</label>
                                <textarea type="text" className="contact-input" id="input-message" rows="4" placeholder="Your message" name="message" value={this.state.formValues["message"]} onChange={this.handleChange.bind(this)}/>
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
