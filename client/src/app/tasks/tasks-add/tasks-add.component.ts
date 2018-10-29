import { Component, OnInit } from "@angular/core";
import { Task } from "../task.model";
import { TaskService } from "../tasks-list/task.service";
import { TouchSequence } from "selenium-webdriver";

@Component({
    selector: "app-tasks-add",
    templateUrl: "./tasks-add.component.html",
    styleUrls: ["./tasks-add.component.css"]
})
export class TasksAddComponent implements OnInit {
    model = new Task("", "", false, "", "", "");

    constructor(private taskService: TaskService) {}
    task1: Task;
    onTaskAdd(event, id) {
        if (id == null) {
            var date1 = convertDate2(new Date());
            var date2 = convertDate2(new Date());
            let task: Task = new Task(
                this.model.title,
                this.model.description,
                false,
                this.model.duedate,
                date1,
                date2
            );
            this.taskService.addTask(task).subscribe(res => {
                this.taskService.onTaskAdded.emit(res);
            });
        } else {
            var date1 = convertDate2(new Date());
            let task: Task = new Task(
                this.model.title,
                this.model.description,
                this.model.completed,
                this.model.duedate,
                this.model.createdAt,
                date1
            );
            this.taskService.editTask(this.model.id, task).subscribe(res => {
                this.taskService.onTaskModified2.emit(res);
                this.model.id = null;
            });
        }
    }

    public currentDate = new Date();
    public currentDate2 =
        this.currentDate.getFullYear() +
        "-" +
        (this.currentDate.getMonth() + 1) +
        "-" +
        this.currentDate.getDate();

    ngOnInit() {
        this.taskService.onTaskModified.subscribe((task: Task) => {
            this.model.completed = task.completed;
            this.model.createdAt = task.createdAt;
            this.model.id = task.id;
            this.model.title = task.title;
            this.model.description = task.description;
            this.model.duedate = convertDate(task.duedate);
        });
    }
}
function convertDate2(inputFormat) {
    function pad(s) {
        return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}
function convertDate(date) {
    var d2 =
        date.substring(6, 10) +
        "-" +
        date.substring(3, 5) +
        "-" +
        date.substring(0, 2);
    return d2;
}
