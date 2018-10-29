import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../tasks-list/task.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  model = new Task("", "", false,"", "", "");

  constructor(private taskService: TaskService) {
    
  }
  task1: Task;
  onTaskAdd(event){
    
    var date1 = convertDate2(new Date());
    var date2 = convertDate2(new Date());
    //console.log(this.model.duedate);
    let task: Task = new Task(this.model.title,this.model.description,false,this.model.duedate,date1,date2)
    this.taskService.addTask(task).subscribe(
      (res) =>
      {
        this.taskService.onTaskAdded.emit(res);

      }
      
    )
    } 
   
    
    public currentDate = new Date();
    public currentDate2 =this.currentDate.getFullYear()  + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate() 
  
  ngOnInit() {
    
  }

}
function convertDate2(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
};

