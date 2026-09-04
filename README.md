# Portafolio

Portafolio estático de DAFOVI / Daniel Flórez para GitHub Pages. No usa React, Vite, Next, Tailwind, Bootstrap ni un pipeline de compilación.

## Previsualizar localmente

Puedes abrir `index.html` directamente o servir la carpeta con un servidor estático simple:

```powershell
python -m http.server 8000
```

Luego abre `http://127.0.0.1:8000/`.

## Imágenes y assets

Guarda los recursos nuevos en:

- `assets/portfolio/covers/` para covers principales.
- `assets/portfolio/gallery/` para galerías y GIFs.
- `assets/portfolio/profile/` para foto profesional.
- `assets/portfolio/diagrams/` para diagramas propios.
- `assets/portfolio/og/` para Open Graph.

Los pendientes internos de contenido y assets viven en `PORTFOLIO_PENDING.md`; evita mostrarlos como notas visibles dentro del sitio publicado.

## CV y contacto

Los CV públicos viven en `assets/cv/`:

- `Daniel-Florez-CV.pdf` para español.
- `Daniel-Florez-CV-en.pdf` para inglés.
- `Daniel-Florez-CV-ja.pdf` para japonés.

Los enlaces públicos confirmados se actualizan en `index.html` y en las páginas de proyecto. El email público actual es `swan364@hotmail.com`; evita publicar teléfono fuera del PDF salvo confirmación explícita.

## Pendientes de contenido

Consulta `PORTFOLIO_PENDING.md` para revisar notas internas de contenido, assets faltantes y decisiones editoriales pendientes.

## Actualizar proyectos

Edita `data/projects.js` como fuente principal de tarjetas y casos. Para que el sitio siga funcionando sin JavaScript, replica en `index.html` cualquier cambio visible en proyectos destacados o en el archivo inicial.

Sube covers a `assets/portfolio/covers/`, galerías a `assets/portfolio/gallery/`, foto de perfil a `assets/portfolio/profile/` y diagramas propios a `assets/portfolio/diagrams/`. Si falta material, registra la nota en `PORTFOLIO_PENDING.md`.

## Actualizar idiomas

Los textos traducibles viven en `data/i18n.js`. El sitio soporta `es`, `en` y `ja`; JavaScript detecta el idioma del navegador y usa inglés si no encuentra uno compatible.

Para texto nuevo en HTML, conserva un fallback legible y agrega `data-i18n="clave"`. Para tarjetas futuras, agrega el bloque `i18n` dentro del proyecto en `data/projects.js`.
