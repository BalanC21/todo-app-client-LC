import {Store, StoreConfig} from "@datorama/akita";
import {TaskDto} from "../dto/task.dto";
import {StoreInterface} from "../../shared/store.interface";
import {TaskLightDto} from "../dto/task-light.dto";
import {initialBaseEntityLightState} from "../../shared/store.functions";

export interface TaskState extends StoreInterface<TaskLightDto, TaskDto> {
}

const createInitialState = (): TaskState => (
  {...initialBaseEntityLightState()}
)

export class BaseEntityLightStore<EntityLight, Entity, State extends StoreInterface<EntityLight, Entity>> extends Store {
}

@StoreConfig({name: "TaskStore"})
export class TaskStore extends BaseEntityLightStore<TaskLightDto, TaskDto, TaskState> {
  constructor() {super(createInitialState());}

  set(entities: TaskLightDto[]): void {
    this.update(state => (
      {...state, entities}
    ));
  }
}
