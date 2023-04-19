import {Component, Input} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskListDataService} from "../../features/task-list-page/task-list-page-data.service";
import {TaskApiService} from "../../data/task-api.service";

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
export class TaskSingleComponent {
  @Input()
  task!: TaskDto;

  constructor(public readonly taskService: TaskListDataService) {}

  updateStatus(): void {
    this.taskService.updateTask(this.task.id);
  }
}
