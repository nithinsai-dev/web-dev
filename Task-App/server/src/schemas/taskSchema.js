import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title is too long"),

  description: z
    .string()
    .max(500, "Description is too long")
    .optional(),
});

export const updateTaskSchema = z.object({
  title : z.string().min(1).max(100).optinal(),
  description: z.string().min(1).max(500).optional(),
  completed : z.boolean().optional()
});
