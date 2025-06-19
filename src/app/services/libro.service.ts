import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/api.config'; // Asegúrate de que esta ruta sea correcta
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private apiUrl = `${API_BASE_URL}/books`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerTodos(): Observable<Libro[]> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Libro[]>(this.apiUrl, { headers });
  }

  obtenerPorId(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  crear(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  actualizar(id: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, libro);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
