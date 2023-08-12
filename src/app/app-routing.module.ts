import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';

const routes : Routes=[
  {path:'empleados',component:ListEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
