# PORTFOLIO — DIRECCIÓN DE DISEÑO V2
## Dafovi / Daniel Flórez · Archivo de trabajo interactivo

**Repositorio objetivo:** `Dafovi/Dafovi.github.io`  
**Implementación:** HTML, CSS y JavaScript nativo. GitHub Pages.  
**Idioma inicial:** Español. Dejar preparado para una futura versión en inglés.  
**Estado:** Dirección visual aprobada para implementación.

---

## 1. Idea central

El sitio no debe verse como una landing de “developer portfolio” genérica ni como una página gamer/cyberpunk. Debe sentirse como un **archivo vivo de trabajo interactivo**: una mezcla entre catálogo editorial, expediente técnico y portafolio creativo.

La fuerza visual sale de:
- la composición;
- la jerarquía tipográfica;
- las capturas reales de los proyectos;
- las diferencias de formato entre proyectos;
- pequeños detalles de archivo técnico: numeración, fechas, metadatos, índices, separadores y notas.

No debe depender de:
- neón;
- glow;
- partículas;
- dashboards inventados;
- frases grandilocuentes;
- una cuadrícula de tarjetas idénticas;
- logos de herramientas por decoración;
- métricas sin evidencia.

---

## 2. Posicionamiento profesional

### Nombre
**DAFOVI / Daniel Flórez**

### Rol
**Desarrollador de experiencias interactivas**

### Hero aprobado
> Desarrollo juegos, simulaciones XR y herramientas interactivas.

### Línea de soporte
> Unity, C#, VR/AR, .NET, hardware e integraciones.

### Texto de perfil corto
> Trabajo en la intersección de juegos, XR, herramientas de escritorio e integraciones con APIs y hardware. Mi base principal es Unity y C#, y me interesa convertir problemas técnicos en experiencias y productos funcionales.

### Qué debe entender un reclutador en segundos
1. Daniel no es solo “Unity Developer”.
2. Puede construir juegos, productos XR y herramientas conectadas.
3. Tiene experiencia práctica con software, hardware, APIs y plataformas.
4. Hay proyectos reales que puede revisar.

---

## 3. Identidad visual

### Concepto
**Interactive Work Archive**

### Personalidad
- Técnica, pero no fría.
- Creativa, pero no infantil.
- Visual, pero no recargada.
- Sobria, pero no corporativa genérica.
- Con carácter editorial e industrial.

### Paleta principal

| Uso | Nombre | HEX |
|---|---|---|
| Fondo principal | Paper | `#F3EEE2` |
| Fondo oscuro | Ink | `#161616` |
| Superficie oscura | Charcoal | `#202020` |
| Texto oscuro | Black | `#161616` |
| Texto sobre oscuro | Bone | `#F5F0E7` |
| Acento principal | Signal Orange | `#F05A28` |
| Acento secundario | Archive Yellow | `#D8D74A` |
| Línea / borde | Warm Gray | `#B8B1A5` |
| Texto secundario | Graphite | `#4B4A46` |

### Uso del color
- `Paper` debe dominar las áreas editoriales y de lectura.
- `Ink` debe enmarcar los proyectos visualmente fuertes.
- `Signal Orange` se usa para numeración, detalles de sistema, enlaces importantes, hover y firma; nunca como fondo dominante de toda la web.
- `Archive Yellow` es un acento puntual para links secundarios o estados, no un segundo color dominante.
- No usar morado como color de marca global. Puede aparecer dentro de capturas de Neo Twitch porque forma parte del producto, no de la web.

### Tipografía
Usar una combinación con contraste claro:

- **Titulares / proyectos:** `DM Serif Display` o `Instrument Serif`.
- **UI / navegación / cuerpo:** `Manrope` o `Inter`.
- **Metadatos / índices / tecnologías:** `IBM Plex Mono`.

Fallbacks:
```css
--font-display: "DM Serif Display", Georgia, serif;
--font-sans: "Manrope", Arial, sans-serif;
--font-mono: "IBM Plex Mono", "Courier New", monospace;
```

### Reglas tipográficas
- El héroe usa serif grande, no un texto de marketing tipo startup.
- Los títulos de proyectos también usan serif para tratarlos como piezas importantes.
- La información técnica es sans o mono, compacta y de alta legibilidad.
- Evitar letras en mayúsculas enormes como slogan decorativo.
- Las mayúsculas se reservan para categorías, índices y microetiquetas.

---

## 4. Estructura de la página principal

### A. Header
**Desktop**
- Izquierda: `DAFOVI / Daniel Flórez`.
- Derecha: `Proyectos`, `Perfil`, `Contacto`, `CV`, punto naranja decorativo/estado.
- Línea divisoria inferior fina.

