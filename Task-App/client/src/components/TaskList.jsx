import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {

  return (
    <div>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default TaskList;