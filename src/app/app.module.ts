import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task-management/features/task-list-page/task.component';
import {TaskApiService} from "./task-management/data/task-api.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {TaskModule} from "./task-management/features/task-list-page/task.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule
  ],
  providers: [TaskApiService, TaskApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
