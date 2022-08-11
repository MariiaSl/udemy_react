import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

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

  const updateData = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        const sortedByIdTasks = response.data.sort((a, b) => b.id - a.id);
        const sortedByDoneTasks = sortedByIdTasks.sort((a, b) => a.done - b.done);
        setTasks(sortedByDoneTasks);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log('use effect executed');
    updateData();
  }, []);

  // 1. по клику на Create отправить значение инпута на сервер
  // 2. запросить данные с сервера
  // 3. отрендерить на странице

  const addTask = (newTask) => {
    // const newTask = {
    //   text,
    //   done: false,
    //   id: Math.random(),
    // };
    // const newTasksList = tasks.concat(newTask);
    // newTasksList.sort((a, b) => a.done - b.done);
    // setTasks(newTasksList);
    axios
      .post(baseUrl, {
        text: newTask,
        done: false,
      })
      // .then((response) => {
      //   setTasks([response.data, ...tasks]);
      // })
      // как лучше?
      .then(() => {
        updateData();
      })
      .catch((error) => console.log(error));
  };
  //   const sortedList = tasks.sort((a, b) => a.done - b.done);

  // Найти задачу по id
  // Обновить задачу по клику на галочку
  // Записать обновленную задачу на сервер
  // Вывести с сервера обновленный список

  const toggleTask = (clickedTask) => {
    // const updatedTasks = tasks.map((task) => {
    //   if (task.id !== clickedTask.id) {
    //     return task;
    //   }

    //   const newDone = !task.done;

    //   return {
    //     ...task,
    //     done: newDone,
    //   };
    // });

    // updatedTasks.sort((a, b) => a.done - b.done);
    // setTasks(updatedTasks);

    const taskToChange = tasks.find((task) => task.id === clickedTask.id);
    const { text, done, id } = taskToChange;
    // const updatedTask = {
    //   text,
    //   id,
    //   done: !done,
    // };
    axios
      .put(`${baseUrl}/${clickedTask.id}`, {
        text,
        id,
        done: !done,
      })
      .then(() => {
        updateData();
      })
      .catch((error) => console.log(error));
  };

  // 1. при нажатии на делит запуск таймера 3с, после - удаление айтема
  // найти по айди айтем для удаления, удалить на сервере,
  // перерендерить с сервера обновленный список
  // 2. при нажатии на делит рендер списка, но вместо пункта с нажатым id
  // - таймер отсчета и кнопка отменить
  // 3. при нажатии на кнопку отменить перерендерить тот же список, что и был.

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
        updateData();
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
