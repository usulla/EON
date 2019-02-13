import React, { Component } from 'react';
import style from './style.scss'
import SocButton from '../../SocButtons/SocButtons.jsx';

class TestResult extends Component {

    render() {
        return (
        <div className='TestResult'>
             <div className={`battery_btn btn${this.props.testpoints}`}></div>
             <div className='result_content'>
                <div className='result_title'>
                    {resultText[Number(this.props.testpoints)-1].title1}
                     <span>&nbsp;{resultText[Number(this.props.testpoints)-1].title2}</span>
                </div>
                  <div className='result_text'>
                  <p>{resultText[Number(this.props.testpoints)-1].text}</p>
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

const resultText = [
{title1:"Ты эксперт",
title2:"шоу «ПЕСНИ»!",
text:"Ты знаешь наизусть все треки любимых исполнителей и с удовольствием их поешь, но только у себя дома и пока никто не видит. Возможно, ты больше любишь наблюдать со стороны, но может быть в тебе скрыт большой талант и пришло время его проявить? Рискни, выплесни свою творческую энергию и сделай то, о чем давно мечтаешь, будь всегда на E-ON впереди!"
},
{title1:"Ты звезда",
title2:"кастингов!",
text:"Твое выступление на кастингах еще долго будут обсуждать в социальных сетях, а продюсеры точно тебя не забудут. Несмотря на то, что тебе не удалось попасть в команду, ты все равно получаешь свою долю признания и популярности. Энергии в тебе много, а сдаваться не в твоих правилах, поэтому соберись, зарядись энергией E-ON ENERGY DRINK и в следующем году докажи, что ты победитель!"},
{title1:"Ты один из",
title2:"лучших!",
text:"Тебе удается успешно пройти кастинги и своим обаянием влюбить в себя продюсеров. Многие соперники остались далеко позади, а в тебе еще достаточно энергии, чтобы в следующем году зажечь еще больше. Зарядись энергией E-ON ENERGY DRINK и докажи, что достоин стать победителем этого шоу!"},
{title1:"Ты финалист",
title2:"шоу «ПЕСНИ»!",
text:"Тебе не хватило шага до победы, но быть финалистом и стоять на сцене среди лучших исполнителей шоу – это круто! Ты дошел до финала шоу и это повод гордиться собой и не останавливаться на достигнутом, может попробовать прийти на кастинг вновь и стать Победителем? Зарядись энергией E-ON ENERGY DRINK и действуй!"},
{title1:"Ты победитель",
title2:"шоу «ПЕСНИ»!",
text:"Ты всегда на E-ON впереди! Твоя энергия и харизма сносят первые ряды в зрительном зале, а уровень твоего профессионализма не вызывает вопросов. В тебе столько уверенности, что ты легко можешь стать победителем шоу «ПЕСНИ» и мега-популярным артистом!"}
]

export default TestResult;