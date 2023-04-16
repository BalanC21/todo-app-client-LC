import {Component, Input} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";

@Component({
             selector: 'app-task-single',
             template: `
                 <div class="task-single">
                     <p>{{task.taskName}}</p>
                     <p>Task Description: {{task.taskDescription}}</p>
                     <p>Deadline: {{task.taskDeadline}}</p>
                     <p>Status: {{task.taskType}}</p>
                   <br>
                 </div>
             `,
             styleUrls: ['./task-single.component.css']
           })
export class TaskSingleComponent {
@Input()
  task!: TaskDto;
}