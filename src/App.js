import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

// The component comes from react
// inside the component, we have the render method
// "?" "if" something is true or false ":" or "return" something.
class App extends Component {
  // You can add new methods to a component HERE
  constructor(props) {
    super(props);

    this.state = {
      title: 'App Title',
      checked: true
    };

    // this.onClick = this.onClick.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  updateName(event) {
    this.setState({name: event.target.value });
  }

  onClick() {
    this.setState({
      name: 'New App Name!',
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
          <input
            onChange={this.updateName}
            value={this.state.name}
          />
          <input
            type="checkbox"
            onChange={this.updateName}
            checked={this.state.checked}
          />
      </div>
    );
  }
}

export default App;
