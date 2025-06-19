import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './libro-formulario.component.html',
  styleUrls: ['./libro-formulario.component.scss']
})
export class LibroFormularioComponent {
  libro: Libro = {
    codigo: null,
    title: '',
    author: '',
    category: '',
    year: new Date().getFullYear(),
    pages: 1
  };
  esEdicion = false;
  mensaje: string = '';
  error: string = '';

  constructor(private libroService: LibroService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.libroService.obtenerPorId(+id).subscribe({
        next: (libro) => this.libro = libro,
        error: () => this.error = 'No se pudo cargar el libro.'
      });
    }
  }

  crearLibro() {
    this.mensaje = '';
    this.error = '';
    if (this.esEdicion && this.libro.codigo) {
      this.libroService.actualizar(this.libro.codigo, this.libro).subscribe({
        next: () => {
          this.mensaje = '¡Libro actualizado!';
          setTimeout(() => this.router.navigate(['/libros']), 1200);
        },
        error: () => this.error = 'Error al actualizar el libro.'
      });
    } else {
      this.libroService.crear(this.libro).subscribe({
        next: () => {
          this.mensaje = '¡Libro creado exitosamente!';
          setTimeout(() => this.router.navigate(['/libros']), 1200);
        },
        error: () => this.error = 'Error al crear el libro.'
      });
    }
  }
}