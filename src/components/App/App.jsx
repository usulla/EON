import React, { Component } from 'react';
import FirstPage from '../FirstPage/FirstPage.jsx';
import Test from '../Test/Test.jsx';

class App extends Component {
    render() {
        return (
        <div>
          <FirstPage/>
          <Test/>
        </div>
        );
    }
}

export default App;