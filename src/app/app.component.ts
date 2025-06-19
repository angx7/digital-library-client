import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 Necesario para *ngIf
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule], // 👈 Agregado aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  get estaLogueado(): boolean {
    return this.authService.isLoggedIn();
  }

  get usuario(): string | null {
    return this.authService.getUserEmail(); // 👈 Mostramos el correo desde el token
  }
}
