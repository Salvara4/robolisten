import React, { Component } from 'react';

class BadRobot extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }
  StringLength(){

    var str = ''
    for (var i = 0; i <this.props.greeting.length; i++) {
if (i % 3 == 0){
  str +='b'
  }
  if (i % 3 == 1){
    str +='l'
    }
    if (i % 3 == 2){
      str +='a'
      }
}
return str
}

  render() {
    return (
      <div>
      <h1> Bad Robot</h1>
      <p> Malfunction buzz buzz {this.StringLength()}</p>
      </div>
    );
  }
}

export default BadRobot;
