const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const tasks = require("./Routes/tasks");
const app = express();
app.use(express.json());

dotenv.config({ path: "./config.env" });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB);

const port = 3000;
app.use("/api/v1/tasks", tasks);

app.listen(port, console.log(`server is running on port ${port}...`));
