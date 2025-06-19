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

  private getHeaders() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  obtenerTodos(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl, this.getHeaders());
  }

  obtenerPorId(codigo: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${codigo}`, this.getHeaders());
  }

  // Nuevo: obtener libros por categoría
  obtenerPorCategoria(categoria: string): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/?category=${encodeURIComponent(categoria)}`, this.getHeaders());
}

  crear(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro, this.getHeaders());
  }

  actualizar(codigo: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${codigo}`, libro, this.getHeaders());
  }

  eliminar(codigo: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${codigo}`, this.getHeaders());
  }
}
