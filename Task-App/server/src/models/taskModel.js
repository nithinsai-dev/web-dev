import pool from "../config/db.js";

export const getAllTasks = async () => {
  const result = await pool.query(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );

  return result.rows;
};

export const createTask = async (title, description) => {
  const result = await pool.query(
    `INSERT INTO tasks (title, description)
     VALUES ($1, $2)
     RETURNING *`,
    [title, description]
  );

  return result.rows[0];
};

export const updateTask = async (id, completed) => {
  const result = await pool.query(
    `UPDATE tasks
     SET completed = $1
     WHERE id = $2
     RETURNING *`,
    [completed, id]
  );

  return result.rows[0];
};

export const deleteTask = async (id) => {
  const result = await pool.query(
    `DELETE FROM tasks
     WHERE id = $1
     RETURNING *`,
    [id]
  );

  return result.rows[0];
};