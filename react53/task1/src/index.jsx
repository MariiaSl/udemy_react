import React from 'react';
import ReactDom from 'react-dom/client';
import './index.scss';
import NumbersList from './NumbersList.jsx';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

const numbers = [1, 2, 3, 4, 5];

// const listElems = numbers.map((nun) => <li>{nun}</li>);

// const element = <ul>{listElems}</ul>;

root.render(<NumbersList numbers={numbers} />);
