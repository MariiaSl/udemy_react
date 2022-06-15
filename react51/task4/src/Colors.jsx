import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  // reset = () => {
  //   document.body.style.backgroundColor = '#fff';
  // };

  constructor(props) {
    super(props);
    // this.setBodyColor = this.setBodyColor.bind(this);
    // this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div
        className="colors"
        // onClick={this.reset.bind(this, '#fff')}
      >
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this, RED)}
          // onClick={this.setBodyColor(RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
