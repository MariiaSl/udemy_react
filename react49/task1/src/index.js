import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

const Greeting = () => {
  const element = (
    <div class="search">
      <h1 class="search__title">Hello Mariia! What to search for you?</h1>
      <div class="search__field">
        <input class="search__input" type="text" />
        <button class="search__button">Search</button>
      </div>
    </div>
  );
  return element;
};
root.render(<Greeting />);
