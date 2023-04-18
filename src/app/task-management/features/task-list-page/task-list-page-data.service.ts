import {Injectable, OnInit} from '@angular/core';
import {TaskActions} from "../../data/task.actions";
import {TaskSelectors} from "../../data/task.selectors";
import {Observable} from "rxjs";
import {TaskLightDto} from "../../dto/task-light.dto";
import {TaskDto} from "../../dto/task.dto";


@Injectable()
export class TaskListDataService implements OnInit {
  constructor(readonly taskAction: TaskActions, readonly taskSelectors: TaskSelectors) {
  }

  ngOnInit(): void {
    // this.loadTasks()
    this.loadTasks()
  }

  async loadTasks(): Promise<any> {
    return await this.taskAction.loadAllTasks({status: null})
  }

  selectAllTasks(): Observable<TaskDto[]>{
    return this.taskSelectors.selectAll();
  }


}
