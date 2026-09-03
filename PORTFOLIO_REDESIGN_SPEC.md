# Especificación de rediseño — Portfolio Daniel Flórez / Dafovi

**Repositorio:** `Dafovi/Dafovi.github.io`  
**Producto:** Portafolio profesional estático para GitHub Pages  
**Versión:** 1.0  
**Fecha:** julio de 2026

---

## 1. Decisión estratégica

El portafolio actual se presenta como una página de “programador Unity con 4 años de experiencia”. Eso quedó desactualizado: hoy Daniel tiene más de 7 años de experiencia y evidencia de trabajo en videojuegos, VR/AR, simulación, aplicaciones .NET/WPF, integraciones de Twitch/OBS y hardware Arduino/NeoPixel.

### Nuevo posicionamiento

**Titular principal:**  
> Desarrollador de experiencias interactivas

**Subtítulo:**  
> Construyo juegos, experiencias XR y herramientas conectadas que convierten ideas en productos jugables y útiles.

**Descriptor profesional:**  
Desarrollador con más de 7 años de experiencia creando videojuegos, experiencias VR/AR, simulaciones y aplicaciones interactivas. Especializado en Unity y C#, con experiencia adicional en .NET/WPF, integración de APIs, Twitch EventSub, OBS y hardware Arduino/NeoPixel.

### Lo que sí debe transmitir
- Unity y C# son fortalezas principales, no una etiqueta restrictiva.
- Puede llevar una idea desde prototipo hasta producto funcional.
- Tiene perfil técnico para videojuegos/XR y suficiente amplitud para software general.
- Comprende la interacción del usuario, integración entre sistemas y entrega de experiencias reales.

### Lo que se debe evitar
- Decir “Unity Developer” como identidad única.
- La frase “programador apasionado”, lenguaje inflado o promesas vagas.
- Barras de habilidades con porcentajes sin evidencia.
- Listar decenas de proyectos con el mismo peso.
- Mezclar trabajos comerciales, jams y pruebas técnicas como si fueran lo mismo.
- Mencionar clientes o detalles confidenciales que no estén autorizados.

---

## 2. Audiencias y prioridades

| Audiencia | Necesita ver primero | Señal de confianza |
|---|---|---|
| Reclutador/a | Rol, seniority práctico, proyectos destacados, CV y contacto | Mensaje claro en el hero y casos breves |
| Líder técnico | Arquitectura, decisiones, tecnologías y rol concreto | Casos de estudio con reto, solución y aporte |
| Estudio de juegos / XR | Gameplay, VR, prototipado y pulido | Capturas, videos cortos, build/demo cuando exista |
| Empresa de software | C#, .NET, producto completo e integraciones | Neo Twitch como proyecto insignia |

La página debe responder en 20 segundos: **quién es Daniel, qué construye y cómo contactar.**

---

## 3. Arquitectura de información

### 3.1 Navegación superior
- Monograma o texto: `DF / DAfovi`
- Enlaces: `Proyectos`, `Proceso`, `Perfil`, `Contacto`
- Acción principal: `Descargar CV`
- En móvil: botón de menú con foco visible; panel simple, sin navegación de varios niveles.

### 3.2 Hero
**Eyebrow:** `Disponible para oportunidades en desarrollo interactivo, XR y software`  
**H1:** `Daniel Flórez`  
**H2:** `Desarrollador de experiencias interactivas.`  
**Texto:** `Construyo juegos, experiencias XR y herramientas conectadas que convierten ideas en productos jugables y útiles.`

**CTAs**
- Primario: `Ver proyectos`
- Secundario: `Descargar CV`
- Enlace de texto: `Escríbeme`

**Indicadores compactos**
- `7+ años construyendo experiencias`
- `Unity · C# · VR/AR`
- `Bogotá, Colombia · remoto`

**Visual**
- Fondo abstracto creado con CSS/SVG/canvas ligero: retículas, trayectorias y capas transparentes que sugieran sistemas interactivos.
- No usar video de fondo.
- No usar foto de rostro como único recurso del hero.

