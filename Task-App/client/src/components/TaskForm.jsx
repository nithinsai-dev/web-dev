import { useState } from "react";

function TaskForm({ onAdd }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAdd({
      title,
      description
    });

    setTitle("");
    setDescription("");
  };


  return (
    <form onSubmit={handleSubmit}>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;