**Tablet**
- Mantener la marca completa.
- Ocultar navegación extensa detrás de botón `Menú` si el ancho no permite lectura cómoda.

**Móvil**
- Marca corta: `DAFOVI / Daniel Flórez`.
- Punto naranja.
- Icono hamburguesa.
- El menú abre una capa simple con enlaces grandes y cierre accesible.

### B. Hero
No ocupar una pantalla completa rígida. Debe ser compacto, editorial y fácil de leer.

**Columna izquierda**
- Eyebrow: `DESARROLLADOR DE EXPERIENCIAS INTERACTIVAS`
- H1: `Desarrollo juegos, simulaciones XR y herramientas interactivas.`
- Línea de soporte: `Unity, C#, VR/AR, .NET, hardware e integraciones.`
- Acciones: `Ver trabajo →` y `CV ↗`

**Columna derecha / índice**
```text
01  GAMES
02  XR / SIMULATION
03  TOOLS & INTEGRATIONS
04  WEB / 360
```

En móvil, el índice pasa debajo del hero como una lista horizontal/vertical corta.

### C. Trabajo seleccionado
No usar una grilla homogénea de cards.

#### Proyecto 01 — Neo Twitch
- Debe ser el bloque visual principal.
- Izquierda: panel negro editorial con título, categoría, breve descripción, notas y stack.
- Derecha: captura real amplia de la aplicación.
- Fondo general del módulo: negro.
- Enlace: `Ver caso completo →`.

**Copy**
- Título: `Neo Twitch`
- Línea: `Herramienta de escritorio / 2025–2026`
- Descripción: `Automatización de alertas, luces, audio y OBS desde eventos de Twitch.`
- Notas: `Control centralizado para creadores de contenido. Escucha eventos de Twitch y ejecuta acciones en tiempo real con perfiles personalizables.`
- Stack: `C# / .NET / WPF / Twitch / OBS / Arduino`

#### Proyecto 02 — Aircraft Towing VR
- Bloque horizontal panorámico.
- Imagen VR ocupa la mayor parte del espacio.
- Overlay negro discreto a la izquierda para título y descripción.
- Copy: `Simulación inmersiva de remolque de aeronaves.`

#### Proyecto 03 — Mycelium
- Bloque visual más experimental.
- Collage de una imagen principal y 2–3 imágenes secundarias de gameplay.
- Copy: `Juego desarrollado en Global Game Jam.`

#### Proyecto 04 — Archivo
Lista de trabajos históricos, no una galería infinita:
- Tour Enel
- Virtual Tours
- Viewy Care
- Volkswagen VR
- Kinetic Lab
- City Points

Cada línea incluye:
`Nombre` · `Tipo de proyecto` · `Año` · `→`

Los proyectos AR/Web/360 históricos se presentan como evidencia de continuidad y no compiten con proyectos actuales.

### D. Notes
Bloque editorial corto con frase personal:
> Me interesa construir sistemas que conecten el mundo físico y digital. Disfruto resolver problemas reales con código, diseño y hardware.

Incluir un pequeño diagrama técnico real o ilustración lineal propia:
`Sensor → Arduino → Relé / NeoPixel`.
No inventar esquemas que no correspondan a una implementación real.

### E. Profile
- Foto profesional opcional, en blanco y negro o con tratamiento monocromático.
- Texto corto, directo.
- Ubicación: Bogotá, Colombia.
- Enlaces públicos confirmados: GitHub, LinkedIn, email, Itch.io.
- Sello/marca “DA / FO / VI” opcional, como firma visual pequeña.

### F. Footer
- Fondo oscuro.
- Enlaces de navegación en lista.
- Copyright.
- Punto naranja como detalle final.

---

## 5. Diseño responsive aprobado

### Desktop · 1440px y superior
- Contenedor máximo recomendado: 1280–1360px.
- Hero en dos columnas: 52% texto / 48% índice.
- Neo Twitch ocupa ancho completo con dos columnas internas.
- Aircraft Towing y Mycelium comparten la siguiente fila, en proporciones 1.1 : 0.9.
- Archivo, Notes y Profile comparten una tercera fila editorial.
- Margen exterior amplio y ritmo vertical alto.

### Tablet · 768px a 1199px
- Header simplificado según espacio.
- Hero conserva texto + índice, pero las columnas pueden pasar a proporción 60/40.
- Neo Twitch se mantiene como bloque único; en orientación vertical puede tener texto arriba y screenshot abajo.
- Aircraft Towing y Mycelium siguen como dos bloques si el ancho permite mínimo 320px por bloque; de lo contrario se apilan.
- Archivo y Notes se muestran antes de Profile.
- Evitar que el módulo Neo Twitch tenga texto demasiado pequeño.

