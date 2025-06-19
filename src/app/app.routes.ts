import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LibrosListaComponent } from './pages/libros-lista/libros-lista.component';
import { LibroFormularioComponent } from './pages/libro-formulario/libro-formulario.component';
import { LibroDetalleComponent } from './pages/libro-detalle/libro-detalle.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'libros', component: LibrosListaComponent },
  { path: 'nuevo', component: LibroFormularioComponent },
  { path: 'editar/:id', component: LibroFormularioComponent },
  { path: 'detalle/:id', component: LibroDetalleComponent },
];
