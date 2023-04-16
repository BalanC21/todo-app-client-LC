import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskSingleComponent} from "./task-single.component";



@NgModule({
  declarations: [TaskSingleComponent],
  exports:[TaskSingleComponent],
  imports: [
    CommonModule,
  ]
})
export class TaskSingleModule { }
