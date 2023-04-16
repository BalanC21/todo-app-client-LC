import {Injectable} from '@angular/core';
import {TaskApiService} from "../../data/task-api.service";
import {TaskDto} from "../../dto/task.dto";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(private readonly data: TaskApiService) {}

  getAllUnCompletedTasks(): Observable<TaskDto[]> {
    return this.data.getAllUnCompletedTasks({status: null})
  }

  getAllCompletedTasks(): Observable<TaskDto[]> {
    return this.data.getAllCompletedTasks({status: null})
  }

  getAllTasks(): Observable<TaskDto[]> {
    return this.data.getAllTasks({status: null})
  }

}
