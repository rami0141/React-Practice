import React, { Component } from 'react';

class MyComponent extends Component {
  // Good place to make AJAX requests, so that you can get data before the component Mounts
  componentWillMount() {
    console.log('WILL MOUNT');
  }

  componentDidMount(){
    console.log('DID MOUNT');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, this.state, nextProps, nextState);
  }

  render() {
    const { title, name, onClick } = this.props;

    return (
      <div className="component">
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click Me</div>
      </div>
    );
  }
}

export default MyComponent;
