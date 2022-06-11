import React, { Component } from 'react';
import ReactDom from 'react-dom/client';
import '../src/index.css';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

// const SearchField = (props) => {
//   console.log(props);
//   return (
//     <div className="search">
//       <h1 className="search__title">{`Hello ${props.name}! What to search for you?`}</h1>
//       <div className="search__field">
//         <input className="search__input" type="text" />
//         <button className="search__button">Search</button>
//       </div>
//     </div>
//   );
// };

class SearchField extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="search">
        <h1 className="search__title">{`Hello ${this.props.name}! What to search for you?`}</h1>
        <div className="search__field">
          <input className="search__input" type="text" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}

root.render(<SearchField name="Vasya" age={30} />);
