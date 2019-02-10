import React, { Component } from 'react';
import FirstPage from '../FirstPage/FirstPage.jsx';
import Test from '../Test/Test.jsx';
import About from '../About/About.jsx';
import FooterSocBtns from '../FooterSocBtns/FooterSocBtns.jsx';

class App extends Component {
    render() {
        return (
        <div>
          <FirstPage/>
          <Test/>
          <About/>
          <FooterSocBtns/>
        </div>
        );
    }
}

export default App;