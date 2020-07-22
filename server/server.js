//import express
const express = require("express");
const dao = require("./task_dao");
const morgan = require("morgan"); // logging middleware

//create application
const app = express();
const port = 3000;

// Set-up logging
app.use(morgan("tiny"));

// Process body content
app.use(express.json());

// REST API endpoints

//GET /tasks
app.get("/tasks", (req, res) => {
  dao
    .getTasks(req.query.filter)
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ msg: err }],
      });
    });
});

app.listen(port, () => console.log("Server ready"));
