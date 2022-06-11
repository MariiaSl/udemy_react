import React from 'react';
import ReactDom from 'react-dom/client';
// import { createRoot } from 'react-dom/client';

import './index.css';
const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

root.render(element);
