/* Fuente estructurada de proyectos. El contenido crítico del home queda en HTML para funcionar sin JavaScript. */
window.PORTFOLIO_PROJECTS = [
  {
    id: "neo-twitch",
    title: "Neo Twitch",
    categories: ["tools", "applications"],
    order: 1,
    featured: true,
    period: "2025–2026",
    label: "Herramienta de escritorio",
    description: "Automatización de alertas, luces, audio y OBS desde eventos de Twitch.",
    technologies: ["C#", ".NET", "WPF", "Twitch EventSub", "OBS", "Arduino"],
    image: {
      src: "",
      alt: "Captura de Neo Twitch pendiente"
    },
    href: "proyectos/neo-twitch.html",
    sourceUrl: "https://github.com/Dafovi/NeoTwtich",
    status: "public",
    notes: "TODO: asset: captura real del dashboard sin datos sensibles."
  },
  {
    id: "aircraft-towing-vr",
    title: "Aircraft Towing VR",
    categories: ["xr", "simulation"],
    order: 5,
    featured: false,
    period: "2022–2023",
    label: "Simulación VR",
    description: "Simulación inmersiva de remolque de aeronaves.",
    technologies: ["Unity", "C#", "Meta Quest", "VR"],
    image: {
      src: "assets/portfolio/covers/aircraft-towing-vr.png",
      alt: "Captura de Aircraft Towing VR con remolque de aeronave en entorno de simulación"
    },
    href: "proyectos/aircraft-towing-vr.html",
    sourceUrl: "",
    status: "case-study",
    notes: "TODO: confirmar material que puede mostrarse públicamente."
  },
  {
    id: "aviation-training-suite",
    title: "Aviation Training Suite",
    categories: ["xr", "simulation"],
    order: 3,
    featured: true,
    period: "2021–2025",
    label: "Suite XR de entrenamiento",
    description: "Suite de simuladores inmersivos para entrenamiento aeronáutico, procedimientos, validaciones técnicas, evaluación y colaboración.",
    technologies: ["Unity", "C#", "OpenXR", "XR Interaction Toolkit", "Meta Quest", "Pico"],
    image: {
      src: "",
      alt: "Captura pendiente de Aviation Training Suite"
    },
    href: "proyectos/aviation-training-suite.html",
    sourceUrl: "",
    status: "case-study",
    notes: "TODO: asset: confirmar capturas autorizadas. El CV menciona más de 200 tareas técnicas interactivas en la suite XR."
  },
  {
    id: "renata-anh-webar",
    title: "Transición Energética AR — RENATA / ANH",
    categories: ["ar", "applications"],
    order: 2,
    featured: true,
    period: "2025",
    label: "Realidad aumentada institucional",
    description: "Serie de cuatro aplicaciones AR para explicar tecnologías de transición energética en Colombia mediante visualización 3D e interacción en tiempo real.",
    technologies: ["Unity", "C#", "AR Foundation", "Modelos 3D"],
    image: {
      src: "",
      alt: "Captura pendiente de Transformación Energética Colombia"
    },
    href: "proyectos/renata-anh-webar.html",
    sourceUrl: "",
    status: "case-study",
    notes: "TODO: asset: confirmar capturas autorizadas y nombres públicos de cada aplicación."
  },
  {
    id: "mad-sarge-army-moves",
    title: "Mad Sarge / Army Moves Overdrive",
    categories: ["games"],
    order: 14,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Videojuego comercial para PC",
    description: "Videojuego comercial para PC publicado en Steam con trabajo en gameplay, herramientas internas, refactorización y optimización.",
    technologies: ["Unity", "C#", "PC", "Steam"],
    image: {
      src: "",
      alt: "Captura pendiente de Mad Sarge / Army Moves Overdrive"
    },
    href: "proyectos/mad-sarge-army-moves-overdrive.html",
    sourceUrl: "",
    status: "case-study-candidate",
    notes: "TODO: confirmar nombre final público, enlace Steam, periodo y responsabilidades exactas."
  },
  {
    id: "dafovi-ai-lab",
    title: "Dafovi.AI.Lab",
    categories: ["tools", "applications"],
    order: 15,
    featured: false,
    period: "En desarrollo",
    label: "R&D / arquitectura .NET e IA",
    description: "Plataforma personal de investigación con arquitectura por providers, contratos deterministas, health checks y pruebas.",
    technologies: [".NET", "C#", "APIs", "LLMs", "NVIDIA NIM", "Tests"],
    image: {
      src: "",
      alt: "Captura pendiente de Dafovi.AI.Lab"
    },
    href: "proyectos/dafovi-ai-lab.html",
    sourceUrl: "",
    status: "work-in-progress",
    notes: "TODO: confirmar qué partes del repositorio o arquitectura se pueden mostrar públicamente."
  },
  {
    id: "mycelium",
    title: "Mycelium",
    categories: ["games"],
    order: 13,
    featured: false,
    period: "2023",
    label: "Global Game Jam",
    description: "Juego desarrollado en Global Game Jam.",
    technologies: ["Unity", "C#", "Game Jam"],
    image: {
      src: "assets/portfolio/covers/mycelium.png",
      alt: "Captura del juego Mycelium de Global Game Jam 2023"
    },
    href: "proyectos/mycelium.html",
    sourceUrl: "https://dafovi.itch.io/mycelium",
    status: "public",
    notes: "TODO: confirmar aporte específico de Daniel."
  },
  {
    id: "vr-training",
    title: "VR Training Experiences",
    categories: ["xr", "simulation"],
    order: 8,
    featured: false,
    period: "2021–2022",
    label: "VR / Formación",
    description: "Experiencias VR para entrenamiento, recorridos y habilidades blandas.",
    technologies: ["Unity", "C#", "Meta Quest", "Pico", "VR UI"],
    image: {
      src: "assets/portfolio/covers/vr-training.png",
      alt: "Captura de experiencia VR de formación"
    },
    href: "proyectos/vr-training.html",
    sourceUrl: "",
    status: "case-study",
    notes: "TODO: seleccionar 2-3 imágenes autorizadas."
  },
  {
    id: "pt6-turboprop-training",
    title: "PT6 Turboprop Engine Training Simulator",
    categories: ["xr", "simulation"],
    order: 9,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Simulación industrial VR",
    description: "Simulador industrial VR de entrenamiento técnico relacionado con motor turbohélice PT6 para Meta Quest 3 y Pico.",
    technologies: ["Unity", "C#", "Meta Quest 3", "Pico", "VR"],
    image: { src: "", alt: "Captura pendiente de PT6 Turboprop Engine Training Simulator" },
    href: "proyectos/pt6-turboprop-engine-training.html",
    sourceUrl: "",
    status: "selected",
    notes: "TODO: confirmar periodo, permisos públicos y alcance exacto."
  },
  {
    id: "cinav",
    title: "CINAV",
    categories: ["xr", "applications"],
    order: 10,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Plataforma colaborativa / VR",
    description: "Plataforma colaborativa para reuniones virtuales y colaboración inmersiva.",
    technologies: ["Unity", "VR/XR", "Interacción multiusuario"],
    image: { src: "", alt: "Captura pendiente de CINAV" },
    href: "proyectos/cinav.html",
    sourceUrl: "",
    status: "selected",
    notes: "TODO: confirmar periodo, alcance técnico y assets."
  },
  {
    id: "eye-anatomy-simulator",
    title: "Eye Anatomy Simulator",
    categories: ["xr", "simulation"],
    order: 11,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Simulación educativa VR",
    description: "Simulación 3D interactiva de anatomía del ojo para contexto educativo/técnico.",
    technologies: ["Unity", "C#", "VR/XR"],
    image: { src: "", alt: "Captura pendiente de Eye Anatomy Simulator" },
    href: "proyectos/eye-anatomy-simulator.html",
    sourceUrl: "",
    status: "selected",
    notes: "TODO: confirmar periodo, permisos públicos y rol concreto."
  },
  {
    id: "beatmobile",
    title: "BeatMobile",
    categories: ["games"],
    order: 4,
    featured: true,
    period: "TODO: confirmar periodo",
    label: "Juego rítmico / I+D",
    description: "Videojuego rítmico desarrollado de extremo a extremo, incluyendo sincronización musical, detección de entrada, puntuación y flujo de juego.",
    technologies: ["Unity", "C#", "Audio", "Gameplay systems"],
    image: { src: "", alt: "Captura pendiente de BeatMobile" },
    href: "proyectos/beatmobile.html",
    sourceUrl: "",
    status: "selected",
    notes: "TODO: confirmar periodo, assets y enlaces públicos."
  },
  {
    id: "respira",
    title: "Respira",
    categories: ["games"],
    order: 13,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Game Jam / narrativa",
    description: "Experiencia narrativa de game jam con énfasis en diseño auditivo, accesibilidad y atmósfera.",
    technologies: ["Unity", "C#", "Audio", "Accessibility"],
    image: { src: "", alt: "Captura pendiente de Respira" },
    href: "proyectos/respira.html",
    sourceUrl: "",
    status: "archive",
    notes: "TODO: confirmar periodo, evento y aporte específico."
  },
  {
    id: "archive",
    title: "Archivo histórico",
    categories: ["web-360", "ar", "archive"],
    order: 30,
    featured: false,
    period: "2018–2021",
    label: "Web / 360 / AR",
    description: "Selección de recorridos 360, aplicaciones AR y experiencias interactivas tempranas.",
    technologies: ["Unity", "AR", "Web 360", "Interactive media"],
    image: {
      src: "",
      alt: "Captura pendiente del archivo histórico"
    },
    href: "proyectos/archive.html",
    sourceUrl: "",
    status: "grouped",
    notes: "TODO: confirmar nombre, tipo y año de cada trabajo del archivo."
  }
];
