import {Component, Input, OnInit} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../features/task-list-page/task.service";
import {Observable} from "rxjs";

@Component({
             selector: 'app-task-single',
             template: `
                 <div class="task-single">
                     <p>TaskName: {{task.taskName}}</p>
                     <p>Task Description: {{task.taskDescription}}</p>
                     <p>Deadline: {{task.taskDeadline}}</p>
                     <p>Status: {{task.taskType}}</p>
                     <button (click)="updateStatus()">Set As Complete</button>
                     <br>
                 </div>
             `,
             styleUrls: ['./task-single.component.css']
           })
export class TaskSingleComponent implements OnInit{
@Input()
  task!: TaskDto;

  constructor(public readonly taskService: TaskService) {}

  updateStatus(): void{
    console.log("click")
    this.taskService.updateTaskStatus(this.task.id);
  }

  ngOnInit(): void {
    console.log("init")
  }

}
