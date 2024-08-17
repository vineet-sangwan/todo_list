import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoListContext = createContext();

// Custom hook to use the TodoListContext
export const useTodoContext = () => useContext(TodoListContext);

// Function to get tasks from local storage
const getLocalStorage = () => {
  const storeItem = localStorage.getItem("list");
  return storeItem ? JSON.parse(storeItem) : [];
};

export const TodoProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [taskUpdate, setTaskUpdate] = useState(getLocalStorage());
  const [btnUpdate, setBtnUpdate] = useState(true);
  const [edit, setEdit] = useState(null);

  // Update local storage whenever taskUpdate changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(taskUpdate));
  }, [taskUpdate]);

  const handleUpdate = () => {
    if (task === "") {
      alert("Please fill in the task first.");
    } else if (!btnUpdate) {
      // Update existing task
      setTaskUpdate(
        taskUpdate.map((newEle) =>
          newEle.id === edit ? { ...newEle, title: task } : newEle
        )
      );
      setBtnUpdate(true);
      setTask("");
      setEdit(null);
    } else {
      // Add new task
      const allTask = { id: uuidv4(), title: task };
      setTaskUpdate([...taskUpdate, allTask]);
      setTask("");
    }
  };

  const handleRemove = (id) => {
    const filteredData = taskUpdate.filter((item) => item.id !== id);
    setTaskUpdate(filteredData);
  };

  const handleEdit = (id) => {
    const findItem = taskUpdate.find((ele) => id === ele.id);
    setTask(findItem.title);
    setBtnUpdate(false);
    setEdit(id);
  };

  const handleDeleteAll = () => {
    setTaskUpdate([]);
  };

  const handleCheckboxChange = (id) => {
    const updatedData = taskUpdate.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTaskUpdate(updatedData);
  };

  const allValue = {
    task,
    setTask,
    edit,
    setEdit,
    taskUpdate,
    setTaskUpdate,
    btnUpdate,
    setBtnUpdate,
    handleUpdate,
    handleRemove,
    handleCheckboxChange,
    handleDeleteAll,
    handleEdit,
  };

  return (
    <TodoListContext.Provider value={allValue}>
      {children}
    </TodoListContext.Provider>
  );
};
