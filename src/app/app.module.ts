import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskApiService} from "./task-management/data/task-api.service";
import {HttpClient} from "@angular/common/http";
import {TaskModule} from "./task-management/features/task-list-page/task.module";
import {TaskSingleModule} from "./task-management/ui/task-single/task-single.module";

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              TaskModule,
              TaskSingleModule
            ],
            providers: [TaskApiService, TaskApiService, HttpClient],
            exports: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
