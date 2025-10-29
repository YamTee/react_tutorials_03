import React, { Component } from "react";

class ClickCounterTwo extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <button onClick={this.handleIncrement}>Clicked {count} times</button>
    );
  }
}

export default ClickCounterTwo;
