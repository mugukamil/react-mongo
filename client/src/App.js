import React, { Component } from 'react';
import CommentBox from './CommentBox';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className="App-header">
                <h1>Story Box</h1>
            </div>
            <div className="container">
                <CommentBox />
            </div>
        </div>
    );
  }
}

export default App;
