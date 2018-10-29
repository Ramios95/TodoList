import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    
   this.taskService.getAllTasks()
    .subscribe(
      (tasks: any[]) => {
        
         this.tasks = tasks

      }
    ); 
this.taskService.onTaskAdded.subscribe(
  (task: Task) => {
    this.tasks.push(task)}
) 
    }
   

  
  getDueDateLabel(task: Task) {
    return task.completed ? 'label-success' : 'label-primary';
  }
  onTaskChange(event, task) {
    
     this.taskService.saveTask(task,event.target.checked).subscribe();
     
  }
  onTaskDelete(event,task){
    
    this.taskService.deleteTask(task.id).subscribe(
    (res) => {
      
      
      this.tasks.splice(this.tasks.indexOf(this.tasks.find(x=>x.id===task.id)),1);
     

    }
    
    )
    }   

}




