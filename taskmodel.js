/* 
var Task = function (data) {
    this.data = data;
    }
    Task.prototype.changeTitle = function (title) {
        this.data.title = title;
        }
    Task.prototype.changeDescription = function (description) {
        this.data.description = description;
            }
    Task.prototype.changeDueDate = function (duedate) {
        this.data.duedate = duedate;
            }
    Task.prototype.changeCompleted = function (completed) {
        this.data.completed = completed;
            }
    Task.prototype.changeCreatedAt = function (createdAt) {
        this.data.createdAt = createdAt;
            }
    Task.prototype.changeUpdateAt = function (updatedAt) {
        this.data.updatedAt = updatedAt;
            } */
            function Task(id,title, description, completed, duedate,createdAt,updatedAt){
                this.id=id;
                this.title = title;
                this.description = description;
                this.completed = completed;
                this.duedate = duedate;
                this.createdAt = createdAt;
                this.updatedAt = updatedAt;
              }
              

module.exports = Task;