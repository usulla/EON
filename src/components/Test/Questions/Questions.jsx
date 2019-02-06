import React, { Component } from 'react';
import style from './style.scss'

class Questions extends Component {
    render() {
        return (
            <div className='Questions'>
              <div className='battery_btn btn1'></div>

            <div className='question_title'>
Перед выходом на сцену ты ловишь себя на мысли, что забыл слова песни!
Ты спокойно делаешь глоток E-ON ENERGY DRINK чтобы взбодриться и…
</div>
        <div className='answers'>

         <div className='answer overanswer error'>
         <div className='answer_num'>
         1.
         </div>
          <div className='answer_text'>
         Попрошу помочь ребят из команды,
вместе что-нибудь придумаем 
         </div>
         </div>

           <div className='answer overanswer true'>
         <div className='answer_num'>
         2.
         </div>
          <div className='answer_text'>
       Заряда энергии хватит, приступлю
к творчеству, ведь это шанс
показать себя и свои песни!
         </div>
         </div>
           <div className='answer overanswer null'>
         <div className='answer_num'>
         3.
         </div>
          <div className='answer_text'>
    Скажу, что у меня нет авторских
треков, я исполнитель, пусть
напишут мне песню – я исполню! 
         </div>
         </div>
        </div>
 <div className='panels_num_quesion'>

    <div className='panels_num_quesion__item current'>
    <span className='num_answer'>вопрос 1</span>
    </div>
    <div className='panels_num_quesion__item current'>
    <span className='num_answer'>вопрос 2</span>
    </div>
    <div className='panels_num_quesion__item current'>
    <span className='num_answer'>вопрос 3</span>
    </div>
    <div className='panels_num_quesion__item current'>
    <span className='num_answer'>вопрос 4</span>
    <span className='num_answer'>вопрос 5</span>
    </div>
 </div>
  </div>
        );
    }
}

export default Questions;