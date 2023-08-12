import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //esta URL obtiene el listado los empleados del backend
  private baseUrl = "http://localhost:8080/api/v1/empleados";
  constructor(
    private httpClient: HttpClient
  ) { }

  //este metodo nos sirve para obtener los empleados
  getListEmployees():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);

  }
}
