import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const onResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const { width, height } = dimensions;

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

// class Dimensions extends Component {
//   state = {
//     width: null,
//     height: null,
//   };

//   componentDidMount() {
//     window.addEventListener('resize', this.onResize);

//     const { innerWidth, innerHeight } = window;

//     this.setDimensions(innerWidth, innerHeight);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize);
//   }

//   onResize = (e) => {
//     const { innerWidth, innerHeight } = e.target;

//     this.setDimensions(innerWidth, innerHeight);
//   };

//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });

//     document.title = `${innerWidth} x ${innerHeight} `;
//   };

//   render() {
//     return (
//       <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
//     );
//   }
// }

export default Dimensions;
