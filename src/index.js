import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.min.css';
import './index.css';
// import './js/app.js';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

$('#contact-form').submit(function(e) {
    const name = $('#input-name');
    const email = $('#input-email');
    const message = $('#input-message');
    if (!name.value || !email.value || !message.value) {
        alert('Missing Info!');
    } else {
        $.ajax({
            url: 'https://formspree.io/najens@gmail.com',
            method: 'POST',
            data: $('#contact-form').serialize(),
            dataType: 'json'
        });
        $(this).get(0).reset();
        alert('Message Sent!');
    }
    e.preventDefault();
});
