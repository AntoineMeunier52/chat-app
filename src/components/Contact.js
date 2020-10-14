import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';


const Contact = (props) => (
    <div className="Contact">
            <img className="avatar" src={props.imageSrc}/>
        <div> 
            <p className="name">{props.name}</p>
            <div className="status">
            <div className={props.statusInd ? 'status-online' : 'status-offline'}></div>
                <p className="status-text">{props.statusText}</p>
            </div>
        </div>
    </div>
);



Contact.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    statusInd: PropTypes.string.isRequired,
    statustext: PropTypes.string.isRequired,

  };
export default Contact;