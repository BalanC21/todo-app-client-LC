import {Store, StoreConfig} from "@datorama/akita";
import {TaskDto} from "../dto/task.dto";
import {StoreLightInterface} from "../../shared/store-light.interface";
import {TaskLightDto} from "../dto/task-light.dto";
import {initialBaseEntityLightState} from "../../shared/store.functions";

export interface TaskState extends StoreLightInterface<TaskLightDto, TaskDto> {
}

const createInitialState = (): TaskState => (
  {...initialBaseEntityLightState()}
)

export class BaseEntityLightStore<EntityLight, Entity, State extends StoreLightInterface<EntityLight, Entity>> extends Store {
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
