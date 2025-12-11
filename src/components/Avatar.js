import React from 'react';
import './card.css';

function Avatar({ img, alt = "Profile photo" }) {
    return (
        <img
            className="circle-img"
            src={img}
            alt={alt}
        />
    );
}

export default Avatar;