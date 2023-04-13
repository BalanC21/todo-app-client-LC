import {Injectable, OnInit} from '@angular/core';
import {TaskApiService} from "../../data/task-api.service";
import {TaskDto} from "../../dto/task.dto";
import {Observable} from "rxjs";

@Injectable({
              providedIn: 'root'
            })
export class TaskService {

  constructor(private readonly data: TaskApiService) {}

  getAllTasks(): Observable<TaskDto[]> {
    return this.data.getAllTasks({status: null})
  }
}
