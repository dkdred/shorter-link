import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {SuccesComponent} from "./succes/succes.component";

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
  },
  {
    path: 'success',
    component: SuccesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
