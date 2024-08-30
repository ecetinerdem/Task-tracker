import EditTask from './EditTask';

const ToDo = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = (itemID) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => todo.id !== itemID)
    );
  };

  return (
    <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
      <div className="w-full flex justify-between">
        <p className="font-semibold text-xl">{task.proJectName}</p>
        <EditTask
          task={task}
          index={index}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-lg py-2">{task.taskDescription}</p>
        <button
          className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-3 mt-6 mb-l rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
