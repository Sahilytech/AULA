# ✦ LUMI — Learning Garden

> **Una web de aprendizaje interactiva, tranquila y divertida.**
>
> Creada por **Sarah Lee Olivera** · **NubiWorks** · 2026

LUMI dejó de ser un simple administrador de tareas. La idea ahora es que el estudiante pueda **aprender, practicar y jugar** en el mismo espacio.

## 🌸 Qué puede hacer LUMI

### Aprendizaje
- PDF → trivia de preguntas y respuestas.
- Generación local de preguntas a partir del texto extraído del PDF.
- Quiz rápido con apuntes guardados.
- Juego de memoria con flashcards.
- Repetición espaciada.
- Active Recall.
- Misión Focus.

### Material de estudio
- Notas locales.
- Materias con progreso.
- Color personalizado por materia.
- Calendario.
- Eventos y exámenes.
- Exportación/importación SQLite.

### Alertas
- Recordatorios dentro de LUMI.
- Alertas suaves para exámenes cercanos.
- Avisos del sistema mediante la API de Notifications cuando el usuario los permite.
- Indicador visual cuando hay eventos próximos.
- Temporizador Focus.

> Los avisos programados dependen de que la web/PWA esté activa y de los permisos del navegador. Una web estática no puede garantizar un despertador del sistema cuando el navegador está completamente cerrado.

## 🌎 Idiomas

La interfaz tiene traducciones para **todos los textos principales**, incluyendo navegación, títulos, botones, tarjetas, juegos, formularios, calendarios, mensajes y estados:

- 🇪🇸 Español
- 🇬🇧 English
- 🇧🇷 Português
- 🇷🇺 Русский
- 🇯🇵 日本語
- 🇨🇳 中文

La preferencia queda guardada localmente.

## 📄 PDF → Trivia

El navegador lee el PDF directamente con PDF.js y extrae su texto. LUMI no manda el documento a una IA externa.

Flujo:

```text
PDF
 ↓
Extracción local de texto
 ↓
Segmentación de contenido
 ↓
Preguntas de completar
 ↓
Opciones múltiples
 ↓
Juego
 ↓
Puntaje
```

La generación es **local y determinista**. No pretende reemplazar una IA generativa: su objetivo es ofrecer una herramienta gratuita, privada y funcional sin API key.

## 🗃️ Datos

LUMI usa `sql.js` para ejecutar SQLite/WebAssembly en el navegador.

La información académica permanece local:

```text
tasks
subjects
notes
cards
events
sessions
```

No se requiere cuenta ni servidor.

## 📱 Responsive

La interfaz está pensada para:

- computadora;
- notebook;
- tablet;
- celular.

En pantallas pequeñas aparece una navegación inferior táctil y las tarjetas se reorganizan automáticamente.

## 🎨 Diseño

La identidad visual actual es un **Learning Garden japonés/minimalista**:

- papel cálido;
- rojo japonés suave;
- serif editorial;
- formas orgánicas;
- mascota LUMI kawaii;
- flores y hojas sutiles;
- microinteracciones lentas;
- transiciones suaves;
- dark mode;
- reducción de movimiento con `prefers-reduced-motion`.

La animación está diseñada para acompañar el estudio y no competir con él.

## 🔔 Alertas de exámenes

Cuando agregás un evento cuyo nombre parece un examen —por ejemplo `Examen de Historia`— LUMI detecta automáticamente si está cerca y muestra una alerta visual.

También podés activar notificaciones del sistema desde **Agenda → Activar avisos**.

## 🚀 Uso

No necesitás instalar SQLite, Node ni una API.

La versión publicada en GitHub Pages funciona desde un navegador moderno.

Para una copia local:

```bash
git clone https://github.com/Sahilytech/LUMI.git
cd LUMI
python -m http.server 8080
```

Abrí:

```text
http://localhost:8080/
```

No uses `file://` si querés PWA, Service Worker o APIs web con restricciones de origen.

## 🏗️ Estructura principal

```text
LUMI/
├── index.html
├── style.css
├── app.js
├── sqlite-db.js
├── lumi-core.js
├── manifest.json
├── sw.js
├── assets/
├── .github/workflows/
├── LICENSE
└── README.md
```

El repositorio conserva prototipos anteriores, pero **`index.html` es la experiencia principal**.

## 🔒 Privacidad

La versión Learning Garden no necesita una API de IA externa para crear las trivias. Los PDFs se procesan en el navegador.

No hay API keys en el frontend.

## 👩‍💻 Autora

**Sarah Lee Olivera**

**NubiWorks**

## 📄 Licencia

MIT License.

---

**LUMI · Learn softly. Play often. · NubiWorks · 2026**
