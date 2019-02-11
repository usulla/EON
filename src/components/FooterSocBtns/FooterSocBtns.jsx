import React, { Component } from 'react';
import style from './style.scss'

class FooterSocBtns extends Component {
    render() {
      return (
            <div className='FooterSocBtns'>
            	<a className='socbtn vk' href='/'  target="_blank">
            	<i className='fa fa-vk'/>
                </a>
          		<a className='socbtn fb' href='/'  target="_blank"><i className='fa fa-facebook'/>
          		</a>
          		<a className='socbtn insta' href='/'  target="_blank">
            <i className='fa fa-instagram'/>
            	</a>
  			</div>
        );
    }
}

export default FooterSocBtns;