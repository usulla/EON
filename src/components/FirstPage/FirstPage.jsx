import React, { Component } from 'react';
import logo_pesni from '../../images/FirstPage/pesni_logo.png';
import logo_eon from '../../images/FirstPage/eon-logo.png';
import bottles_eon from '../../images/FirstPage/bottles_eon.png';
import age_limit from '../../images/FirstPage/age_limit.png';
import style from './style.scss'

class FirstPage extends Component {
    render() {
        return (
        <div className='FirstPage'>
        <div className='FirstPage__center-block'>
        <div className='logo'>
			<img src={logo_pesni} />
        </div>

        <div className='bottles_line'>
        	<div className='bottles'>
       			 <img src={bottles_eon} alt='EON'/>
       		 </div>
       	</div>
        </div>
        </div>
        );
    }
}

export default FirstPage;