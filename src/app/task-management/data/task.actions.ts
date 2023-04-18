import {Injectable} from "@angular/core";
import {TaskApiService} from "./task-api.service";
import {action} from '@datorama/akita';
import {GetAllTasksParamsDto} from "../dto/get-all-tasks-params.dto";
import {firstValueFrom} from "rxjs";
import {TaskStore} from "./task.store";

@Injectable()
export class TaskActions {
  constructor(
    private readonly taskApiService: TaskApiService,
    private readonly taskStore: TaskStore) {}

  @action("Load all tasks")
  loadAllTasks(params: GetAllTasksParamsDto): Promise<any> {
    return firstValueFrom(this.taskApiService.getAllTasks(params))
      .then(response => this.taskStore.set(response))
  }
}
