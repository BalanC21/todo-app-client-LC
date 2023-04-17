import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {TaskDto} from "../../dto/task.dto";

@Component({
             selector: 'app-task',
             template: `
                 <ng-container>
                     <h1 class="title">Tasks</h1>
                     <div class="center-container">
                         <div class="task-container">
                             <div *ngFor="let task of tasks">
                                 <app-task-single [task]="task"></app-task-single>
                             </div>
                         </div>
                     </div>
                 </ng-container>
             `,
             styleUrls: ['../../../app.component.css']
           })
export class TaskComponent implements OnInit {
  tasks!: TaskDto[];

  constructor(public readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(response => this.tasks = response)
  }
}
