import React, { Component } from 'react';
import style from './style.scss'
import SocButton from '../../SocButtons/SocButtons.jsx';

class TestResult extends Component {
    render() {
        return (
        <div className='TestResult'>
             <div className='battery_btn btn1'></div>
             <div className='result_content'>
                <div className='result_title'>
                    Ты эксперт <span>шоу «ПЕСНИ»!</span>
                </div>
                  <div className='result_text'>
                  <p>Ты знаешь наизусть все треки любимых исполнителей
и с удовольствием их поешь, но только у себя дома и пока никто не видит. Возможно, ты больше любишь наблюдать со стороны,
но может быть в тебе скрыт большой талант и пришло время его проявить? Рискни, выплесни свою творческую энергию и сделай то, о чем давно мечтаешь, будь всегда на E-ON впереди!</p>
                </div>
                <div className='result_socbtns'>
                <SocButton link={'https://vk.com'} text={'Поделиться'} classlist={'soc-vk'} datasoc={'vk'} socicon={'fa fa-vk'}/>
                <SocButton link={'https://vk.com'} text={'Поделиться'} classlist={'soc-fb'} datasoc={'vk'} socicon={'fa fa-facebook'}/>
             </div>
             </div>
        </div>
        );
    }
}

export default TestResult;