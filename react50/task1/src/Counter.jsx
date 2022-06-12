import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.start,
    };

    setInterval(() => {
      const { counter } = this.state;
      this.setState({
        counter: counter + 1,
      });
    }, props.interval);
  }

  render() {
    const { counter } = this.state;
    return <div className="counter">{counter}</div>;
  }
}

export default Counter;
