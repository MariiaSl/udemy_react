import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    // this.setBodyColor = this.setBodyColor.bind(this);
    // this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', () => {
      document.body.style = 'background-color: none';
    });
  }

  setBodyColor = (color) => {
    console.log('setBodyColor', color);
    document.body.style.backgroundColor = color;
  };

  // reset = () => {
  //   console.log('hi');
  //   document.body.style.backgroundColor = '#fff';
  // };

  render() {
    return (
      <div
        className="colors"
        // onClick={this.reset}
      >
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={(e) => {
            e.stopPropagation();
            this.setBodyColor(RED);
          }}
          // onClick={this.setBodyColor(RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={(e) => {
            e.stopPropagation();
            this.setBodyColor(GREEN);
          }}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={(e) => {
            e.stopPropagation();
            this.setBodyColor(BLUE);
          }}
        ></button>
      </div>
    );
  }
}

export default Colors;
