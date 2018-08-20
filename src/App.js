import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

// The component comes from react
// inside the component, we have the render method
class App extends Component {
  // You can add new methods to a component HERE
  constructor(props) {
    super(props);

    this.state = {
      title: 'App Title'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: 'New App Title!'
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
        <MyComponent
          title="This is the component Title"
          name="Cristina"
          onClick={this.onClick}
          />
      </div>
    );
  }
}

export default App;
