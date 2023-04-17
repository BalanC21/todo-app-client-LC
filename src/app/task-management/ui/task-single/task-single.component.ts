import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../features/task-list-page/task.service";
import {Observable, Subscriber, Subscription} from "rxjs";

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
export class TaskSingleComponent implements OnDestroy{
@Input()
  task!: TaskDto;
  result!: Subscription;

  constructor(public readonly taskService: TaskService) {}

  updateStatus(): void{
    this.result = this.taskService.updateTaskStatus(this.task.id).subscribe(result => {
      console.log("result")
      console.log(result)
      console.log("after result")
    });
  }

  ngOnDestroy(): void {
    this.result.unsubscribe()
  }


}
