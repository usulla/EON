import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const TestStart = ({ updatetest = f => f }) => {
    return (
        <div className='TestStart'>
            <div className='title'>
                <span>
                    Пройди тест и узнай,
                    <br />
                </span>
                как далеко ты пройдешь
                <br />в шоу «ПЕСНИ»
            </div>
            <div
                className='battery_btn'
                onClick={() => {
                    updatetest(false, true, false);
                }}>
                Начать тест
            </div>
        </div>
    );
};

TestStart.propTypes = {
    updatetest: PropTypes.func.isRequired
};

export default TestStart;
