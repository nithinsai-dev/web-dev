import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title is too long"),

  description: z
    .string()
    .max(1000, "Description is too long")
    .optional(),
});

export const updateTaskSchema = z.object({
  completed: z.boolean(),
});