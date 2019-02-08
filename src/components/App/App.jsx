import React, { Component } from 'react';
import FirstPage from '../FirstPage/FirstPage.jsx';
import Test from '../Test/Test.jsx';
import About from '../About/About.jsx';

class App extends Component {
    render() {
        return (
        <div>
          <FirstPage/>
          <Test/>
          <About/>
        </div>
        );
    }
}

export default App;