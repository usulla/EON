import React from 'react';

const Taste = ({ title, description, index }) => {
    return (
        <div className={`taste taste${index + 1}`}>
            <div className='taste_description'>
                <div className='title'>{title}</div>
                <div className='text'>{description}</div>
            </div>
            <div className='bottle_image'>
                <img
                    src={require(`../../../images/About/bottle${index + 1}.png`)}
                    alt={title}
                />
            </div>
        </div>
    );
};

export default Taste;
