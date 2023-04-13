import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {TaskDto} from "../../dto/task.dto";

@Component({
             selector: 'app-task',
             template: `
                 <ng-container>
                     <h1>Tasks</h1>
                     <div class="task-container">
                         <div *ngFor="let task of tasks">
                             <p>{{task.taskName}}</p>
                             <p>{{task.taskDescription}}</p>
                             <p>{{task.taskDeadline}}</p>
                         </div>
                     </div>
                 </ng-container>
             `
           })
export class TaskComponent implements OnInit {
  tasks!: TaskDto[];

  constructor(public readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(response => this.tasks = response)
  }
}
