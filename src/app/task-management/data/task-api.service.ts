import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {apiRoutes} from "../../shared/api.routes";
import {GetAllTasksParamsDto} from "../dto/get-all-tasks-params.dto";
import {Observable} from "rxjs";

@Injectable()
export class TaskApiService {
  private readonly tasks = apiRoutes.tasks;
  private readonly http = inject(HttpClient);

  getAllUnCompletedTasks(params: GetAllTasksParamsDto): Observable<any> {
    const httpParams = this.buildHttpParams(params)
    return this.http.get(this.tasks.unCompleted, {params: httpParams})
  }

  getAllCompletedTasks(params: GetAllTasksParamsDto): Observable<any> {
    const httpParams = this.buildHttpParams(params)
    return this.http.get(this.tasks.completed, {params: httpParams})
  }

  getAllTasks(params: GetAllTasksParamsDto):Observable<any> {
    const httpParams = this.buildHttpParams(params)
    return this.http.get(this.tasks.allTasks, {params: httpParams})
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
