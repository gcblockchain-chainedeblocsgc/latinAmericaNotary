import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: ''
    }
    this.handleClick = this.handleClickImplementation.bind(this);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>ClickMe</button>
        <p>{this.state.username}</p>
      </div>
    );
  }
  handleClickImplementation() {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => {
        this.setState({ username: response.data.name });
        console.log(response);
      }
      );
  }
}

export default App;
