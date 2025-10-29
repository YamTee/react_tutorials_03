import React, { Component } from "react";

class HoverCounterTwo extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <button onMouseOver={this.handleIncrement}>Hovered {count} times</button>
    );
  }
}

export default HoverCounterTwo;
