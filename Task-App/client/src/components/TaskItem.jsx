function TaskItem({ task, onToggle, onDelete }) {

  return (
    <div>

      <h3>
        {task.title}
      </h3>

      <p>
        {task.description}
      </p>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => onToggle(task)}>
        Toggle
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>

    </div>
  );
}

export default TaskItem;