import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskComponent} from "./task.component";
import {HttpClientModule} from "@angular/common/http";
import {TaskSingleModule} from "../../ui/task-single/task-single.module";
import {AddTaskModule} from "../add-task/add-task.module";

@NgModule({
            declarations: [TaskComponent],
            exports: [TaskComponent],
            imports: [
              CommonModule,
              HttpClientModule,
              TaskSingleModule,
              AddTaskModule
            ]
          })
export class TaskModule {
}
