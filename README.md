# Pronto Papá — Menú digital

Sitio estático responsive para GitHub Pages, pensado para QR y NFC.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `pronto-papa-menu`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Guarda. GitHub mostrará la URL pública del sitio.
7. Usa esa URL para generar el código QR y grabar el NFC.

## Cambiar datos

- Teléfono / WhatsApp: busca `56992490509` en `index.html`.
- Instagram: busca `prontopapacl` en `index.html`.
- Menú y precios: se editan en `app.js`.
- Colores: variables al comienzo de `styles.css`.
- Fotos: reemplaza los archivos dentro de `assets/` conservando los nombres o actualiza las rutas de las etiquetas `<img>`.

## Nota sobre fotos

Las imágenes incluidas se recortaron de las fotografías de carta proporcionadas para este proyecto. Instagram no entregó de forma fiable imágenes descargables del perfil durante la preparación de esta versión, así que no se copiaron fotos externas que pudieran corresponder a otro plato o tener restricciones de uso.
