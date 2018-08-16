import React, { Component } from 'react';
import './App.css';

// The component comes from react
// inside the component, we have the render method
class App extends Component {
  // You can add new methods to a component HERE
  onClick() {
    alert("yummy!");
  }

  render() {
    const food = [
      'pizza',
      'pie',
      'fried-chicken'
    ];

    return (
      <div className="App">
        <h3>
          {
            food.map(item => {
              return(
                <div key={item} onClick={this.onClick}>{item}</div>
              )
            })
          }
        </h3>
      </div>
    );
  }
}

export default App;
