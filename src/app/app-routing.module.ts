import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from "./task-management/features/task-list-page/task.component";

const routes: Routes = [
  {path: '', component: TaskComponent},
  {path: 'completed', component: TaskComponent}
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
