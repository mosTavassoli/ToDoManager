"use strict";

const Task = require("./task");
const db = require("./db");
const moment = require("moment");

/**
 * Function to create a Task object from a row of the tasks table
 * @param {*} row a row of the tasks table
 */
const createTask = function (row) {
  const importantTask = row.important === 1 ? true : false;
  const privateTask = row.private === 1 ? true : false;
  const completedTask = row.completed === 1 ? true : false;
  return new Task(
    row.id,
    row.description,
    importantTask,
    privateTask,
    moment(row.deadline),
    row.project,
    completedTask
  );
};

/**
 * Get tasks and optionally filter them
 */
exports.getTasks = function (filter) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM tasks";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        let tasks = rows.map((row) => createTask(row));
        if (filter) {
          switch (filter) {
            case "important":
              tasks = tasks.filter((el) => {
                return el.important;
              });
              break;
            case "private":
              tasks = tasks.filter((el) => {
                return el.privateTask;
              });
              break;
            case "shared":
              tasks = tasks.filter((el) => {
                return !el.privateTask;
              });
              break;
            case "today":
              tasks = tasks.filter((el) => {
                if (el.deadline) return isToday(el.deadline);
                else return false;
              });
              break;
            case "week":
              tasks = tasks.filter((el) => {
                if (el.deadline) return isNextWeek(el.deadline);
                else return false;
              });
              break;
            default:
              //the specified filter is not valid
              tasks = [];
          }
        }
        resolve(tasks);
      }
    });
  });
};
