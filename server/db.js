"use strict";

var sqlite = require("sqlite3").verbose();

const dbSource = "./db/tasks.db";

const db = new sqlite.Database(dbSource, (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  }
});
module.exports = db;
