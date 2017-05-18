import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import GoodRobot from './good'
import BadRobot from './bad'
import Kanyebot from './kanyebot'
import GreetingInput from './greetinginput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: ''
    }
  }

  updateGreeting(greeting){
    this.setState({greeting: greeting})
  }

  render() {
    return (
      <div>
      <div>
      <Header greeting= {this.state.greeting}/>
      </div>
      <div>
      <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)}/>
      </div>
      <div> <GoodRobot greeting={this.state.greeting}/>
      </div>
      <div> <BadRobot greeting={this.state.greeting}/>
      </div>
      <div> <Kanyebot greeting={this.state.greeting}/>
      </div>
      </div>
    );
  }
}

export default App;
