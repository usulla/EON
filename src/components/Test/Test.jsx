import React, { Component } from 'react';
import style from './style.scss'
import TestStart from './TestStart/TestStart.jsx';
import Questions from './Questions/Questions.jsx';
import TestResult from './TestResult/TestResult.jsx';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            showTestStart: true,
            showQuestions: false,
            showTestResult: false
        };
    }
    updateShowTest = (showstart, showquestions, showresult) => {
        this.setState({ showTestStart: showstart, showQuestions: showquestions, showTestResult: showresult })
    }
    render() {
        const { showTestStart, showQuestions, showTestResult } = this.state;
        return (
            <div className='Test'>
             {showTestStart ? (
               	<TestStart updatetest={this.updateShowTest} />
               	): showQuestions ? (
               	<Questions/>
               	) : (
               	<TestResult/>
               	)
             }
         </div>
        );
    }
}

export default Test;