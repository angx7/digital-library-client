import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libros-lista.component.html',
  styleUrl: './libros-lista.component.scss',
})
export class LibrosListaComponent implements OnInit {
  libros: Libro[] = [];
  cargando = true;

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.obtenerTodos().subscribe({
      next: (data) => {
        this.libros = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener libros:', err);
        this.cargando = false;
      },
    });
  }
}
