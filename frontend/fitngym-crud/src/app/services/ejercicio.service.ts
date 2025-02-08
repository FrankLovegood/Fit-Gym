import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ejercicio } from '../models/ejercicio.model';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private apiUrl = 'https://\fitngym\fitngymAPI'; // Ajusta según tu API

  constructor(private http: HttpClient) { }

  getEjercicioByName(nombre: string): Observable<Ejercicio[]> {
    // Supongamos que el API soporta un query string para buscar por nombre
    return this.http.get<Ejercicio[]>(`${this.apiUrl}?nombre=${nombre}`);
  }

  createEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(this.apiUrl, ejercicio);
  }

  getEjercicios(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(this.apiUrl);
  }
}