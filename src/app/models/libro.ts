export interface Libro {
  title: string;
  author: string;
  category: string;
  year: number;
  codigo: null; // El código puede ser null si es un nuevo libro
  pages: number;
}
