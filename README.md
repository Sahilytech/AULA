# LUMI — Learning Garden

> **Un espacio de estudio interactivo para aprender, practicar, leer y jugar.**
>
> Sarah Lee Olivera · NubiWorks · 2026

LUMI es una web educativa local-first. Reúne material de estudio, juegos, lectura y comprensión de documentos, biblioteca de audio, notas, materias, agenda y Focus en una sola interfaz.

## ✦ Qué incluye

### Aprendizaje
- **PDF → Trivia:** extracción local de texto y creación determinista de preguntas.
- **Quiz rápido:** preguntas de opción múltiple, progreso, feedback y puntaje.
- **Quiz de apuntes:** utiliza notas guardadas para crear desafíos.
- **Memoria:** práctica con pares y flashcards.
- **Misión Focus:** temporizador ajustable con pausa, reinicio y progreso.

### Biblioteca
- Biblioteca de audio y audiolibros.
- Playlists creadas por el usuario.
- Un único reproductor dentro de la Biblioteca.
- Organización de material PDF por materia.
- Lectura de documentos desde la misma experiencia de estudio.

### LUMI Brain — lectura y comprensión
- Carga local de **PDF, TXT, MD y CSV**.
- Extracción de texto en el navegador.
- Detección de conceptos frecuentes.
- Selección de fragmentos relevantes para un resumen.
- Preguntas básicas de comprensión.
- Vista del texto completo para lectura.
- No necesita enviar el documento a una IA externa.

> La comprensión es un sistema local de apoyo al estudio. No reemplaza una revisión humana y no pretende interpretar de forma perfecta documentos escaneados o PDFs sin texto seleccionable.

### Organización académica
- Notas locales.
- Materias y progreso.
- Calendario mensual.
- Exámenes y recordatorios.
- Alertas visuales y, con permiso, Notifications API.
- Persistencia local mediante SQLite/WebAssembly.

## 🌎 Idiomas

La interfaz admite:

- Español
- English
- Português
- Русский
- 日本語
- 中文

La selección de idioma se conserva localmente. Los textos dinámicos de Juegos y LUMI Brain también se contemplan dentro del sistema de traducción.

## 🔒 Privacidad y arquitectura local-first

El objetivo de LUMI es que el material de estudio permanezca en el dispositivo siempre que sea posible.

```text
Documento
   ↓
Navegador
   ↓
Extracción local
   ↓
Análisis / preguntas / resumen
   ↓
Experiencia de estudio
```

No se necesita una cuenta para utilizar la experiencia principal y no se requieren API keys para PDF → Trivia o LUMI Brain.

La información académica se guarda localmente mediante `sql.js` / SQLite en WebAssembly.

## 🧩 Estructura

```text
LUMI/
├── index.html                 # experiencia principal
├── style.css                  # base visual
├── lumi-polish.css            # ajustes visuales
├── lumi-library.css/js        # Biblioteca
├── lumi-games.css/js          # Juegos
├── lumi-games-pro.css         # capa visual de Juegos
├── lumi-professional.css      # acabado general
├── lumi-brain.css/js          # lectura y comprensión
├── lumi-language.js            # traducciones dinámicas
├── lumi-core.js               # lógica compartida
├── lumi-runtime.js            # runtime
├── app.js                     # aplicación principal
├── sqlite-db.js               # persistencia local
├── manifest.json              # PWA
├── assets/                    # identidad visual
├── backend/                   # backend opcional
└── .github/workflows/         # validación y GitHub Pages
```

`index.html` es la experiencia principal. El repositorio conserva algunos módulos y prototipos históricos, pero la navegación actual está centralizada en la página principal.

## 🚀 Ejecutar localmente

No necesitás instalar SQLite ni una API para probar la experiencia frontend.

```bash
git clone https://github.com/Sahilytech/LUMI.git
cd LUMI
python -m http.server 8080
```

Después abrí:

```text
http://localhost:8080/
```

Se recomienda usar un servidor local en lugar de `file://` para que funcionen correctamente las APIs del navegador, la PWA y los módulos ES utilizados por la lectura de PDF.

## 📱 Responsive

La interfaz está preparada para:

- escritorio;
- notebook;
- tablet;
- celular.

En pantallas pequeñas la navegación pasa a una barra inferior y las áreas de Biblioteca, Juegos y Brain se reorganizan para conservar el contenido legible.

## 🎨 Diseño

LUMI utiliza una dirección visual **japonesa/minimalista tipo Learning Garden**:

- papel cálido;
- rosa y rojo apagados;
- tipografía editorial;
- formas suaves;
- microinteracciones discretas;
- dark mode;
- `prefers-reduced-motion`;
- foco en legibilidad y jerarquía.

La interfaz busca sentirse como una herramienta de estudio real, no como un dashboard saturado.

## 🔔 Alertas

Los eventos de Agenda pueden marcarse como exámenes o recordatorios. LUMI puede mostrar alertas dentro de la web y solicitar permisos para notificaciones del navegador.

> Las notificaciones web dependen de permisos, navegador y contexto de ejecución. Una web estática no puede garantizar una alarma del sistema cuando el navegador está completamente cerrado.

## 🧪 Validación

El repositorio incluye GitHub Actions para comprobar la sintaxis de los módulos frontend y del backend Node.

Antes de publicar cambios, conviene probar:

1. carga inicial;
2. cambio de idioma;
3. modo claro/oscuro;
4. Biblioteca y reproducción;
5. los cuatro juegos;
6. carga de PDF/TXT/MD/CSV en LUMI Brain;
7. creación de notas y eventos;
8. responsive en una pantalla pequeña.

## 📌 Limitaciones conocidas

- Un PDF escaneado como imagen puede no contener texto extraíble.
- La generación local de preguntas es determinista y no equivale a un modelo generativo.
- Las notificaciones dependen de las capacidades y permisos del navegador.
- La lectura de documentos grandes puede requerir más memoria del dispositivo.

## 👩‍💻 Autora

**Sarah Lee Olivera**

**NubiWorks**

## 📄 Licencia

MIT License.

---

**LUMI · Learn softly. Play often. · NubiWorks · 2026**
