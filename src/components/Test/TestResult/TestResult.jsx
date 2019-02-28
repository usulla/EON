import React from 'react';
import style from './style.scss';
import SocButton from '../../SocButtons/SocButtons.jsx';
import testResult from './TestResult.json';

const TestResult = ({ testpoints }) => {
    const res = testResult.results;
    return (
        <div className='TestResult'>
            <div className={`battery_btn btn${testpoints}`} />
            <div className='result_content'>
                <div className='result_title'>
                    {res[Number(testpoints) - 1].title1}
                    <span>
                        &nbsp;
                        {res[Number(testpoints) - 1].title2}
                    </span>
                </div>
                <div className='result_text'>
                    <p>{res[Number(testpoints) - 1].text}</p>
                </div>
                <div className='result_socbtns'>
                    <SocButton
                        link={`https://vk.com/share.php?image=https%3A%2F%2Fe-on.tnt-online.ru%2Fimages%2Fvk_share2%2F${testpoints}.jpg&url=https%3A%2F%2Fe-on.tnt-online.ru%2F%3FtestVK%3D${testpoints}&title=%D0%9F%D1%80%D0%BE%D0%B9%D0%B4%D0%B8+%D1%82%D0%B5%D1%81%D1%82+%D0%B8+%D1%83%D0%B7%D0%BD%D0%B0%D0%B9%2C+%D0%BA%D0%B0%D0%BA+%D0%B4%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE+%D1%82%D1%8B+%D0%BF%D1%80%D0%BE%D0%B9%D0%B4%D0%B5%D1%88%D1%8C+%D0%B2+%D1%88%D0%BE%D1%83+%C2%AB%D0%9F%D0%95%D0%A1%D0%9D%D0%98%C2%BB%21`}
                        text={'Поделиться'}
                        classlist={'soc-vk'}
                        datasoc={'vk'}
                        socicon={'fa fa-vk'}
                    />
                    <SocButton
                        link={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fe-on.tnt-online.ru%2F%3FtestFB%3D${testpoints}&src=sdkpreparse`}
                        text={'Поделиться'}
                        classlist={'soc-fb'}
                        datasoc={'fb'}
                        socicon={'fa fa-facebook'}
                    />
                </div>
            </div>
        </div>
    );
};

export default TestResult;
