import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Result from './Result'
import axios from 'axios';
import './index.css';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '',
      result: [],
      error: '',
      errorVal: ""
    }
  }
  inputHandler = (e) => {
    this.setState({
      query: e.target.value,
    })
  }

  buttonHandler = (query) => {
    if (this.state.query === "") {
      this.setState({errorVal: "input is required field"})
    } else { 
    axios.get(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${this.state.query}&format=json`)
    .then((res) => {
      this.setState({result: res.data.resultList.result})
      this.setState({errorVal:""})
    })
  } 
  
  // clearHandler = (e) => {
  //   this.setState({
  //     query: "",
  //     result: ""
  //   })
  // }
    //   //see the data in console
    //   // console.log(res.data.resultList.result)
    //   // console.log(res);
    //   if (!query) {
    //     this.setState({error: res.data.errMsg})
    //   } else {
    //     this.setState({result: res.data.resultList.result 
    //   }
  //  !query ? this.setState({error: res.data.errMsg}) : this.setState({result: res.data.resultList.result})

    //   // see the data in react

    // if (this.state.query === "") {
    //   this.setState({errorVal: "this is required field"})
    // } else { 
    //   axios.get(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${this.state.query}&format=json`)
    //   .then(function (response) {
    //     // console.log(response);
    //     this.setState({result: response.data.resultList.result })
    //   })
    //   .catch(function (response) {
    //     this.setState({error: response.data.errMsg})
    //   })
    // }
    }
  
  render() {
    return (
    <div>
      <div className='body'></div>
        <div>
            <SearchBar buttonHandler={this.buttonHandler} inputHandler={this.inputHandler} clear={this.clearHandler}/>
            <br/>
            <br/>
            <br/>
            <Result result={this.state.result} error={this.state.error} errorVal={this.state.errorVal} />
        </div>
    </div>
    )
  }
}
