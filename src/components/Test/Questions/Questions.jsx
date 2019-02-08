import React, { Component } from 'react';
import style from './style.scss'
import dataQuestions from './Questions.json'

class Questions extends Component {
    constructor() {
        super();
        this.state = {
            currentQuestion: 0,
            questionsLength: dataQuestions.questions.length
        };
    }
    nextQuestion = () => {
       this.setState(prevState => {
         return {currentQuestion: this.state.currentQuestion !== this.state.questionsLength-1 ? prevState.currentQuestion + 1: 0}
      });
    if(this.state.currentQuestion !== this.state.questionsLength-1){
       document.querySelectorAll('.panels_num_quesion__item')[this.state.currentQuestion].classList.add('current');
   } else {
         document.querySelectorAll('.panels_num_quesion__item').forEach(item => {
           item.classList.remove('current');
         })
   }
    }

    render() {
        console.log(this.state.currentQuestion)
        return (
            <div className='Questions'>
              <div className='battery_btn btn1'></div>
            <div className='question_title'>
{dataQuestions.questions[this.state.currentQuestion].question}
</div>

<div className='answers'>
{dataQuestions.questions[this.state.currentQuestion].answers.map((item, index) => {
    return(
     <div className='answer overanswer' key={index} onClick={this.nextQuestion}>
     <div className='answer_content'>
         <div className='answer_num'>
            {index+1}.
         </div>
          <div className='answer_text'>
            {item}
         </div>
         </div>
     </div>
     )
})
}
    
        </div>
 <div className={`panels_num_quesion q${this.state.currentQuestion+1}`}>
    <div className='panels_num_quesion__item'>
    <span className='num_answer'>вопрос 1</span>
    </div>
    <div className='panels_num_quesion__item'>
    <span className='num_answer'>вопрос 2</span>
    </div>
    <div className='panels_num_quesion__item'>
    <span className='num_answer'>вопрос 3</span>
    </div>
    <div className='panels_num_quesion__item'>
    <span className='num_answer'>вопрос 4</span>
    <span className='num_answer'>вопрос 5</span>
    </div>
 </div>
  </div>
        );
    }
}

export default Questions;