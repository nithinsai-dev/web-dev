/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "./services/taskApi";


function App() {

  const [tasks, setTasks] = useState([]);


  const loadTasks = async () => {

    try {

      const data = await getTasks();

      setTasks(data);

    } catch (error) {

      console.error(error);
    }
  };


  useEffect(() => {
    loadTasks();
  }, []);


  const handleAddTask = async (task) => {

    const newTask = await createTask(task);

    setTasks((prev) => [
      newTask,
      ...prev
    ]);
  };


  const handleToggle = async (task) => {

    const updatedTask = await updateTask(
      task.id,
      {
        completed: !task.completed
      }
    );

    setTasks((prev) =>
      prev.map((item) =>
        item.id === updatedTask.id
          ? updatedTask
          : item
      )
    );
  };


  const handleDelete = async (id) => {

    await deleteTask(id);

    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };


  return (
    <div>

      <h1>Task App</h1>

      <TaskForm onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

    </div>
  );
}


export default App;