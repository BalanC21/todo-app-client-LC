import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";
import {TaskApiService} from "../../data/task-api.service";
import {PostTaskDto} from "../../dto/post-task-dto";
import {Observable} from "rxjs";
import {TaskDto} from "../../dto/task.dto";

@Injectable()
export class AddTaskService {
  constructor(private taskService: TaskApiService) {
  }

  addTask(newTask: PostTaskDto): Observable<TaskDto>{
    return this.taskService.postTask(newTask);
  }

}
