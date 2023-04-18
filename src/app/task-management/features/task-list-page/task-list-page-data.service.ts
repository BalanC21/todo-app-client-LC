import {Injectable, OnInit} from '@angular/core';
import {TaskActions} from "../../data/task.actions";
import {TaskSelectors} from "../../data/task.selectors";


@Injectable()
export class TaskListDataService implements OnInit {
  constructor(readonly taskAction: TaskActions, readonly taskSelectors: TaskSelectors) {
  }

  ngOnInit(): void {
    this.loadTasks()
  }

  private loadTasks(): void {
    this.taskAction.loadAllTasks({status: null})
  }

  updateTaskStatus(id: number) {

  }
}
