import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={100} />
    </div>
  );
}

export default App;
