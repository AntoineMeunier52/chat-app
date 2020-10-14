import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

const Contact = () => (
    <div>
        {users.map(item => (
            <div className="Contact"> 
                <img className="avatar" src={item.avatar}/>
                <div> 
                    <p className="name">{item.name}</p>
                    <div className="status">
                        <div className={item.statusInd ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{item.statusText}</p>
                    </div>
                </div>
            </div>  
        ))}
    </div>
);



Contact.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    statusInd: PropTypes.string.isRequired,
    statustext: PropTypes.string.isRequired,

  };
export default Contact;