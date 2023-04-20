import {Component} from "@angular/core";
import {AddTaskService} from "./add-task.service";
import {Observable} from "rxjs";
import {TaskDto} from "../../dto/task.dto";

@Component({
  selector: 'add-task',
  template: `
    <div>
      <label>Name: </label>
      <input [(ngModel)]="name" placeholder="Task name">
      <br/>
      <br/>
      <label>Description: </label>
      <input [(ngModel)]="description" placeholder="Task description">
      <br/>
      <br/>
      <label>Status:</label>
      <select [(ngModel)]="status">
        <option value="completed">completed</option>
        <option value="unCompleted">unCompleted</option>
      </select>
      <br/>
      <br/>
      <label for="date-picker">Alege o dată:</label>
      <input type="date" id="date-picker" name="date-picker" [(ngModel)]="deadLine">
      <br/>
      <br/>
      <button (click)="addTask()">add task</button>
    </div>
  `,
  styleUrls: ['add-task.component.css']
})
export class AddTaskComponent {
  name: string = 'task name';
  description: string = 'task description';
  status: string= 'unCompleted';
  deadLine: Date = new Date();

  constructor(public readonly addTaskService: AddTaskService) {
  }

  addTask(){
    const addedTask :Observable<TaskDto>= this.addTaskService.addTask({
      taskName: this.name,
      taskDescription: this.description,
      taskType: this.status,
      taskDeadline: this.deadLine
    })
    addedTask.subscribe(result => {
      console.log(result)
      console.log("added successfully")
    })

  }
}
