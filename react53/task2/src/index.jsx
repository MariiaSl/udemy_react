import React from 'react';
import ReactDom from 'react-dom/client';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
];

root.render(<UsersList users={users} />);
