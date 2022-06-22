import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('==> constructor');
  }
  componentDidMount() {
    console.log('==> componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('==> shouldComponentUpdate');
    return nextProps.number % 2;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('==> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('==> componentWillUnmount');
  }

  render() {
    console.log('==> render');
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
