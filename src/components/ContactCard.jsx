import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

const fullName = (c) => `${c.first} ${c.last}`;

const ContactCard = ({ contact, toggleFavorite }) => {
  return (
    <div className="contact-row-wrapper">
      <button
        className={`star-btn ${contact.isFavorite ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(contact.id);
        }}
        title={contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <i className={`bi ${contact.isFavorite ? 'bi-star-fill' : 'bi-star'}`}></i>
      </button>
      <Link to={`/contact/${contact.id}`} className="contact-row">
        <Avatar contact={contact} />
        <div className="info">
          <div className="name">{fullName(contact)}</div>
          <div className="sub">{contact.email}</div>
        </div>
        <div className="row-actions">
          <button
            className="icon-btn"
            title="Email"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${contact.email}`;
            }}
          >
            <i className="bi bi-envelope"></i>
          </button>
          <button
            className="icon-btn"
            title="Call"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `tel:${contact.phone}`;
            }}
          >
            <i className="bi bi-telephone"></i>
          </button>
          <button
            className="icon-btn"
            title="More"
            onClick={(e) => e.preventDefault()}
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;