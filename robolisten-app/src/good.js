import React, { Component } from 'react';

class GoodRobot extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }

  render() {
    return (
      <div>
      <h1> Good Robot</h1>
      <p> I hear you saying {this.props.greeting}</p>
      </div>
    );
  }
}

export default GoodRobot;
