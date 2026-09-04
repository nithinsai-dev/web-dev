import prisma from "../config/prisma.js";
import redisClient from "../config/redis.js";

const ALL_TASKS_KEY = "tasks:all";

export const getAllTasks = async () => {
  // 1. Check Redis
  const cachedTasks = await redisClient.get(ALL_TASKS_KEY);

  if (cachedTasks) {
    console.log("Redis cache HIT - all tasks");

    return JSON.parse(cachedTasks);
  }

  console.log("Redis cache MISS - all tasks");

  // 2. Get from PostgreSQL through Prisma
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  // 3. Store in Redis
  await redisClient.set(
    ALL_TASKS_KEY,
    JSON.stringify(tasks),
    {
      EX: 60
    }
  );

  return tasks;
};


export const getTaskById = async (taskId) => {
  const key = `task:${taskId}`;

  // 1. Check Redis
  const cachedTask = await redisClient.get(key);

  if (cachedTask) {
    console.log(`Redis cache HIT - ${key}`);

    return JSON.parse(cachedTask);
  }

  console.log(`Redis cache MISS - ${key}`);

  // 2. PostgreSQL
  const task = await prisma.task.findUnique({
    where: {
      id: taskId
    }
  });

  if (!task) {
    return null;
  }

  // 3. Store individual task in Redis
  await redisClient.set(
    key,
    JSON.stringify(task),
    {
      EX: 60
    }
  );

  return task;
};


export const createTask = async (data) => {
  // Create in PostgreSQL
  const task = await prisma.task.create({
    data
  });

  // Invalidate all-tasks cache
  await redisClient.del(ALL_TASKS_KEY);

  return task;
};


export const updateTask = async (taskId, data) => {
  // Update PostgreSQL
  const task = await prisma.task.update({
    where: {
      id: taskId
    },
    data
  });

  // Invalidate individual task cache
  await redisClient.del(`task:${taskId}`);

  // Invalidate all tasks cache
  await redisClient.del(ALL_TASKS_KEY);

  return task;
};


export const deleteTask = async (taskId) => {
  // Delete from PostgreSQL
  await prisma.task.delete({
    where: {
      id: taskId
    }
  });

  // Invalidate both caches
  await redisClient.del(`task:${taskId}`);
  await redisClient.del(ALL_TASKS_KEY);
};