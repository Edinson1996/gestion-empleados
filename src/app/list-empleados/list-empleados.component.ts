import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
empleados: Empleado[];
  constructor(private employeesService: EmpleadoService,
    private router: Router  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeesService.getListEmployees().subscribe(dato=>{
      this.empleados =dato;
    })

  }

  actualizarEmpleado(empleadoId : number){
    console.log(empleadoId);
    //this.router.navigate(['actualizar-empleado',empleadoId]);

  }
  EliminarEmpleado(empleadoId : number){
    this.employeesService.eliminarEmpleado(empleadoId).subscribe(dato=>{
      console.log(dato);
      this.getEmployees();
    });
  }

}
