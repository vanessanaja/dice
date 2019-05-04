import React, { Component } from "react";
import "./Die.css";

class Die extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
        <i className={`Die fas fa-dice-${this.props.face} fa-6x`}></i>
    );
  }
}

export default Die;