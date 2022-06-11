import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

const style = {
  color: 'red',
  fomtWeight: '700',
};

const element = (
  <main Name="page">
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          value="anonymous"
        />
      </div>
      <div className="form-control">
        <label className="form-label" id="age" htmlFor="age">
          Age
        </label>
        <input className="form-input" type="number" value="17" name="age" />
        <span style={style}> Too young</span>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  </main>
);

root.render(element);
