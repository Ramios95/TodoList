function Task(
  id,
  title,
  description,
  completed,
  duedate,
  createdAt,
  updatedAt
) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.completed = completed;
  this.duedate = duedate;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
}

module.exports = Task;
