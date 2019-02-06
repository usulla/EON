import React, { Component } from 'react';
import style from './style.scss'
import TestStart from './TestStart/TestStart.jsx';
import Questions from './Questions/Questions.jsx';

class Test extends Component {
    render() {
        return (
         <div className='Test'>
               {/* <TestStart/>*/}
                <Questions/>
         </div>
        );
    }
}

export default Test;