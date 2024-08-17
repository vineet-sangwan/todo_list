import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useTodoContext } from "./Context/TodoListContext";

const TodoTask = () => {
  const {
    taskUpdate,
    handleRemove,
    handleCheckboxChange,
    handleDeleteAll,
    handleEdit,
  } = useTodoContext();
  return (
    <div className="flex-grow overflow-y-auto">
      {taskUpdate && taskUpdate.length > 0 ? (
        taskUpdate.map((task) => (
          <div
            key={task.id}
            className="bg-blue-50 p-4 rounded-lg shadow-md mb-4 flex justify-between items-center transition-transform transform hover:scale-105 hover:bg-blue-100"
          >
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                checked={task.checked || false}
                onChange={() => handleCheckboxChange(task.id)}
                className="w-[20px] h-[20px] accent-blue-600 cursor-pointer"
              />
              <p
                className={`text-lg text-blue-900 ${
                  task.checked ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Edit task"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                onClick={() => handleEdit(task.id)}
              >
                <CiEdit size={25} />
              </button>
              <button
                aria-label="Delete task"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                onClick={() => handleRemove(task.id)}
              >
                <AiOutlineDelete size={25} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
      {taskUpdate && taskUpdate.length > 0 && (
        <div className="flex justify-start mt-4">
          <button
            className="py-2 px-6 bg-red-500 hover:bg-red-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
            onClick={handleDeleteAll}
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoTask;
