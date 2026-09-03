/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskApi.js";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);

    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = async (id, completed) => {
    const updatedTask = await updateTask(id, completed);

    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const removeTask = async (id) => {
    await deleteTask(id);

    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    removeTask,
  };
};