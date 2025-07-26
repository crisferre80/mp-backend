# Backend Marketplace tipo Mercado Libre

Este proyecto es un backend básico de marketplace (estilo Mercado Libre) listo para desplegar en Vercel. Incluye:

- Registro y login de usuarios
- CRUD de productos
- Búsqueda de productos
- Simulación de compras
- API REST en `/api/` para compatibilidad con Vercel

## Tecnologías
- Node.js
- Express
- Prisma (SQLite)

## Despliegue en Vercel
Coloca los endpoints en la carpeta `/api` para que Vercel los reconozca como serverless functions.

## Instalación local
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```

## Estructura sugerida
- `/api` - Endpoints REST
- `/prisma` - Esquema y migraciones de base de datos

## Notas
- Personaliza el esquema de Prisma según tus necesidades.
- Este backend es solo una base, puedes ampliarlo según tus requerimientos.
