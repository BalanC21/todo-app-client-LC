import {Injectable} from "@angular/core";
import {TaskApiService} from "./task-api.service";

@Injectable()
export class TaskActions {
      constructor(
        private taskApiService: TaskApiService
      ) {
      }


}
