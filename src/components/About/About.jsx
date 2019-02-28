import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Taste from './Taste/Taste.jsx';
import logo_eon from '../../images/About/eon_logo.png';
import bottle1 from '../../images/About/bottle1.png';
import bottle2 from '../../images/About/bottle2.png';
import bottle3 from '../../images/About/bottle3.png';
import bottle4 from '../../images/About/bottle4.png';
import bottle5 from '../../images/About/bottle5.png';

const About = ({ description1, description2, tastes }) => {
    // const { description1, description2, tastes } = this.props.dataAbout;
    return (
        <div className='About'>
            <img className='logo_eon' src={logo_eon} alt='EON' />
            <div className='description'>
                <p>{description1}</p>
                <p>{description2}</p>
            </div>
            <div className='tastes'>
                {tastes.map((item, index) => {
                    return <Taste {...item} index={index} key={index}/>;
                })}
            </div>
        </div>
    );
};

About.propTypes = {
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string,
    tastes: PropTypes.array.isRequired
}

export default About;