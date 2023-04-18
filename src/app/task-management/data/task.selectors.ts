import {Injectable} from "@angular/core";
import {TaskState, TaskStore} from "./task.store";
import {Observable} from "rxjs";
import {Query} from "@datorama/akita";
import {TaskDto} from "../dto/task.dto";


@Injectable()
export class TaskSelectors extends Query<TaskState> {
  constructor(private readonly taskStore: TaskStore) {
    super(taskStore)
  }

  selectAll(): Observable<TaskDto[]> {
    return this.select(store => store.entities).pipe();
  }
}
