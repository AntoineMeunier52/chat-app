import React from 'react';
import './Contact.css';


const Contact = () => (
    <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/83.jpg"/>
        <div> 
            <p className="name">Teresa Brown</p>
            <div className="status">
                <div className="status-online"></div>
                <p className="status-text">online</p>
            </div>
        </div>
    </div>
);

export default Contact;