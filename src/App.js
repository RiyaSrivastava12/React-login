import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        password: ""
      }
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <div className="pic">
        <h1><b>SIGN IN</b></h1>
      </div>
          
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">UserName</label>
              <input
                placeholder="Enter Username"
                type="text"
                name="username"  
              /> 
            </div> 
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter Password"
                type="password"
                name="password"
                noValidate 
              />
              
            </div>
            <div className="remember">
            
            <input type="checkbox" name="rem"/>
            <label htmlFor="remember">Remember Me</label>
            <a href="#">Forgot Password?</a>
            </div>
            <div className="login">
            
              <button type="submit">Login</button>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;