import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
empleados: Empleado[];
  constructor(private employeesService: EmpleadoService  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeesService.getListEmployees().subscribe(dato=>{
      this.empleados =dato;
    })

  }

}
