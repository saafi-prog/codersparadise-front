import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMustReadComponent } from './page-must-read/page-must-read.component';

const routes: Routes = [
  {path:"", component:PageMustReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
