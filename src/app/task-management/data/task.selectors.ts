import {Injectable} from "@angular/core";
import {TaskStore} from "./task.store";
import {Observable} from "rxjs";
import {TaskDto} from "../dto/task.dto";
import {StoreLightInterface} from "../../shared/store-light.interface";
import {TaskLightDto} from "../dto/task-light.dto";
import {Query, Store} from "@datorama/akita";

export class BaseEntityLightSelector<LightDto, TaskDto, TaskState> extends Query<TaskState> {
  protected constructor(store: Store<TaskState>) {
    super(store)
  }
}

@Injectable()
export class TaskSelectors extends BaseEntityLightSelector<TaskLightDto, TaskDto, StoreLightInterface<TaskLightDto, TaskDto>> {
  constructor(private readonly taskStore: TaskStore) {
    super(taskStore)
  }

  selectAll(): Observable<TaskLightDto[]> {
    return this.select(store => store.entities);
  }
}
