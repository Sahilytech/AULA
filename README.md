# ✦ LUMI — AI Study Intelligence Hub

> **Plataforma de estudio moderna, multidioma, offline-first y orientada al estudiante.**
>
> Creada por **Sarah Lee Olivera** · **NubiWorks** · 2026

LUMI nace para resolver un problema cotidiano del sector estudiantil: tareas, apuntes, fechas, sesiones de estudio y herramientas educativas repartidas entre demasiadas aplicaciones.

La propuesta es convertir todo eso en un **Study OS**: planificar → estudiar → practicar → descansar → revisar el progreso, desde una sola experiencia.

## ✦ Funcionalidades

### Dashboard
- Centro de comando académico.
- Tareas y prioridades.
- Progreso semanal.
- Racha de estudio.
- Estadísticas rápidas.
- Accesos directos a los módulos.

### Study Lab
- Active Recall.
- Flashcards.
- Planes de estudio.
- Práctica guiada.
- Herramientas para transformar apuntes en actividades.

### Calendario
- Vista mensual.
- Eventos académicos.
- Entregas y exámenes.
- Agenda.
- Eventos guardados localmente.
- Navegación entre meses.

### Focus
- Temporizador de concentración.
- Pausar / continuar.
- Sesiones sin distracciones.
- Progreso local.

### Student Support
- Check-in académico.
- Pausas inteligentes.
- División de tareas grandes en pasos pequeños.
- Mensajes de apoyo para organizar el estudio.

### Personalización
- Tema oscuro.
- Tema claro.
- Hologramas y orbes animados.
- Glassmorphism.
- Responsive.
- Respeto por `prefers-reduced-motion`.

## 🌎 Idiomas

LUMI incluye internacionalización para:

- 🇪🇸 Español
- 🇬🇧 English
- 🇷🇺 Русский
- 🇧🇷 Português
- 🇯🇵 日本語
- 🇨🇳 中文

El idioma se detecta inicialmente según el navegador y luego queda guardado en el dispositivo. Se puede cambiar desde `🌐`.

## 📱 PWA + Offline-first

LUMI incluye:

- `manifest.json` para instalación como aplicación.
- `sw.js` para caché offline.
- Icono propio.
- Datos de tareas y preferencias almacenados localmente.
- Sin backend obligatorio.
- Sin base de datos externa obligatoria.

La primera carga necesita conexión para obtener los recursos; después, los recursos cacheados pueden utilizarse offline.

## 🧰 ¿Qué hay que instalar?

### Para usar LUMI
**Nada obligatorio.**

Podés abrir `index.html` en un navegador moderno o utilizar GitHub Pages.

### Para desarrollar
- Git.
- Un navegador moderno.
- Un editor como VS Code, Cursor o Zed.

No necesitás Node.js, npm, Python, React, Vite ni frameworks externos para el núcleo.

Para probar PWA/service worker localmente con Python:

```bash
python -m http.server 8080
```

Después abrí `http://localhost:8080`.

## ▶️ GitHub Pages

El proyecto incluye GitHub Actions en `.github/workflows/pages.yml`.

Cada `push` a `main` puede publicar automáticamente el sitio mediante GitHub Pages.

URL esperada:

`https://sahilytech.github.io/LUMI/`

## 🗂️ Estructura

```text
LUMI/
├── index.html
├── features.html
├── study.html
├── calendar.html
├── support.html
├── style.css
├── app.js
├── i18n.js
├── manifest.json
├── sw.js
├── assets/
│   └── lumi-icon.svg
├── .github/
│   └── workflows/
│       └── pages.yml
├── LICENSE
└── README.md
```

## 🎨 Interfaz

LUMI utiliza una identidad inspirada en HUD, hologramas, cyber-tech y glassmorphism, con:

- Orbes de luz.
- Anillos holográficos.
- Gradientes animados.
- Microinteracciones.
- Modales propios de LUMI en lugar de `alert()`/`prompt()` del navegador.
- Diseño responsive.
- Tema claro/oscuro persistente.
- Animaciones reducidas automáticamente cuando el sistema lo solicita.

## 🔐 Privacidad

LUMI está planteada como una experiencia local-first. Las tareas, preferencias y algunos datos de estudio se guardan en el almacenamiento del navegador.

No hay una cuenta obligatoria ni un servidor propio necesario para el núcleo de la aplicación.

## 🤖 IA

El núcleo de LUMI no requiere una API externa para funcionar. Las herramientas de estudio pueden evolucionar hacia integraciones inteligentes, pero la experiencia base sigue siendo utilizable sin claves privadas ni suscripciones.

La filosofía del proyecto es:

> **La IA ayuda a aprender; no reemplaza el aprendizaje.**

## ♿ Accesibilidad y rendimiento

- Responsive.
- Controles de teclado del navegador.
- `prefers-reduced-motion`.
- Sin dependencias obligatorias.
- Carga liviana.
- Contraste para temas claro y oscuro.

## 👩‍💻 Autora

**Sarah Lee Olivera**

LUMI es un proyecto personal desarrollado bajo **NubiWorks**, mini compañía/estudio indie de Sarah.

El proyecto explora producto digital, educación, IA, UX/UI y desarrollo web.

## 🚀 Roadmap

### Base
- [x] Dashboard
- [x] Tareas
- [x] Focus
- [x] Calendario
- [x] Study Lab
- [x] Student Support
- [x] Tema claro/oscuro
- [x] Interfaz holográfica

### Global
- [x] Español
- [x] English
- [x] Русский
- [x] Português
- [x] 日本語
- [x] 中文
- [x] Detección automática de idioma
- [x] PWA
- [x] Service Worker
- [x] GitHub Pages

### Próximas versiones
- [ ] IndexedDB para datos académicos avanzados.
- [ ] Sistema completo de materias.
- [ ] Editor de notas enriquecido.
- [ ] Flashcards con repetición espaciada.
- [ ] Planificador semanal inteligente.
- [ ] Estadísticas avanzadas.
- [ ] Importar/exportar backups.
- [ ] Onboarding personalizado.
- [ ] Modo examen.
- [ ] Widgets personalizables.

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consultá `LICENSE` para los términos completos.

---

**LUMI · Created by Sarah Lee Olivera · NubiWorks · 2026**