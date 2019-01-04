import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Addtodo from './addtodo'
import Todolist from './todolist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Addtodo/>
        <Todolist/>
      </div>
    );
  }
}

export default App;
