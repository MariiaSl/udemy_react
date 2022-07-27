import React, { useState } from 'react';

const CreateTaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const clearInput = () => {
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
      />
      <button type="button" className="btn create-task__btn" onClick={() => clearInput()}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
