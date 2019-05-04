import React, { Component } from "react";

class Die extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
        <i className={`fas fa-dice-${this.props.face} fa-6x`}></i>
    );
  }
}

export default Die;