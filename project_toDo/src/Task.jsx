import React, { useState } from 'react';
import classNames from 'classnames';
import CancelMessage from './CancelMessage';

const Task = ({
  task,
  toggleTask,
  deleteTask,
  // showCancel,
}) => {
  const [showMessage, setShowMessage] = useState(false);

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

  const isShowed = () => {
    setShowMessage(true);
    console.log(showMessage);
    console.log(task);
    // return {
    //   showMessage,
    //   task,
    // };
  };

  const deletingTimeout = () => {
    setTimeout(() => {
      deleteTask(task);
    }, 3000);
  };
  clearTimeout(deletingTimeout);

  const showCancel = () => {
    deletingTimeout();
    isShowed();
  };

  // const showCancel = () => {
  //   // deletingTimeout(); <--- работает
  //   // console.log(task.id);
  //   // const switchedItem = () => {
  //   //   if (task) {
  //   //     console.log(`1 ---> ${task}`);
  //   //     return <CancelMessage />;
  //   //     // return console.log('Hi!');
  //   //   }
  //   //   console.log(`2 ---> ${task}`);
  //   //   return <CancelMessage />;
  //   //   // return console.log('Hiiiiiiii!');
  //   // };
  //   // console.log(task);
  //   // // setChangedTask(switchedItem);
  //   // // console.log(switchedItem);
  // };
  // const showCancel = () => setshowMessage(true);
  // // return (
  // //   <div>
  // //     <input type="submit" value="Search" onClick={onClick} />
  // //     { showResults ? <Results /> : null }
  // //   </div>
  // // )
  // // }

  if (showMessage) {
    return <CancelMessage />;
  }

  return (
    <li className={listItemClasses}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onClick={() => toggleTask(task)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        type="button"
        onClick={() => {
          showCancel();
          // deletingTimeout();
          // setTimeout(() => {
          //   deleteTask(task);
          // }, 3000);
          // deleteTask(task)
        }}
      >
        +
      </button>
    </li>
  );
};

export default Task;

// 1. при нажатии на делит запуск таймера 3с, после - удаление айтема
// найти по айди айтем для удаления, удалить на сервере,
// перерендерить с сервера обновленный список
// 2. при нажатии на делит рендер списка, но вместо пункта с нажатым id
// - таймер отсчета и кнопка отменить
// 3. при нажатии на кнопку отменить перерендерить тот же список, что и был.
