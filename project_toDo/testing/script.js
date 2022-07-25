const tasksList = [
  {
    text: 'Buy milk',
    done: false,
    id: 1,
  },
  {
    text: 'Pick up from the airport',
    done: false,
    id: 2,
  },
  {
    text: 'Visit party',
    done: false,
    id: 3,
  },
  {
    text: 'Visit doctor',
    done: true,
    id: 4,
  },
  {
    text: 'Buy meat',
    done: true,
    id: 5,
  },
];

console.log(tasksList);

const clickedTaskId = 3;

const updatedTasks = tasksList.map((task) => {
  if (task.id !== clickedTaskId) {
    return task;
  }
  return {
    ...task,
    done: true,
  };
});

console.log(updatedTasks);
