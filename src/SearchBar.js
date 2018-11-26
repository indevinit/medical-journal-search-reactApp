import React, { Component } from 'react'
import './App.css'
import './index.css';
import { Button } from 'react-bootstrap';


const inputStyle ={
  
  width: '350px',
  height: '50px',
  textAlign:'center',
  margin:'auto',
  marginTop:'200px',
  paddingTop:'50px',
  boxShadow:'center',
  fontWeight:'bold',
  color:'darkgreen'
}


export default class SearchBar extends Component {
  render() {

    return (

      <div>
      <br/><br/><br/>
      <div style={inputStyle}>
      <h4> Find The Medical Journals | Type your keyword below e.g:Diabetes</h4>
      <input  type="text" onChange={this.props.inputHandler}></input>
      <br/>
      <Button onClick={this.props.buttonHandler} bsStyle="success">Search</Button>
      </div>
      </div>
    
    )
  }
}


