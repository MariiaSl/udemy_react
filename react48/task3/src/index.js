import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  root.render(element);
};

renderSeconds(new Date());
setInterval(() => renderSeconds(new Date()), 1000);
