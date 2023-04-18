import {Injectable, OnInit} from '@angular/core';
import {TaskActions} from "../../data/task.actions";
import {TaskSelectors} from "../../data/task.selectors";
import {TaskDto} from "../../dto/task.dto";
import {Observable, tap} from "rxjs";


@Injectable()
export class TaskListDataService implements OnInit {
  tasks?: TaskDto[]

  constructor(readonly taskAction: TaskActions, readonly taskSelectors: TaskSelectors) {
  }

  ngOnInit(): void {
    this.loadTasks()
  }

  selectAllTasks(): Observable<any> {
    return this.taskSelectors.selectAll().pipe(tap(response => console.log(response)))
  }

  private loadTasks(): void {
    this.taskAction.loadAllTasks({status: null})
  }
}
