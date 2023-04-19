import {Injectable} from "@angular/core";
import {TaskApiService} from "./task-api.service";
import {action} from '@datorama/akita';
import {GetAllTasksParamsDto} from "../dto/get-all-tasks-params.dto";
import {firstValueFrom, map, take} from "rxjs";
import {TaskStore} from "./task.store";
import {TaskDto} from "../dto/task.dto";
import {TaskSelectors} from "./task.selectors";

@Injectable()
export class TaskActions {
  constructor(
    private readonly taskApiService: TaskApiService,
    private readonly taskStore: TaskStore,
    private readonly taskSelectors: TaskSelectors
  ) {}

  @action("Load all tasks")
  loadAllTasks(params: GetAllTasksParamsDto): Promise<any> {
    return firstValueFrom(this.taskApiService.getAllTasks(params))
      .then(response => this.taskStore.set(response))
  }

  @action("updateTask")
  updateTask(id: number){
    let updatedTaskDto = this.taskApiService.updateTaskStatus(id);
    updatedTaskDto.subscribe(updatedTask => {
      this.taskSelectors.selectAll().pipe(
        take(1),
        map(tasks => tasks.map(task => {
          if (task.id === updatedTask.id) {
            return { ...task, taskType: updatedTask.taskType };
          } else {
            return task;
          }
        })),
      ).subscribe(tasks => {
        this.taskStore.set(tasks);
      });

    })
  }

}
