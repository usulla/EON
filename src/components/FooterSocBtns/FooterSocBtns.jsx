import React, { Component } from 'react';
import style from './style.scss'

class FooterSocBtns extends Component {
    render() {
      return (
            <div className='FooterSocBtns'>
            	<div className='socbtn vk'><a href='/'><i className='fa fa-vk'/></a></div>
          		<div className='socbtn fb'><a href='/'><i className='fa fa-facebook'/></a></div>
            	<div className='socbtn insta'><a href='/'><i className='fa fa-instagram'/></a></div>
  			</div>
        );
    }
}

export default FooterSocBtns;