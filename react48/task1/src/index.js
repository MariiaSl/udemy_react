/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
  <>
    <h1>Search form</h1>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

ReactDom.render(element, rootElement);
