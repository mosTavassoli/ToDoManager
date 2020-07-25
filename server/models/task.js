class Task {
  constructor(
    id,
    description,
    important,
    privateTask,
    deadline,
    project,
    completed = false// this is another way to define default value in ES6
  ) {
    if (id) this.id = id;

    this.description = description;
    this.important = important;
    this.privateTask = privateTask;

    if (deadline) this.deadline = deadline;
    if (project) this.project = project;

    this.completed = completed // "|| false" can be added here in order to define default velue
  }
}

module.exports = Task;
