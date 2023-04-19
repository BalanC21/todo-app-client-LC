import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {apiRoutes} from "../../shared/api.routes";
import {GetAllTasksParamsDto} from "../dto/get-all-tasks-params.dto";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {TaskStore} from "./task.store";
import {TaskActions} from "./task.actions";
import {TaskDto} from "../dto/task.dto";
import {TaskSingleService} from "../ui/task-single/task-single.service";

@Injectable()
export class TaskApiService {
  private readonly tasks = apiRoutes.tasks;
  private readonly http = inject(HttpClient);

  constructor(
    // private readonly taskActions: TaskActions
    private readonly taskSingleService: TaskSingleService
  ) {
  }
  getAllUnCompletedTasks(params: GetAllTasksParamsDto): Observable<any> {
    const httpParams = this.buildHttpParams(params)
    return this.http.get(this.tasks.unCompleted, {params: httpParams})
  }

  getAllCompletedTasks(params: GetAllTasksParamsDto): Observable<any> {
    const httpParams = this.buildHttpParams(params)
    return this.http.get(this.tasks.completed, {params: httpParams})
  }

  getAllTasks(params: GetAllTasksParamsDto):Observable<Object> {
    const httpParams = this.buildHttpParams(params)
    return this.http.get(this.tasks.allTasks, {params: httpParams})
  }

  updateTaskStatus(id: number): void {
    this.http.patch<TaskDto>(`${ this.tasks.update }${ id }`,{}).pipe().subscribe(result => {
      console.log(result);
      // this.taskActions.updateTask(result)
      this.taskSingleService.updateTask(result);

    })
  }

  private buildHttpParams(params: GetAllTasksParamsDto) {
    const httpParams = new HttpParams();
    if (params.status) {
      return httpParams.append('status', params.status)
    } else {
      return httpParams;
    }
  }


}