### 3.3 Capacidades
Tres bloques, no una grilla de logos:
1. **Game Development** — gameplay, IA, UI, herramientas, prototipado y optimización.
2. **XR & Simulation** — VR, AR, Quest/Pico, interacción espacial, experiencias de formación.
3. **Desktop & Integrations** — C#/.NET/WPF, APIs, Twitch, OBS, audio, Arduino y NeoPixel.

### 3.4 Proyectos destacados
Debe mostrar 4 proyectos inicialmente:
1. Neo Twitch.
2. Aircraft Towing VR.
3. VR Training Experiences (agrupa Soft Skills / Virtual Tours).
4. Mycelium.

Cada tarjeta tiene:
- imagen 16:10;
- etiqueta de categoría;
- año/rango;
- título;
- frase de valor;
- tecnologías principales;
- enlace `Ver caso`.

### 3.5 Explorador de proyectos
Filtros accesibles, con botones reales:
- Todo
- Juegos
- VR / XR
- Aplicaciones
- Web interactiva

Mostrar máximo 9 tarjetas inicialmente y un botón `Ver más` si hay más contenido.  
Cada tarjeta lleva: categoría, nombre, año, 1 línea descriptiva y tecnologías.

### 3.6 Proceso
Una sección corta con cuatro pasos:
1. **Entender el problema** — alcance, usuario y plataforma.
2. **Prototipar lo importante** — validar interacción y viabilidad.
3. **Integrar sistemas** — gameplay, UI, APIs, hardware o plataforma.
4. **Pulir y entregar** — pruebas, estabilidad y documentación.

### 3.7 Perfil profesional
Texto sugerido:

> Soy Daniel Flórez, desarrollador de software interactivo con más de 7 años de experiencia. Mi trabajo combina programación, diseño de interacción e integración de sistemas para crear juegos, experiencias XR y herramientas que funcionan fuera del prototipo.  
>
> Mi base principal es Unity y C#, y también he trabajado con aplicaciones de escritorio en .NET/WPF, plataformas de streaming, OBS, hardware Arduino y experiencias web inmersivas. Me interesa resolver problemas técnicos concretos y convertirlos en productos claros para las personas que los usan.

Habilidades agrupadas:
- **Desarrollo:** Unity, C#, gameplay systems, UI, animación, IA básica, shaders/VFX según proyecto.
- **XR:** Meta Quest, Pico, interacción VR, AR, simulación y recorridos inmersivos.
- **Software e integración:** .NET, WPF, Git/GitHub, REST/APIs, Twitch EventSub, OBS WebSocket, Arduino/Serial, NeoPixel.
- **Flujo de trabajo:** prototipado, depuración, documentación técnica, builds y entregas.

### 3.8 Contacto
**Título:** `¿Tienes una experiencia o herramienta por construir?`  
**Texto:** `Estoy abierto a oportunidades en videojuegos, XR, simulación y desarrollo de software interactivo.`  
Botones:
- `Escribir por correo` — TODO: confirmar correo público.
- `GitHub`
- `LinkedIn` — TODO: confirmar URL.
- `Itch.io`

Incluir pie de página: `© 2026 Daniel Flórez. Hecho con HTML, CSS y JavaScript.`

---

## 4. Proyectos y contenido inicial

> Regla: no crear textos de marketing que atribuyan resultados no comprobados. Ajustar los campos marcados como `TODO` antes de publicar.

### A. Neo Twitch — Proyecto insignia
**Categoría:** Aplicaciones / Integraciones  
**Periodo:** 2025–2026  
**Titular:** `Neo Twitch — Alertas de stream conectadas a luces, audio y OBS.`  
**Resumen de tarjeta:** Aplicación de Windows que escucha eventos de Twitch y los convierte en acciones sincronizadas para audio, NeoPixel, Alexa y OBS.

**Caso de estudio**
- **Contexto:** Herramienta de escritorio para personalizar alertas de streaming.
- **Reto:** Coordinar varios sistemas asíncronos sin que las alertas se acumulen o se superpongan: Twitch EventSub, reglas, audio local, Arduino, Alexa y OBS.
- **Aporte:** Diseño e implementación de una aplicación .NET/WPF con configuración persistente, cola de alertas, integración serial con Arduino/NeoPixel, OBS WebSocket y gestión de reglas.
- **Tecnologías:** `C#`, `.NET`, `WPF`, `Twitch EventSub`, `OBS WebSocket`, `Arduino`, `NeoPixel`, `JSON`.
- **Enlaces:** GitHub y releases, si siguen siendo públicos.
- **Assets necesarios:** 1 captura del dashboard, 1 captura del editor de reglas, 1 GIF corto de una alerta activando luces.  
- **No afirmar:** cantidad de usuarios, “producto comercial” o métricas de uso sin confirmación.

