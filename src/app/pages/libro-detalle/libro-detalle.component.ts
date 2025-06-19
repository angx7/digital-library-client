import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro';
@Component({
  selector: 'app-libro-detalle',
  imports: [CommonModule, FormsModule],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.scss'
})
export class LibroDetalleComponent {
  codigo: number | null = null;
  libro: Libro | null = null;
  error: string = '';

  constructor(private libroService: LibroService) {}

  buscarLibro() {
    this.libro = null;
    this.error = '';
    if (this.codigo) {
      this.libroService.obtenerPorId(this.codigo).subscribe({
        next: (libro) => this.libro = libro,
        error: () => this.error = 'No se encontró un libro con ese código.'
      });
    }
  }
}
