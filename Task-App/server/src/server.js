import "dotenv/config";

import express from "express";

import taskRoutes from "./routes/taskRoutes.js";

import redisClient from "./config/redis.js";

import { errorHandler } from "./middleware/errorHandler.js";


const app = express();

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());


// Routes
app.use("/api/tasks", taskRoutes);


// Error handler
app.use(errorHandler);


// Start server
const startServer = async () => {
  try {

    await redisClient.connect();

    console.log("Redis connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error("Failed to start server:", error);

    process.exit(1);
  }
};


startServer();