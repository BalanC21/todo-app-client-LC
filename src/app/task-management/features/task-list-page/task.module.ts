import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskComponent} from "./task.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
            declarations: [TaskComponent],
            exports: [TaskComponent],
            imports: [
              CommonModule,
              HttpClientModule
            ]
          })
export class TaskModule {
}
