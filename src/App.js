import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {

  state = {
    userName : 'ravi kumar'
  }

  handleNameChange =() => {
    this.setState({userName : "sunny kumar"})
  }

  handleUsername = (event) => {
    this.setState({userName : event.target.value})
  }


render(){

  const customStyle = {
    backgroundColor : 'orange',
    fontSize : '15px'
  }
  return (
    <div className="App">
      <h2>Some Components</h2>
     <UserInput changed={this.handleUsername} currentName={this.state.userName}/>
     <button style={customStyle} onClick={this.handleNameChange}>Change Name</button> 
    <UserOutput username="sanu kumar"/>
    <UserOutput username={this.state.userName}/>
    <UserOutput />
    </div>
  );
}
  
}

export default App;
