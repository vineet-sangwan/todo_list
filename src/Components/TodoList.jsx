import todo from "../assets/todo.png";
import TodoTask from "./TodoTask";
import { useTodoContext } from "./Context/TodoListContext";

const TodoList = () => {
  const { task, setTask, btnUpdate, handleUpdate } = useTodoContext();
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center h-auto lg:h-[100vh] bg-gradient-to-br from-amber-300 to-orange-400 p-6 lg:p-10">
        <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] mb-8 lg:mb-0">
          <img
            src={todo}
            alt="Todo Illustration"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="bg-white w-full sm:w-[400px] md:w-[450px] h-auto lg:h-[600px] flex flex-col p-6 sm:p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
              TodoList
            </h1>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 rounded-lg shadow-inner">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your Task"
                aria-label="Task input"
                className="border-2 border-blue-400 w-full sm:w-2/3 mb-4 sm:mb-0 rounded-md py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {btnUpdate ? (
                <button
                  aria-label="Add task"
                  className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out"
                  onClick={handleUpdate}
                >
                  Add
                </button>
              ) : (
                <button
                  aria-label="Add task"
                  className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              )}
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-300 mb-4"></div>
          {/* Todo items will be displayed here */}
          <TodoTask />
        </div>
      </section>
    </>
  );
};

export default TodoList;
