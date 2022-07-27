import React, { useState, useEffect } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import axios from 'axios';

const baseUrl = 'https://62dd5322ccdf9f7ec2c4e5f9.mockapi.io/api/v1/tasks';

// const items = [
//   { text: 'Buy milk', done: false, id: 1 },
//   { text: 'Pick up from the airport', done: false, id: 2 },
//   { text: 'Visit party', done: false, id: 3 },
//   { text: 'Visit doctor', done: true, id: 4 },
//   { text: 'Buy meat', done: true, id: 5 },
// ];

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  const getData = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log('use effect executed');
    getData();
  }, []);

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

  const deleteTask = (clickedDelete) => {
    // const filteredTasks = tasks.filter(
    //   // (taskToDelete) => taskToDelete.id !== clickedDelete.id,
    //   (taskToDelete) => {
    //     if (taskToDelete.id === clickedDelete.id) {
    //       return false;
    //     }
    //     return true;
    //   },
    // );
    // setTasks(filteredTasks);
    axios
      .delete(`${baseUrl}/${clickedDelete.id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.log(error));
  };
  console.log('task list rendered');

  return (
    <div className="todo-list">
      <CreateTaskInput addTask={addTask} />
      <ul className="list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