### B. Aircraft Towing VR
**Categoría:** VR / Simulación  
**Periodo:** 2022–2023  
**Titular:** `Aircraft Towing VR — Simulación de remolque de aeronaves.`  
**Resumen de tarjeta:** Experiencia VR para practicar maniobras con restricciones de posición, ángulo y velocidad.

**Caso de estudio**
- **Contexto:** Simulación inmersiva orientada a procedimientos de remolque de aeronaves.
- **Reto:** Traducir reglas espaciales y de seguridad a una interacción comprensible dentro de VR.
- **Aporte:** Implementación de validaciones de ángulo, velocidad y posición; feedback de usuario y lógica de interacción en Unity para Oculus/Meta Quest.
- **Tecnologías:** `Unity`, `C#`, `Meta Quest`, `VR interaction`, `Simulation`.
- **Assets necesarios:** captura de cabina/escena, secuencia de maniobra y diagrama simple de validaciones.
- **Nota:** confirmar qué detalles se pueden mostrar públicamente.

### C. VR Training Experiences
**Categoría:** VR / Formación  
**Periodo:** 2021–2022  
**Titular:** `Experiencias VR de formación — Aprender haciendo.`  
**Resumen de tarjeta:** Desarrollo de experiencias VR para entrenamiento y habilidades blandas en dispositivos Quest y Pico.

**Caso de estudio**
- **Agrupa:** Virtual Tours y Soft Skills.
- **Aporte:** Desarrollo de flujos de interacción, navegación, UI y adaptación de experiencias para visores autónomos.
- **Tecnologías:** `Unity`, `C#`, `Oculus/Meta Quest`, `Pico`, `VR UI`.
- **Assets necesarios:** 2–3 capturas autorizadas, cada una identificando el caso.

### D. Mycelium
**Categoría:** Juegos  
**Periodo:** 2023  
**Titular:** `Mycelium — Juego creado en Global Game Jam Valencia.`  
**Resumen de tarjeta:** Prototipo de videojuego desarrollado en el contexto de Global Game Jam 2023, Valencia.

**Caso de estudio**
- **Reto:** Crear una experiencia jugable en un tiempo limitado junto a un equipo interdisciplinario.
- **Aporte:** TODO: confirmar sistemas específicos implementados por Daniel.
- **Tecnologías:** `Unity`, `C#`, `Game Jam`.
- **Enlace:** repositorio de GlobalGameJam2023 y/o itch.io si corresponde.
- **Assets necesarios:** captura in-game, pantalla de inicio y GIF corto de gameplay.

### E. Gameplay & Technical Prototypes
**Categoría:** Juegos  
**Periodo:** 2026  
**Titular:** `Gameplay & Technical Prototypes — Pruebas técnicas Unity.`  
**Resumen de tarjeta:** Colección de prototipos enfocados en resolver mecánicas, sistemas y requisitos técnicos concretos.

**Caso de estudio**
- Presentarlo como práctica profesional y evidencia técnica, no como producto terminado.
- Incluir solo repositorios, video o imágenes que no revelen material de terceros.
- Tecnologías: `Unity`, `C#`, `ShaderLab` cuando aplique.

### F. Web 360 & AR Selection
**Categoría:** Web interactiva / AR  
**Periodo:** 2018–2021  
**Titular:** `Experiencias web 360 y realidad aumentada.`  
**Resumen de tarjeta:** Selección de recorridos inmersivos y aplicaciones AR desarrolladas para experiencias de marca, visualización y contenido interactivo.

**Proyectos secundarios seleccionables**
- Tour Enel.
- Tour Oftalvist.
- Vitrina virtual Volkswagen.
- Viewy Care.
- Bienvenido a Claro.
- Bienvenido a Doria.

