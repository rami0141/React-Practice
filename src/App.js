import React, { Component } from 'react';
import './App.css';

// The component comes from react
// inside the component, we have the render method
class App extends Component {
  // You can add new methods to a component HERE
  constructor(props) {
    super(props);

    this.state = {
      title: 'App title'
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick() {
    alert("yummy!");
  }
  onChange(event) {
    console.log(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(this.input.value);
  }

  render() {
    const food = [
      'pizza',
      'pie',
      'fried-chicken'
    ];

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <h3>
          {
            food.map(item => {
              return(
                <div key={item} onClick={this.onClick}>{item}</div>
              )
            })
          }
        </h3>
        <input onChange={this.onChange} />
        <form onSubmit={this.onSubmit}>
          <input ref={input => this.input = input} />
        </form>
      </div>
    );
  }
}

export default App;
