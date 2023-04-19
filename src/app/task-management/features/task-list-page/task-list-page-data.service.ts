import {Injectable, OnInit} from '@angular/core';
import {TaskActions} from "../../data/task.actions";
import {TaskSelectors} from "../../data/task.selectors";
import {Observable, tap} from "rxjs";
import {TaskDto} from "../../dto/task.dto";


@Injectable()
export class TaskListDataService implements OnInit {
  constructor(readonly taskAction: TaskActions, readonly taskSelectors: TaskSelectors) {
  }

  ngOnInit(): void {
    this.loadTasks().then()
  }

  async loadTasks(): Promise<any> {
    return await this.taskAction.loadAllTasks({status: "unCompleted"})
  }

  selectAllTasks(): Observable<TaskDto[]> {
    return this.taskSelectors.selectAll()
  }

  updateTask(id: number){
    this.taskAction.updateTask(id);
  }
}
