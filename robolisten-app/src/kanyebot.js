import React, { Component } from 'react';

class Kanyebot extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }

  render() {
    return (
      <div>
      <h1> Good Robot</h1>
      <p> Ima let you finish...... but Beyonce is {this.props.greeting}</p>
      </div>
    );
  }
}

export default Kanyebot;
