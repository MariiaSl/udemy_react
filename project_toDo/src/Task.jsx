import React from 'react';
import classNames from 'classnames';

const Task = ({ task, toggleTask }) => {
  const { done, text } = task;
  // v1
  //   const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  // let listItemClasses = 'list-item';

  // v2
  // if (task.done) {
  //   listItemClasses = 'list-item list-item_done';
  // }

  // v3

  const listItemClasses = classNames(
    'list-item',
    done && 'list-item_done',
    // { 'list-item_done': done },
  );

  return (
    <li className={listItemClasses}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onClick={() => toggleTask(task)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" type="button">
        +
      </button>
    </li>
  );
};

export default Task;
