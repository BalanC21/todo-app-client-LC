import {Component, OnInit} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskListDataService} from "./task-list-page-data.service";
import {Subject} from "rxjs";

@Component({
             selector: 'app-task',
             template: `
                 <ng-container>
                     <button (click)="displayAllTasks()">Display All</button>
                     <button (click)="displayByStatus()">Display ByStatus</button>
                     <h1 class="title">Tasks</h1>
                     <div class="tasks-parent">
                         <div class="addTaskContainer">
                             <add-task></add-task>
                         </div>
                         <div class="center-container" style="display: inline-block">
                             <div class="task-container">
                                 <div *ngFor="let task of tasks">
                                     <app-task-single [task]="task"></app-task-single>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </ng-container>
             `,
             styleUrls: ['../../../app.component.css']
           })
export class TaskComponent implements OnInit {
  tasks!: TaskDto[];
  route: string = "";
  private isChanged: Subject<string> = new Subject();

  constructor(public readonly taskService: TaskListDataService) {
  }

  ngOnInit(): void {
    this.taskService.ngOnInit();
    this.taskService.selectAllTasks(this.route).subscribe(result => this.tasks = result);
    this.checkStatus()
  }

  displayAllTasks() {
    this.isChanged.next("")
  }

  displayByStatus() {
    if (this.route === "" || this.route === "unCompleted") {
      this.isChanged.next("completed")
    } else if (this.route === "completed") {
      this.isChanged.next("unCompleted")
    }
  }

  private checkStatus() {
    this.isChanged.subscribe(value => {
      if (value !== this.route) {
        this.route = value
        this.taskService.selectAllTasks(this.route).subscribe(result => this.tasks = result);
      }
    })
  }
}
