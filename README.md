# ✦ LUMI — Study OS

> **Una plataforma web de estudio simple, visual y funcional.**
>
> Creada por **Sarah Lee Olivera** · **NubiWorks** · 2026

LUMI reúne organización académica, aprendizaje activo y Focus en una sola web. Esta versión prioriza una experiencia estable y sencilla: **sin cuentas, sin APIs de IA y sin backend obligatorio**.

## ✦ Qué incluye

- Dashboard académico.
- Tareas con prioridades, completado y eliminación.
- Materias con docente y progreso.
- Notas editables.
- Calendario mensual con eventos.
- Flashcards.
- Repetición espaciada básica.
- Active Recall.
- Focus de 25 minutos.
- Registro de sesiones.
- Estadísticas de estudio.
- Heatmap de los últimos 7 días.
- Exportar/importar la base `.sqlite`.
- Tema claro/oscuro.
- Español, inglés, portugués, ruso, japonés y chino.
- PWA instalable.
- Interfaz holográfica con animaciones suaves.
- `prefers-reduced-motion` para accesibilidad.
- Modales propios: las acciones de LUMI no usan `alert()` ni `prompt()` del navegador.

## 🧠 LUMI Core

El Assistant actual es **local y determinista**. No necesita una API.

Puede interpretar solicitudes relacionadas con:

- tareas y prioridades;
- exámenes y planificación;
- notas y apuntes;
- flashcards y Active Recall;
- sesiones Focus.

También puede utilizar las tareas y eventos que ya existen en la base local para generar recomendaciones básicas.

No se presenta como un LLM: es un motor académico local rápido y predecible.

## 🗃️ SQLite en el navegador

LUMI utiliza **sql.js**, que ejecuta SQLite mediante WebAssembly en el navegador.

La base contiene:

```text
tasks
subjects
notes
cards
events
sessions
```

La copia de la base se conserva localmente y se puede descargar como:

```text
lumi.sqlite
```

También podés importar una copia anterior.

## 🎓 Flujo de estudio

```text
Materia
   ↓
Tarea / Evento
   ↓
Nota
   ↓
Flashcards
   ↓
Active Recall
   ↓
Focus
   ↓
Sesión registrada
   ↓
Progreso
```

## 🎴 Repetición espaciada

Cada flashcard guarda:

- pregunta;
- respuesta;
- fecha de próximo repaso;
- intervalo;
- cantidad de revisiones.

Durante un repaso podés marcar:

- **De nuevo** → vuelve a un intervalo corto.
- **Difícil** → aumenta poco el intervalo.
- **Bien** → aumenta más el intervalo.

## 🌎 Idiomas

LUMI está preparado para:

- 🇪🇸 Español
- 🇬🇧 English
- 🇧🇷 Português
- 🇷🇺 Русский
- 🇯🇵 日本語
- 🇨🇳 中文

La selección queda guardada en el navegador.

## 🎨 Interfaz

La UI utiliza un lenguaje visual de **Study OS holográfico**:

- glassmorphism;
- orbes ambientales;
- anillos holográficos;
- gradientes;
- microinteracciones;
- tarjetas animadas;
- transiciones suaves;
- responsive móvil;
- dark/light;
- reducción automática de movimiento cuando el sistema lo solicita.

## 📦 Instalación

Para **usar LUMI**, no necesitás instalar SQLite, Node, Python ni una aplicación adicional.

Si abrís la versión publicada en GitHub Pages, solamente necesitás un navegador moderno.

Para ejecutar una copia local con Git:

```bash
git clone https://github.com/Sahilytech/LUMI.git
cd LUMI
```

Podés usar cualquier servidor estático local. Por ejemplo, si tenés Python:

```bash
python -m http.server 8080
```

Después abrí:

```text
http://localhost:8080/
```

No abras directamente `file://` si querés utilizar la PWA o el Service Worker.

## 📱 PWA

LUMI incluye `manifest.json` y `sw.js`.

La versión publicada puede instalarse desde un navegador compatible y utilizar la interfaz con comportamiento de aplicación.

## 🔒 Privacidad

Esta versión no tiene cuentas ni servidor propio.

Los datos académicos se guardan localmente en el navegador. Si eliminás los datos del sitio o cambiás de dispositivo, usá **Exportar .sqlite** para conservar una copia.

No hay API keys en el frontend.

## 🏗️ Estructura principal

```text
LUMI/
├── index.html          # aplicación principal
├── style.css           # sistema visual
├── app.js              # interacción y módulos
├── sqlite-db.js        # base SQLite local
├── lumi-core.js        # inteligencia académica local
├── manifest.json       # PWA
├── sw.js               # caché/offline
├── assets/
├── .github/workflows/  # GitHub Actions
├── LICENSE
└── README.md
```

El repositorio conserva algunas páginas/prototipos anteriores para referencia, pero **`index.html` es la experiencia principal actual**.

## 🚀 GitHub Pages

El proyecto está preparado para despliegue estático mediante GitHub Actions.

GitHub Pages solamente necesita servir los archivos del frontend; no hay backend obligatorio para esta versión.

## 🧪 Principios del proyecto

1. Primero funciona.
2. Después se agrega complejidad.
3. Los datos del estudiante pertenecen al estudiante.
4. Las animaciones deben mejorar la experiencia, no distraer.
5. LUMI debe seguir siendo usable en una computadora común y en un celular.
6. No se requieren ventanas externas para acciones normales de la aplicación.

## 👩‍💻 Autora

**Sarah Lee Olivera**

LUMI es un proyecto personal creado bajo **NubiWorks**, mini compañía/estudio indie de Sarah.

## 📄 Licencia

LUMI se distribuye bajo **MIT**. Consultá `LICENSE` para los términos completos.

---

**LUMI · Created by Sarah Lee Olivera · NubiWorks · 2026**
