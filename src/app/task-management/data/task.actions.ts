import {Injectable} from "@angular/core";
import {TaskApiService} from "./task-api.service";
import {action} from '@datorama/akita';
import {GetAllTasksParamsDto} from "../dto/get-all-tasks-params.dto";
import {firstValueFrom} from "rxjs";

@Injectable()
export class TaskActions {
  constructor(private readonly taskApiService: TaskApiService) {}

  @action("Load all tasks")
  loadAllTasks(params: GetAllTasksParamsDto) {
    firstValueFrom(this.taskApiService.getAllTasks(params)).then()
  }
}
