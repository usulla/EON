import React, { Component } from 'react';
import style from './style.scss';
import logo_eon from '../../images/About/eon_logo.png';
import bottle1 from '../../images/About/bottle1.png';
import bottle2 from '../../images/About/bottle2.png';
import bottle3 from '../../images/About/bottle3.png';
import bottle4 from '../../images/About/bottle4.png';
import bottle5 from '../../images/About/bottle5.png';

class About extends Component {
    render() {
        const { description1, description2, tastes } = this.props.dataAbout;
        return (
            <div className='About'>
                <img className='logo_eon' src={logo_eon} alt='EON' />
                <div className='description'>
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
                <div className='tastes'>
                    {tastes.map((item, index) => {
                        return (
                            <div className={`taste taste${index + 1}`}>
                                <div className='taste_description'>
                                    <div className='title'>{item.title}</div>
                                    <div className='text'>
                                        {item.description}
                                    </div>
                                </div>
                                <div className='bottle_image'>
                                    <img
                                        src={require(`../../images/About/bottle${index +
                                            1}.png`)}
                                        alt='EON'
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default About;
