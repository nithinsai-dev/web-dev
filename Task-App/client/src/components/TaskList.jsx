import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  onToggle,
  onDelete,
}) => {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

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
};

export default TaskList;