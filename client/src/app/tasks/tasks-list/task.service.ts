import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Task } from "../task.model";
import { EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { TouchSequence } from "selenium-webdriver";
/* const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }; */

@Injectable()
export class TaskService {
    onTaskAdded = new EventEmitter<Task>();
    onTaskModified = new EventEmitter<Task>();
    onTaskModified2 = new EventEmitter<Task>();
    taskUrl = "http://localhost:8080/newtask";
    constructor(private http: Http) {}

    getAllTasks() {
        return this.http
            .get("http://localhost:8080/")
            .pipe(map(res => res.json()));
    }
    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http
            .post("http://localhost:8080/", task)
            .pipe(map(response => response.json()));
    }
    addTask(task: Task) {
        return this.http
            .post("http://localhost:8080/task", task)
            .pipe(map(response => response.json()));
    }

    deleteTask(id) {
        return this.http
            .delete("http://localhost:8080/task/" + id)
            .pipe(map(response => response.json()));
    }
    editTask(id, task) {
        return this.http
            .put("http://localhost:8080/task/" + id, task)
            .pipe(map(response => response.json()));
    }
}
