import {Component, OnInit} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskListDataService} from "./task-list-page-data.service";

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

  constructor(
    public readonly taskService: TaskListDataService
  ) {
  }


  ngOnInit(): void {
    this.taskService.ngOnInit();
  }
}
