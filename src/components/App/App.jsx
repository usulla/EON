import React, { Component } from 'react';
import FirstPage from '../FirstPage/FirstPage.jsx';
import Test from '../Test/Test.jsx';
import About from '../About/About.jsx';
import dataAbout from '../About/About.json';
import FooterSocBtns from '../FooterSocBtns/FooterSocBtns.jsx';

class App extends Component {
    render() {
        return (
        <div>
          <FirstPage firstpage/>
          <Test/>
          <About dataAbout={dataAbout}/>
          <FooterSocBtns/>
        </div>
        );
    }
}

export default App;