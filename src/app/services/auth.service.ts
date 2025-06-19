import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { API_BASE_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${API_BASE_URL}/login`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(this.apiUrl, { email, password }, { responseType: 'text' })
      .pipe(
        tap((token: string) => {
          localStorage.setItem('token', token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return !payload.exp || payload.exp > now;
    } catch (e) {
      return false;
    }
  }

  getToken(): string | null {
    const raw = localStorage.getItem('token');
    return raw ? raw.replace(/"/g, '') : null;
  }

  getUserEmail(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.email || null;
    } catch (err) {
      console.error('Token inválido:', err);
      return null;
    }
  }
}
