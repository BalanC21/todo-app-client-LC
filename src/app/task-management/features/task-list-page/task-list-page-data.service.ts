import {Injectable, OnInit} from '@angular/core';
import {TaskActions} from "../../data/task.actions";
import {TaskSelectors} from "../../data/task.selectors";
import {Observable} from "rxjs";
import {TaskDto} from "../../dto/task.dto";


@Injectable()
export class TaskListDataService implements OnInit {
  constructor(readonly taskAction: TaskActions, readonly taskSelectors: TaskSelectors) {
  }

  ngOnInit(): void {
    this.loadTasks().then()
  }

  async loadTasks(): Promise<any> {
    return await this.taskAction.loadAllTasks({status: null})
  }

  selectAllTasks(route: string): Observable<TaskDto[]> {
    if (route === "") {
      return this.taskSelectors.selectAll()
    }
    return this.taskSelectors.selectByStatus(route)
  }

  updateTask(id: number) {
    this.taskAction.updateTask(id);
  }
}
