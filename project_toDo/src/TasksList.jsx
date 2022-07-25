import React, { useState } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const items = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up from the airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const TasksList = () => {
  const [tasks, setTasks] = useState(items);

  const addTask = (text) => {
    const newTask = {
      text,
      done: false,
      id: Math.random(),
    };
    const newTasksList = tasks.concat(newTask);
    newTasksList.sort((a, b) => a.done - b.done);
    setTasks(newTasksList);
  };
  //   const sortedList = tasks.sort((a, b) => a.done - b.done);

  const toggleTask = (clickedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== clickedTask.id) {
        return task;
      }

      const newDone = !task.done;

      return {
        ...task,
        done: newDone,
      };
    });

    updatedTasks.sort((a, b) => a.done - b.done);

    setTasks(updatedTasks);
  };

  // 1. найти таску по айди
  // 2.поменять в стейт если дан = фолс поменять на тру

  return (
    <div className="todo-list">
      <CreateTaskInput addTask={addTask} />
      <ul className="list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
