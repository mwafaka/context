import React, { Component } from "react";

import "./App.css";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    first: "John",
    last: "Doh",
    age: 30
  };

  ageHandler = () => {
    this.setState({ age: this.state.age + 1 });
  };

  randomNumber = () => {
    this.setState({ age: Math.ceil(Math.random() * 100) });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          ageHandler: this.ageHandler,
          randomNumber: this.randomNumber
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Person extends Component {
  state = {};
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {MyData => {
            return (
              <div className="container">
                <p>
                  {MyData.state.first} {MyData.state.last} is {MyData.state.age}{" "}
                  years old
                </p>
                <p>{MyData.state.number}</p>
                <button onClick={MyData.ageHandler}>Make him old</button>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

class Family extends Component {
  render() {
    return (
      <div>
        <Person />

        <MyContext.Consumer>
          {MyData => {
            return (
              <div className="container">
                <p>
                  {MyData.state.first} {MyData.state.last} is {MyData.state.age}{" "}
                  years old
                </p>
                <p>{MyData.+state.number}</p>
                <button onClick={MyData.randomNumber}>RandomNumber</button>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Family />
        </MyProvider>
      </div>
    );
  }
}

export default App;
