import {Store, StoreConfig} from "@datorama/akita";
import {TaskDto} from "../dto/task.dto";
import {StoreLightInterface} from "../../shared/store-light.interface";
import {initialBaseEntityLightState} from "../../shared/store.functions";

export interface TaskState extends StoreLightInterface<TaskDto, TaskDto> {
}

const createInitialState = (): TaskState => (
  {...initialBaseEntityLightState()}
)


@StoreConfig({name: "TaskStore"})
export class TaskStore extends Store {
  constructor() {super(createInitialState());}

  set(entities: TaskDto[]): void {
    this.update(state => (
      {...state, entities}
    ));
  }
}
