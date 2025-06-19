# 📚 Digital Library Client (Angular)

Este es el frontend de una **biblioteca digital** desarrollado en **Angular**. Permite a los usuarios visualizar, buscar y explorar libros disponibles desde un backend conectado.

## 🚀 Tecnologías usadas

- [Angular](https://angular.io/) 17+
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [Bootstrap](https://getbootstrap.com/) o CSS personalizado
- [Angular CLI](https://angular.io/cli)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/angx7/digital-library-client.git
cd digital-library-client
```

2. Instala las dependencias:

```bash
npm install
```

3. Corre la aplicación en desarrollo:

```bash
ng serve
```

Luego visita: [http://localhost:4200](http://localhost:4200)

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/      # Componentes reutilizables (navbar, cards, etc.)
│   ├── pages/           # Páginas como Login, Biblioteca, DetalleLibro
│   ├── services/        # Servicios para consumir el backend (Auth, Libros)
│   ├── models/          # Interfaces TypeScript para tipado de datos
│   └── app.module.ts    # Módulo principal de la app
├── assets/              # Imágenes, íconos, etc.
├── environments/        # Configuraciones para dev/prod
```

## 🔒 Autenticación

Este proyecto maneja autenticación con **JWT**, guardado en `localStorage`, y verificación automática para validar sesiones activas.

## ✅ Funcionalidades principales

- Login de usuario
- Listado y detalle de libros
- Búsqueda por título
- Cierre de sesión
- Manejo básico de errores

## 🤝 Contribuciones

Pull requests son bienvenidas. Para cambios mayores, por favor abre un issue primero para discutir lo que te gustaría cambiar.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
