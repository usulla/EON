import React from 'react';
import PropTypes from 'prop-types';

const Taste = ({ title = 'Energy drink', description, index }) => {
    return (
        <div className={`taste taste${index + 1}`}>
            <div className='taste_description'>
                <div className='title'>{title}</div>
                <div className='text'>{description}</div>
            </div>
            <div className='bottle_image'>
                <img
                    src={require(`../../../images/About/bottle${index +
                        1}.png`)}
                    alt={title}
                />
            </div>
        </div>
    );
};
Taste.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    index: PropTypes.number
};
Taste.defaultProps = {
    description: 'Energy drink'
};

export default Taste;
