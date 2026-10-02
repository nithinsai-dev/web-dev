import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

type Filter = "all" | "active" | "done";

function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn TypeScript", done: false },
    { id: 2, title: "Build task list", done: false },
    { id: 3, title: "Learn TanStack", done: false },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  function toggleDone(id: number) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), title: newTitle, done: false }]);
    setNewTitle("");
  }

  const visibleTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="New task" />
        <button type="submit">Add</button>
      </form>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("done")}>Done</button>
      </div>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleDone(task.id)}
              style={{ textDecoration: task.done ? "line-through" : "none", cursor: "pointer" }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Route = createFileRoute("/tasks")({
  component: TasksPage,
});