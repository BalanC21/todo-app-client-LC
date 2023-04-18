import {Injectable} from "@angular/core";
import {TaskState, TaskStore} from "./task.store";
import {Observable} from "rxjs";
import {TaskLightDto} from "../dto/task-light.dto";
import {Query} from "@datorama/akita";


@Injectable()
export class TaskSelectors extends Query<TaskState> {
  constructor(private readonly taskStore: TaskStore) {
    super(taskStore)
  }

  selectAll(): Observable<TaskLightDto[]> {
    return this.select(store => store.entities);
  }
}
