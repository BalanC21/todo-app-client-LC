import {Injectable} from "@angular/core";
import {TaskActions} from "../../data/task.actions";
import {TaskSelectors} from "../../data/task.selectors";
import {TaskDto} from "../../dto/task.dto";

@Injectable()
export class TaskSingleService {
  constructor(
    readonly taskAction: TaskActions,
    readonly taskSelectors: TaskSelectors
  ) { }

  updateTask(taskDto: TaskDto){
    this.taskAction.updateTask(taskDto);
  }
}
