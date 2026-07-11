import express from "express"
import dotenv from "dotenv"

dotenv.config();

import todoroutes from "./routes/todoroutes.js";

const app = express();

app.use(express.json);

app.use("/todos", todoroutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