No hacer una tarjeta grande por cada proyecto salvo que tenga capturas, rol, reto y permiso para presentarlo. Agruparlos como selección de experiencia temprana da más claridad.

---

## 5. Sistema visual

### 5.1 Dirección
**Nombre interno:** `Interactive Systems`  
Un diseño oscuro, editorial y técnico. Debe sugerir producto, movimiento y precisión; no una landing de e-sports.

### 5.2 Paleta

| Uso | Color | HEX |
|---|---:|---|
| Fondo principal | Ink | `#090D16` |
| Superficie 1 | Midnight | `#101827` |
| Superficie 2 | Slate | `#172235` |
| Borde sutil | Steel | `#2A3A52` |
| Texto principal | Cloud | `#F3F7FB` |
| Texto secundario | Mist | `#A7B5C7` |
| Acento primario | Signal Lime | `#C7F36B` |
| Acento secundario | Electric Cyan | `#5BE7E3` |
| Éxito | Green | `#58D68D` |
| Advertencia | Amber | `#FFC857` |
| Error | Coral | `#FF6B6B` |

Uso:
- Verde lima para CTAs principales, foco y elementos importantes.
- Cyan para enlaces, etiquetas y detalles de sistema.
- El brillo debe ser sutil; no usar halos grandes permanentes.

### 5.3 Tipografía
Preferencia sin dependencias pesadas:
- Títulos: `Space Grotesk`, fallback `Inter`, `Arial`, sans-serif.
- Cuerpo: `Inter`, fallback `system-ui`, sans-serif.
- Código/tags: `JetBrains Mono`, fallback `ui-monospace`, monospace.

Escala:
- Hero desktop: 64–76px.
- H2 de sección: 36–48px.
- H3: 22–28px.
- Cuerpo: 16–18px, line-height 1.55–1.7.
- Etiquetas: 12–13px, tracking suave.

### 5.4 Layout
- Ancho máximo: 1200px.
- Margen lateral: 24px desktop, 16px móvil.
- Grid: 12 columnas desktop, 6 tablet, 1–2 móvil.
- Ritmo vertical: 96–136px entre secciones en escritorio; 64–88px en móvil.
- Hero mínimo: 760px desktop, no usar `100vh` rígido en móvil.

### 5.5 Componentes
**Botón primario:** fondo Signal Lime, texto Ink, radio 10px, hover con elevación leve.  
**Botón secundario:** transparente, borde Steel, texto Cloud.  
**Chip:** fondo Slate, borde Steel, texto Mist; ícono opcional.  
**Tarjeta de proyecto:** imagen arriba, overlay graduado discreto, categoría, año, título, resumen y tags.  
**Hover tarjeta:** translateY máximo -4px, borde cyan/lima sutil; nada que dificulte lectura.  
**Foco visible:** anillo `#C7F36B` de mínimo 2px.

### 5.6 Movimiento
- Transiciones 160–240ms.
- Entrada de secciones discreta y solo si no se prefiere reducción de movimiento.
- Hero con partículas/capas estáticas o animación muy tenue.
- No autoplay de video, carruseles ni parallax pesado.

---

## 6. Requisitos de implementación

### Tecnologías
- HTML5 semántico.
- CSS moderno: custom properties, grid, clamp(), media queries.
- JavaScript nativo y progresivo.
- Sin framework ni bundler.
- Sin Bootstrap como dependencia activa.

### Rendimiento
- Imágenes AVIF/WebP cuando sea posible, con fallback si se necesita.
- `loading="lazy"` para imágenes fuera del hero.
- Especificar dimensiones/aspect-ratio para evitar saltos de layout.
- Usar SVGs locales o inline; no cargar una librería de iconos completa.
- Evitar video de fondo.

### Accesibilidad
- Un solo `h1`.
- Orden de encabezados correcto.
- Contraste AA mínimo.
- Navegación completa por teclado.
- Botones reales para filtros; `aria-pressed` y actualización de resultados.
- Texto alternativo específico, no “imagen de proyecto”.
- Respetar `prefers-reduced-motion`.
- Menú móvil con foco y cierre con Escape.

