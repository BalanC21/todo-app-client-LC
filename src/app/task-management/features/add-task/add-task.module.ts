import {NgModule} from "@angular/core";
import {AddTaskComponent} from "./add-task.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AddTaskService} from "./add-task.service";

@NgModule({
  declarations: [AddTaskComponent],
  exports: [AddTaskComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AddTaskService]
})
export class AddTaskModule {
}
