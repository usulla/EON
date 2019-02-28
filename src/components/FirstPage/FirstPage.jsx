import React from "react";
import logo_pesni from "../../images/FirstPage/pesni_logo.png";
import logo_eon from "../../images/FirstPage/eon-logo.png";
import bottles_eon from "../../images/FirstPage/bottles_eon.png";
import age_limit from "../../images/FirstPage/age_limit.png";
import style from "./style.scss";

const FirstPage = () => {
        return (
            <div className="FirstPage">
                <a
                    data-scroll
                    href="#id_for_scroll"
                    className="btn_for_scroll"
                />
                <div className="FirstPage__center-block">
                    <div className="FirstPage__toptext">
                        <div className="logo">
                            <img src={logo_pesni} />
                        </div>
                        <div className="titles">
                            <div className="only_desktop">
                                <div className="title1">
                                    Пройди тест и узнай, как далеко
                                    <br />
                                    ты пройдешь <span>в шоу «ПЕСНИ»</span>
                                </div>
                            </div>
                            <div className="only_mobile">
                                <div className="title1">
                                    Пройди тест и узнай,
                                    <br />
                                    как далеко ты пройдешь
                                    <br />
                                    <span>в шоу «ПЕСНИ»</span>
                                </div>
                            </div>
                            <div className="title2">
                                Будь всегда на <img src={logo_eon} /> впереди!
                            </div>
                        </div>
                    </div>
                    <div className="bottles_line" />
                    <a data-scroll href="#test" className="scroll-down"><i className="fas fa-angle-down"></i></a>
                </div>
                <div className="age_limit only_desktop">
                    <img src={age_limit} />
                    Энергетический напиток. Киви бласт. Джинжер краш.
                    <br />
                    Блэк пауэр. Цитрус панч. Алмонд раш.
                </div>
                <div className="age_limit only_mobile">
                    <img src={age_limit} />
                    Энергетический напиток. Киви бласт. Джинжер краш. Блэк
                    пауэр. Цитрус панч. Алмонд раш.
                </div>
            </div>
        );
}

export default FirstPage;
