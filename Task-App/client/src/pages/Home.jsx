import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import { useTasks } from "../hooks/useTasks";

const Home = () => {
  const {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    removeTask,
  } = useTasks();

  return (
    <div>
      <h1>Task Board</h1>

      <TaskForm onAdd={addTask} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && (
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={removeTask}
        />
      )}
    </div>
  );
};

export default Home;