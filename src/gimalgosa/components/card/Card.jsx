import React from 'react';
import './Card.css'; // Card.css 파일 import

const Card = ({ image, title, description, price }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>
        </div>
    );
};

export default Card;