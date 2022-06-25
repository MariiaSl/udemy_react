import React from 'react';
import ReactDom from 'react-dom/client';
import './index.scss';
import UserForm from './UserForm.jsx';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

root.render(<UserForm />);
