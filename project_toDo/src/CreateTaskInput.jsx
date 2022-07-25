import React, { useState } from 'react';

const CreateTaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={inputValue.value}
        onChange={(ev) => setInputValue(ev.target.value)}
      />
      <button type="button" className="btn create-task__btn" onClick={() => addTask(inputValue)}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
