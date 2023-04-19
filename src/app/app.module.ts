import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskApiService} from "./task-management/data/task-api.service";
import {HttpClient} from "@angular/common/http";
import {TaskModule} from "./task-management/features/task-list-page/task.module";
import {TaskSingleModule} from "./task-management/ui/task-single/task-single.module";
import {TaskListDataService} from "./task-management/features/task-list-page/task-list-page-data.service";
import {TaskActions} from "./task-management/data/task.actions";
import {TaskStore} from "./task-management/data/task.store";
import {TaskSelectors} from "./task-management/data/task.selectors";

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
            providers: [
              TaskApiService, TaskApiService,
              HttpClient, TaskListDataService,
              TaskActions, TaskStore, TaskSelectors,
            ],
            exports: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
