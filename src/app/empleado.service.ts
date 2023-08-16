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
  getListEmployees(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);

  }
  //este metodo nos sirve para Registrar un empleados
  registerEmployees(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado);

  }
  //Este metodo sirve para actualizar el empleado
  actualizarEmpleado(idEmpleado: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${idEmpleado}`, empleado)
  }

  //Obtener empleado por ID
  obtenerEmpleadoPorID(empleadoId: number): Observable<Empleado> {

    return this.httpClient.get<Empleado>(`${this.baseUrl}/${empleadoId}`);

  }
  eliminarEmpleado(empleadoId:number):Observable<Object>{
    return this.httpClient.delete<Empleado>(`${this.baseUrl}/${empleadoId}`)

  }
}
