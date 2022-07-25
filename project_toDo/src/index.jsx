import React from 'react';
import ReactDom from 'react-dom/client';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);
// const elem = <div> Hi!</div>;

root.render(<App />);
