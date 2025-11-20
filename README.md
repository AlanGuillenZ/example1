# Bitácora del proyecto

Este proyecto es un sitio construido con [Astro](https://astro.build) que toma como punto de partida la plantilla básica y la adapta al español. La página principal muestra un mensaje de bienvenida y enlaces útiles para documentación y comunidad.

## Avance actual
- **Página principal en español:** `src/pages/index.astro` utiliza un layout general y el componente `Welcome` para presentar el contenido.
- **Componente de bienvenida personalizado:** `src/components/Welcome.astro` contiene el hero con fondo difuminado, enlaces a la documentación y al Discord de Astro, además de una tarjeta destacando las novedades de Astro 5.0.
- **Diseño responsive:** El estilo embebido en `Welcome.astro` ajusta la disposición de los elementos para pantallas móviles.

## Estructura del proyecto

```
/
├── public/            # Recursos estáticos
├── src/
│   ├── assets/        # Iconos y fondos utilizados en el hero
│   ├── components/    # Componentes Astro (incluye Welcome)
│   ├── layouts/       # Plantillas de layout compartidas
│   └── pages/         # Páginas del sitio (inicio en index.astro)
└── package.json       # Dependencias y scripts de npm
```

## Cómo ejecutar el proyecto
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre el navegador en `http://localhost:4321` para ver el sitio.
