import React, { Component } from 'react';
import UserInput from './UserInput'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }
  }

  // componentDidMount() {
  //   axios({
  //     url: 'https://trackapi.nutritionix.com/v2/search/instant',
  //     method: 'POST',
  //     responseType: 'JSON',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-app-id": "b944f3bc",
  //       "x-app-key": "7d87ed834750e86fd47843d47937c909",
  //       "x-remote-user-id": "0"
  //     },
  //     data: {
  //       "query": this.state.userInput,
  //       "detailed": true,
  //       // "full_nutrients": {
  //       //   "269": {
  //       //     "lte": 5
  //       //   }
  //       // },
  //     }
  //   }).then((response) => {
  //     // let randomFood = Math.floor(Math.random() * 20);
  //     console.log(response.data.common);
      
  //     // this.setState({

  //     // });
  //   });
  // }

  render() {
    return (
      <div className="app">
        <h1>A Bitter Parent</h1>

        <UserInput userInput={this.state.userInput}/>

      </div>
    )
  }
}



  export default App;
