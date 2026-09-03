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
    i18n: {
      en: {
        label: "Desktop tool",
        description: "Automation for alerts, lights, audio, and OBS from Twitch events."
      },
      ja: {
        label: "デスクトップツール",
        description: "Twitchイベントからアラート、照明、音声、OBSを自動化。"
      }
    },
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
    i18n: {
      en: {
        label: "VR simulation",
        description: "Immersive aircraft towing simulation."
      },
      ja: {
        label: "VRシミュレーション",
        description: "航空機牽引の没入型シミュレーション。"
      }
    },
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
    i18n: {
      en: {
        label: "XR training suite",
        description: "Immersive simulator suite for aviation training, procedures, technical validations, assessment, and collaboration."
      },
      ja: {
        label: "XRトレーニングスイート",
        description: "航空訓練、手順、技術検証、評価、共同作業のための没入型シミュレータースイート。"
      }
    },
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
    i18n: {
      en: {
        title: "Energy Transition AR — RENATA / ANH",
        label: "Institutional augmented reality",
        description: "A series of four AR apps explaining energy transition technologies in Colombia through 3D visualization and real-time interaction."
      },
      ja: {
        title: "エネルギー転換AR — RENATA / ANH",
        label: "公共向け拡張現実",
        description: "3Dビジュアライゼーションとリアルタイムインタラクションでコロンビアのエネルギー転換技術を説明する4つのARアプリ。"
      }
    },
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
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Commercial PC game",
        description: "Commercial PC game published on Steam, with work on gameplay, internal tools, refactoring, and optimization."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "商用PCゲーム",
        description: "Steamで公開された商用PCゲーム。ゲームプレイ、内部ツール、リファクタリング、最適化に関わりました。"
      }
    },
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
    i18n: {
      en: {
        period: "In development",
        label: "R&D / .NET and AI architecture",
        description: "Personal research platform with provider-based architecture, deterministic contracts, health checks, and tests."
      },
      ja: {
        period: "開発中",
        label: "R&D / .NET・AIアーキテクチャ",
        description: "プロバイダー単位のアーキテクチャ、決定的な契約、ヘルスチェック、テストを備えた個人研究プラットフォーム。"
      }
    },
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
    i18n: {
      en: {
        label: "Global Game Jam",
        description: "Game developed during Global Game Jam."
      },
      ja: {
        label: "Global Game Jam",
        description: "Global Game Jamで開発されたゲーム。"
      }
    },
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
    i18n: {
      en: {
        label: "VR / Training",
        description: "VR experiences for training, tours, and soft skills."
      },
      ja: {
        label: "VR / トレーニング",
        description: "トレーニング、ツアー、ソフトスキル向けのVR体験。"
      }
    },
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
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Industrial VR simulation",
        description: "Industrial VR technical training simulator related to the PT6 turboprop engine for Meta Quest 3 and Pico."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "産業VRシミュレーション",
        description: "Meta Quest 3とPico向け、PT6ターボプロップエンジンに関連する産業VR技術訓練シミュレーター。"
      }
    },
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
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Collaborative platform / VR",
        description: "Collaborative platform for virtual meetings and immersive collaboration."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "コラボレーションプラットフォーム / VR",
        description: "バーチャル会議と没入型コラボレーションのための共同作業プラットフォーム。"
      }
    },
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
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Educational VR simulation",
        description: "Interactive 3D eye anatomy simulation for educational or technical contexts."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "教育向けVRシミュレーション",
        description: "教育または技術的な文脈向けの、目の解剖学インタラクティブ3Dシミュレーション。"
      }
    },
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
    i18n: {
      en: {
        label: "Rhythm game / R&D",
        description: "Rhythm game built end to end, including music synchronization, input detection, scoring, and game flow."
      },
      ja: {
        label: "リズムゲーム / R&D",
        description: "音楽同期、入力検出、スコアリング、ゲームフローまで一貫して開発したリズムゲーム。"
      }
    },
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
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Game Jam / narrative",
        description: "Narrative game jam experience with emphasis on audio design, accessibility, and atmosphere."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "ゲームジャム / ナラティブ",
        description: "音響デザイン、アクセシビリティ、雰囲気を重視したゲームジャムのナラティブ体験。"
      }
    },
    technologies: ["Unity", "C#", "Audio", "Accessibility"],
    image: { src: "", alt: "Captura pendiente de Respira" },
    href: "proyectos/respira.html",
    sourceUrl: "",
    status: "archive",
    notes: "TODO: confirmar periodo, evento y aporte específico."
  },
  {
    id: "nyan-cat-vs-doge",
    title: "Nyan Cat vs. Doge",
    categories: ["games", "webgl"],
    order: 16,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "HTML5 / Unity",
    description: "Shoot'em up 2D publicado en Itch.io como juego HTML5 y jugable desde navegador.",
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "HTML5 / Unity",
        description: "2D shoot'em up published on Itch.io as an HTML5 game and playable in browser."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "HTML5 / Unity",
        description: "Itch.ioでHTML5ゲームとして公開され、ブラウザで遊べる2Dシューティング。"
      }
    },
    technologies: ["Unity", "C#", "WebGL", "HTML5"],
    image: { src: "img/Nyancat.png", alt: "Imagen de Nyan Cat vs. Doge" },
    href: "proyectos/nyancat.html",
    sourceUrl: "https://dafovi.itch.io/nyancat",
    status: "playable",
    notes: "Build WebGL local disponible en Unity/NyanCat/. TODO: confirmar periodo y rol exacto."
  },
  {
    id: "state-machine",
    title: "State Machine",
    categories: ["games", "tools", "webgl"],
    order: 17,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Prototipo técnico / Unity WebGL",
    description: "Demo jugable de máquina de estados con inspiración en sistemas tipo Factorio.",
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Technical prototype / Unity WebGL",
        description: "Playable state-machine demo inspired by Factorio-like systems."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "技術プロトタイプ / Unity WebGL",
        description: "Factorio風システムに着想を得た、状態機械のプレイアブルデモ。"
      }
    },
    technologies: ["Unity", "C#", "WebGL", "State machines"],
    image: { src: "img/StateMachine.png", alt: "Imagen de State Machine" },
    href: "proyectos/statemachine.html",
    sourceUrl: "",
    status: "playable-prototype",
    notes: "Build WebGL local disponible en Unity/StateMachine/. TODO: confirmar fecha y alcance."
  },
  {
    id: "hanabi-matsuri",
    title: "Hanabi Matsuri",
    categories: ["games", "webgl", "prototype"],
    order: 18,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Prototipo VFX / JSON",
    description: "Prototipo Unity de partículas, VFX y guardado de configuración con JSON.",
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "VFX / JSON prototype",
        description: "Unity prototype for particles, VFX, and JSON-based configuration saving."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "VFX / JSONプロトタイプ",
        description: "パーティクル、VFX、JSONベースの設定保存を扱うUnityプロトタイプ。"
      }
    },
    technologies: ["Unity", "C#", "VFX", "JSON", "WebGL"],
    image: { src: "img/hanabi.png", alt: "Imagen de Hanabi Matsuri" },
    href: "proyectos/hanabi.html",
    sourceUrl: "",
    status: "playable-prototype",
    notes: "Build WebGL local disponible en Unity/HanabiMatsuri/. La página antigua reportaba problemas visuales de compatibilidad."
  },
  {
    id: "pixel-survival",
    title: "Pixel Survival",
    categories: ["games"],
    order: 19,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Survival / Windows",
    description: "Juego survival 2D para Windows publicado en Itch.io, con aliados, oleadas y progresión.",
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "Survival / Windows",
        description: "2D survival game for Windows published on Itch.io, with allies, waves, and progression."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "サバイバル / Windows",
        description: "Itch.ioで公開されたWindows向け2Dサバイバルゲーム。仲間、ウェーブ、進行要素があります。"
      }
    },
    technologies: ["Unity", "C#", "2D", "Pixel Art"],
    image: { src: "img/PixelSurvival.png", alt: "Imagen de Pixel Survival" },
    href: "proyectos/pixelsurvival.html",
    sourceUrl: "https://dafovi.itch.io/pixel-survival",
    status: "downloadable",
    notes: "Itch.io lo marca en pausa. TODO: confirmar periodo y si conviene migrar a página nueva."
  },
  {
    id: "escape-from-infinity",
    title: "Escape from Infinity",
    categories: ["games"],
    order: 20,
    featured: false,
    period: "TODO: confirmar periodo",
    label: "Juego 3D / Windows",
    description: "Proyecto 3D de horror y puzzles para Windows publicado en Itch.io como trabajo universitario.",
    i18n: {
      en: {
        period: "TODO: confirm period",
        label: "3D game / Windows",
        description: "3D horror and puzzle project for Windows published on Itch.io as a university assignment."
      },
      ja: {
        period: "TODO: 期間確認",
        label: "3Dゲーム / Windows",
        description: "大学課題としてItch.ioで公開された、Windows向け3Dホラー・パズルプロジェクト。"
      }
    },
    technologies: ["Unity", "C#", "3D", "Horror"],
    image: { src: "img/Escape.png", alt: "Imagen de Escape from Infinity" },
    href: "proyectos/escape.html",
    sourceUrl: "https://dafovi.itch.io/escape-from-infinity",
    status: "downloadable",
    notes: "TODO: confirmar periodo, rol exacto y si conviene migrar a página nueva."
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
    i18n: {
      en: {
        label: "Web / 360 / AR",
        description: "Selection of early 360 tours, AR applications, and interactive experiences."
      },
      ja: {
        label: "Web / 360 / AR",
        description: "初期の360ツアー、ARアプリ、インタラクティブ体験のセレクション。"
      }
    },
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