### Móvil · 320px a 767px
- Una columna.
- Header fijo o sticky solo si no afecta espacio útil.
- Hero primero; índice se simplifica.
- Neo Twitch: panel negro vertical con texto, métricas reales solo si hay datos reales, screenshot abajo o como preview.
- Aircraft Towing: imagen panorámica con texto encima, altura moderada.
- Mycelium: título, descripción y collage de tres imágenes.
- Archivo: fondo negro, filas apiladas con año y flecha visibles.
- Notes: fondo Paper.
- Profile: imagen y texto en columnas solo desde 420px; debajo de 420px, una sola columna.
- Footer oscuro con enlaces grandes y espaciados.
- No forzar capturas de UI ilegibles: usar crop/preview específico para móvil.

---

## 6. Interacciones y movimiento

### Permitido
- Hover en desktop: leve cambio de borde o desplazamiento máximo de 2–4px.
- Hover sobre lista de archivo: resaltar fila y revelar una pequeña miniatura si existe.
- Aparición sutil de secciones al hacer scroll.
- Navegación por anclas con desplazamiento suave si el usuario no tiene `prefers-reduced-motion`.
- Menú móvil con transición corta.

### No permitido
- Video de fondo.
- Partículas.
- Parallax intenso.
- Efectos de glitch.
- Contadores animados.
- Carrusel automático.
- Glow constante.
- Animaciones que retrasen lectura o interacción.

---

## 7. Accesibilidad y calidad

- Un solo `h1`.
- Botones reales para controles interactivos.
- Navegación por teclado completa.
- Foco visible en naranja o amarillo con contraste suficiente.
- `prefers-reduced-motion: reduce`.
- Imágenes con `alt` específico.
- Todas las imágenes fuera del hero con `loading="lazy"`.
- Contraste AA mínimo.
- No usar texto incrustado dentro de imágenes como única fuente de información.
- Mantener funcionalidad principal sin JavaScript.
- Todo link externo usa `rel="noopener noreferrer"`.

---

## 8. Recomendación de archivos y arquitectura

```text
/
├── index.html
├── css/
│   └── portfolio.css
├── js/
│   └── portfolio.js
├── data/
│   └── projects.js
├── assets/
│   ├── portfolio/
│   │   ├── covers/
│   │   ├── gallery/
│   │   ├── profile/
│   │   ├── diagrams/
│   │   └── og/
│   └── cv/
│       └── Daniel-Florez-CV.pdf
├── proyectos/
│   ├── neo-twitch.html
│   ├── aircraft-towing-vr.html
│   ├── vr-training.html
│   ├── mycelium.html
│   └── archive.html
└── PORTFOLIO_ARCHIVE_DESIGN_SPEC.md
```

No introducir React, Vite, Next, Tailwind ni un sistema de compilación para esta versión. El sitio actual es GitHub Pages y debe seguir siendo fácil de desplegar y editar.

---

## 9. Contenido mínimo a confirmar antes de publicar

| Pendiente | Uso |
|---|---|
| Captura principal de Neo Twitch | Proyecto destacado |
| 2–4 capturas secundarias de Neo Twitch | Caso de estudio |
| GIF/video corto de una alerta real | Caso de estudio |
| Captura autorizada de Aircraft Towing VR | Proyecto destacado |
| Capturas autorizadas de VR Training | Caso de estudio |
| Captura/video de Mycelium | Proyecto destacado |
| Foto profesional opcional | Perfil |
| Correo público | Contacto |
| URL de LinkedIn | Contacto |
| URL de Itch.io | Contacto |
| CV PDF final | Header y hero |
| Validación de proyectos que se pueden mostrar | Archivo histórico |

Mientras falten imágenes, usar placeholders sobrios: bloque Paper o Ink con el texto `Captura pendiente`. No usar imágenes de stock ni renders falsos.

---

## 10. Criterios de aceptación

- [ ] No parece un portafolio generado por IA ni una plantilla de developer genérica.
- [ ] El hero explica el perfil sin encasillarlo en Unity.
- [ ] Neo Twitch es el caso principal.
- [ ] Aircraft Towing VR, Mycelium y experiencias VR tienen jerarquía clara.
- [ ] Proyectos históricos se muestran como archivo, no como una parrilla infinita.
- [ ] Desktop, tablet y móvil respetan el sistema aprobado.
- [ ] No hay fondos de video, partículas, neón o HUD decorativo.
- [ ] El contenido sigue siendo legible en móvil.
- [ ] El sitio es estático y compatible con GitHub Pages.
- [ ] Hay estructura de datos simple para añadir proyectos.
- [ ] Los assets y datos no confirmados quedan marcados como pendientes.
