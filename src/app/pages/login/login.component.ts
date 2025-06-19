import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (token: string) => {
        if (token && token.length > 0) {
          console.log('Token recibido:', token);
          this.router.navigate(['/libros']);
        } else {
          this.error = 'Token inválido recibido.';
        }
      },
      error: (err) => {
        console.error('Error de autenticación:', err);
        this.error = 'Credenciales inválidas o servidor fuera de línea.';
      },
    });
  }
}
