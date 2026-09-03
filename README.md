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

Mientras falten capturas autorizadas, deja placeholders explícitos con comentarios `TODO: asset`.

## CV y contacto

El CV público vive en `assets/cv/Daniel-Florez-CV.pdf`.

Los enlaces públicos confirmados se actualizan en `index.html` y en las páginas de proyecto. El email público actual es `swan364@hotmail.com`; evita publicar teléfono fuera del PDF salvo confirmación explícita.

## Pendientes de contenido

- Captura principal y capturas secundarias de Neo Twitch sin datos sensibles.
- Capturas autorizadas de Aircraft Towing VR.
- Capturas autorizadas de VR Training.
- Capturas/GIF y aporte específico confirmado de Mycelium.
- Capturas autorizadas para Aviation Training Suite.
- Capturas autorizadas y nombres públicos de las cuatro aplicaciones de Transición Energética AR - RENATA / ANH.
- Nombre final, enlace público, periodo y responsabilidades de Mad Sarge / Army Moves Overdrive.
- Alcance público y posible diagrama de Dafovi.AI.Lab.
- Periodo y material visual para BeatMobile.
- Periodo, permisos y rol para PT6 Turboprop Engine Training Simulator, CINAV, Eye Anatomy Simulator y Respira.
- Foto profesional opcional.
- Validación de nombre, tipo, año y permiso de proyectos del archivo histórico.

## Actualizar proyectos

Edita `data/projects.js` como fuente principal de tarjetas y casos. Para que el sitio siga funcionando sin JavaScript, replica en `index.html` cualquier cambio visible en proyectos destacados o en el archivo inicial.

Sube covers a `assets/portfolio/covers/`, galerías a `assets/portfolio/gallery/`, foto de perfil a `assets/portfolio/profile/` y diagramas propios a `assets/portfolio/diagrams/`. Mientras falte material, deja comentarios `TODO: asset` o `TODO: confirm copy`.
