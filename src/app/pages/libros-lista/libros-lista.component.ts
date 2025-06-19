import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-libros-lista',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './libros-lista.component.html',
  styleUrl: './libros-lista.component.scss',
})
export class LibrosListaComponent implements OnInit {
  libros: Libro[] = [];
  categorias: string[] = [];
  categoriaSeleccionada: string = '';
  cargando = false;
  error: string = '';

  constructor(private libroService: LibroService, private router: Router) {}

  ngOnInit() {
    this.obtenerCategorias();
    this.obtenerLibros();
  }

  obtenerCategorias() {
    // Si tu backend tiene endpoint de categorías, consúmelo.
    // Si no, puedes obtenerlas de los libros:
    this.libroService.obtenerTodos().subscribe(libros => {
      this.categorias = [...new Set(libros.map(l => l.category))];
    });
  }

  obtenerLibros() {
  this.cargando = true;
  this.error = '';
  this.libroService.obtenerTodos().subscribe({
    next: libros => {
      this.libros = libros;
      this.cargando = false;
    },
    error: err => {
      this.cargando = false;
      if (err.status === 401 || err.status === 403) {
        this.error = 'Debes iniciar sesión para ver la lista de libros.';
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 2000);
      } else {
        this.error = 'Ocurrió un error al cargar los libros.';
      }
    }
  });
}

  filtrarPorCategoria() {
    if (!this.categoriaSeleccionada) {
      this.obtenerLibros();
    } else {
      this.cargando = true;
      this.libroService.obtenerPorCategoria(this.categoriaSeleccionada).subscribe(libros => {
        this.libros = libros;
        this.cargando = false;
      });
    }
  }

  eliminarLibro(codigo: number) {
  if (confirm('¿Seguro que deseas eliminar este libro?')) {
    this.libroService.eliminar(codigo).subscribe(() => {
      this.libros = this.libros.filter(libro => libro.codigo !== codigo);
    });
  }
}
}