### SEO y metadatos
Agregar:
- title: `Daniel Flórez — Desarrollador de experiencias interactivas`
- meta description de máximo 155 caracteres.
- Open Graph con imagen `assets/portfolio/og-cover.jpg` como TODO.
- JSON-LD tipo `Person` con enlaces reales confirmados.
- Favicon actualizable.

### Rutas anteriores
El sitio actual contiene enlaces bajo `/proyectos/*.html`. Mantener páginas antiguas que todavía sean útiles o crear redirecciones para que ningún enlace viejo muera. No eliminar una URL pública sin sustituto.

---

## 7. Modelo de datos sugerido

Crear `data/projects.js` con una estructura similar:

```js
window.PORTFOLIO_PROJECTS = [
  {
    id: "neo-twitch",
    title: "Neo Twitch",
    category: ["applications"],
    featured: true,
    period: "2025–2026",
    tagline: "Alertas de stream conectadas a luces, audio y OBS.",
    description: "Aplicación Windows que convierte eventos de Twitch en acciones sincronizadas.",
    technologies: ["C#", ".NET", "WPF", "Twitch EventSub", "OBS", "Arduino"],
    image: {
      src: "assets/portfolio/projects/neo-twitch-cover.webp",
      alt: "Panel principal de Neo Twitch mostrando reglas y estado de conexiones"
    },
    href: "proyectos/neo-twitch.html",
    externalUrl: "https://github.com/Dafovi/NeoTwtich",
    status: "public",
    notes: ""
  }
];
```

Los datos deben permitir agregar un proyecto sin editar manualmente múltiples secciones del HTML.

---

## 8. Assets que Daniel debe preparar

| Asset | Formato/recomendación | Estado |
|---|---|---|
| Foto profesional opcional | 1200×1500, fondo simple, WebP | TODO |
| Hero/OG cover | 1200×630 | TODO |
| Neo Twitch cover | 1600×1000; UI legible | TODO |
| Neo Twitch GIF | 1200px ancho, menos de 8MB | TODO |
| Aircraft Towing cover | 1600×1000, autorizado | TODO |
| VR Training covers | 1600×1000, autorizado | TODO |
| Mycelium cover y gameplay | 1600×1000 + GIF | TODO |
| Technical prototypes | capturas propias sin assets restringidos | TODO |
| CV PDF | `assets/cv/Daniel-Florez-CV.pdf` | TODO |
| Links públicos | correo, LinkedIn, Itch.io | TODO confirmar |

Mientras falten assets, usar bloques de color con gradientes y texto “Captura de proyecto pendiente”, no imágenes falsas.

---

## 9. Criterios de aceptación

La entrega estará lista cuando:
- [ ] El hero comunica rol, experiencia y especialidades sin decir “Unity Developer” como única identidad.
- [ ] El contenido relevante se entiende en menos de 20 segundos.
- [ ] Neo Twitch, Aircraft Towing VR, VR Training y Mycelium se destacan.
- [ ] Los trabajos de 2018–2021 aparecen como selección, no dominan el portfolio.
- [ ] Hay filtro funcional y accesible de proyectos.
- [ ] No hay Bootstrap ni dependencias innecesarias activas.
- [ ] El sitio se ve correcto en 320px, 768px, 1024px y 1440px.
- [ ] No hay video de fondo ni imágenes de stock.
- [ ] Todos los enlaces externos se abren de forma segura con `rel="noopener noreferrer"`.
- [ ] Se mantiene compatibilidad con GitHub Pages.
- [ ] La edición de proyectos está documentada.
- [ ] Los assets pendientes quedan explícitamente marcados, sin inventar contenido.

---

## 10. Diagnóstico del sitio anterior

El repositorio actual contiene una implementación basada en HTML, Bootstrap y una plantilla de 2023. La página principal mantiene un titular de “Unity con 4 años” y un hero con video de fondo. El contenido enumera muchos proyectos por categoría, pero no explica el reto, la contribución técnica o la relevancia de cada uno. Las dependencias y estructura actuales hacen que actualizar proyectos sea manual y repetitivo.

La actualización debe conservar el valor del archivo histórico, pero sustituir su presentación por una narrativa de carrera actual: **desarrollador de experiencias interactivas con Unity como fortaleza central y capacidad demostrable para construir productos conectados.**
