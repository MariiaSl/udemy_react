import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/9919?v=4',
};

function App() {
  return (
    <Comment
      user={userInfo}
      text="Good job!"
      date={new Date('2019-06-12T11:35:27.819Z')}
    />
  );
}

export default App;
