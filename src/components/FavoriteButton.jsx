import React from 'react';

const FavoriteButton = ({ isFavorite, onToggle, className = '' }) => {
    return (
        <button
            className={`star-btn ${isFavorite ? 'active' : ''} ${className}`.trim()}
            onClick={(e) => {
                e.preventDefault();
                onToggle();
            }}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
            <i className={`bi ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}></i>
        </button>
    );
};

export default FavoriteButton;
