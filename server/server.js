//import express
const express = require("express");
const Task_dao = require("./task_dao");
const morgan = require("morgan"); // logging middleware

//create application
const app = express();
const port = process.env.PORT || 3000;

// Set-up logging
app.use(morgan("tiny"));

// Process body content - for seting up parsing incoming JSON DATA - we have accessible as an OBJECT
app.use(express.json()); // Automatically parse incomming JSON to an OBJECT

// REST API endpoints

//GET /tasks
app.get("/tasks", (req, res) => {
  Task_dao.getTasks(req.query.filter)
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ msg: err }],
      });
    });
});

//GET /tasks/<taskId>
app.get("/tasks/:taskId", (req, res) => {
  Task_dao.getTask(req.params.taskId)
    .then((task) => {
      if (!task) {
        res.status(400).end();
      } else {
        res.json(task);
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ param: "Server", msg: err }],
      });
    });
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  if (!task) {
    res.status(400).end();
  } else {
    Task_dao.createTask(task)
      .then((id) => res.status(201).json({ id: id })) // 201 CREATED The request has been fulfilled and has resulted in one or more new resources being created. // source is https://httpstatuses.com/201
      .catch((err) =>
        res.status(500).json({
          errors: [{ param: "Server", msg: err }],
        })
      );
  }
});

//DELETE /tasks/<taskId>
app.delete("/tasks/:taskId", (req, res) => {
  Task_dao.deleteTask(req.params.taskId)
    .then((result) => res.status(204).end())
    .catch((err) =>
      res.status(500).json({
        errors: [{ param: "Server", msg: err }],
      })
    );
});

//PUT /tasks/<taskId>
app.put("/tasks/:taskId", (req, res) => {
  if (!req.body.id) {
    res.status(400).end();
  } else {
    const task = req.body;
    console.log(task);
    Task_dao.updateTask(req.params.taskId, task)
      .then((result) => res.status(200).end())
      .catch((err) =>
        res.status(500).json({
          errors: [{ param: "Server", msg: err }],
        })
      );
  }
});

app.listen(port, () => console.log(`Server is up on PORT ${port}`));
