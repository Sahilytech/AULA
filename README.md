# ✦ LUMI — AI Academic OS

> **Una plataforma de estudio internacional que convierte planificación, aprendizaje, práctica y progreso en una sola experiencia.**
>
> Creada por **Sarah Lee Olivera** · **NubiWorks** · 2026

LUMI está diseñada como un **Academic OS**: tareas, materias, calendario, notas, flashcards, Focus, estadísticas y un asistente inteligente conectado a la experiencia académica.

## ✦ Arquitectura

```text
LUMI Frontend / PWA
        │
        ├── Academic OS
        ├── Calendar + Planner
        ├── Notes + Flashcards
        ├── Focus + Exam Mode
        ├── i18n
        └── Widgets
        │
        ├── Local engine + IndexedDB
        │
        └── LUMI Cloud (optional online mode)
                 ├── Supabase Auth / Sync
                 └── Secure AI Gateway → OpenRouter
```

La clave de OpenRouter **nunca** debe estar en el frontend. El backend mantiene el secreto y aplica límites de tamaño y frecuencia.

## 🧠 LUMI Assistant

LUMI tiene dos capas:

- **LUMI Core:** motor local determinista para detectar intenciones de tareas, calendario, notas, Focus y repaso.
- **LUMI Online:** cuando se configura el backend, el Assistant puede usar un modelo generativo mediante OpenRouter.

Puede ayudar a:
- Explicar conceptos.
- Resumir apuntes.
- Generar preguntas y flashcards.
- Crear planes de estudio.
- Dividir tareas grandes.
- Preparar simulacros.
- Organizar una semana académica.

La IA está pensada para **potenciar el aprendizaje, no reemplazar el trabajo del estudiante**.

## 📚 Academic OS

- Materias y objetivos.
- Tareas y prioridades.
- Notas locales.
- Flashcards.
- Repetición espaciada.
- Active Recall.
- Planificador semanal.
- Sesiones de Focus.
- Modo examen.
- Estadísticas.
- Widgets.
- Exportación/importación de backups JSON.
- IndexedDB para datos académicos avanzados.

## ☁️ Cuentas y sincronización

El backend preparado para LUMI Cloud utiliza **Supabase** para autenticación y sincronización.

La base de datos propuesta incluye:

- `profiles` — idioma, tema y perfil.
- `academic_items` — materias, tareas, notas, flashcards, eventos, planes, sesiones y widgets mediante `jsonb`.
- Row Level Security para que cada usuario pueda acceder únicamente a sus propios datos.

El frontend solo utiliza la **anon key pública** de Supabase. El `service_role` permanece exclusivamente en el backend.

## 🤖 OpenRouter seguro

El backend incluye `/api/ai/chat` como gateway. El navegador nunca recibe `OPENROUTER_API_KEY`.

Variables privadas del backend:

```env
OPENROUTER_API_KEY=...
OPENROUTER_MODEL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Variables públicas/configurables del frontend:

```js
window.LUMI_CONFIG = {
  API_BASE: 'https://tu-backend.example.com',
  SUPABASE_URL: 'https://tu-proyecto.supabase.co',
  SUPABASE_ANON_KEY: 'tu-anon-key'
};
```

**Nunca** publiques una API key de OpenRouter o una Supabase service-role key.

## 🌎 Idiomas

- 🇪🇸 Español
- 🇬🇧 English
- 🇷🇺 Русский
- 🇧🇷 Português
- 🇯🇵 日本語
- 🇨🇳 中文

LUMI detecta el idioma del navegador, permite cambiarlo manualmente y guarda la preferencia.

## ✨ Interfaz

- HUD holográfico.
- Glassmorphism.
- Orbes y anillos animados.
- Gradientes dinámicos.
- Microinteracciones.
- Modales propios de LUMI.
- Sin `alert()`/`prompt()` para acciones de la aplicación.
- Dark / Light.
- Responsive.
- `prefers-reduced-motion`.
- PWA instalable.

## 📦 Qué instalar

### Para usar la versión publicada
Nada.

### Para desarrollar el frontend
- Git.
- Navegador moderno.
- VS Code, Cursor, Zed u otro editor.

### Para desarrollar LUMI Cloud
- Node.js 20+.
- npm.
- Un proyecto Supabase.
- Una API key de OpenRouter si querés habilitar IA generativa.

```bash
cd backend
npm install
copy .env.example .env
npm start
```

No guardes `.env` en Git.

## 🗃️ Supabase

Ejecutá `supabase/schema.sql` en el SQL Editor de tu proyecto Supabase.

Después configurá las variables del backend y la configuración pública del frontend.

## ▶️ GitHub Pages

`.github/workflows/pages.yml` publica automáticamente el frontend cuando se hace push a `main`.

GitHub Pages aloja el frontend estático. **No ejecuta el backend Node**; LUMI Cloud debe desplegarse en un servicio que soporte Node/serverless y después configurarse mediante `API_BASE`.

## 🧪 CI

El repositorio incluye validaciones para detectar errores de JavaScript y comprobar el backend antes del despliegue.

## 🗂️ Estructura

```text
LUMI/
├── index.html
├── academic.html
├── academic.js
├── academic-os.js
├── calendar.html
├── study.html
├── support.html
├── auth.html
├── app.js
├── lumi-core.js
├── cloud.js
├── config.js
├── config.example.js
├── i18n.js
├── onboarding.js
├── style.css
├── academic.css
├── manifest.json
├── sw.js
├── assets/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── supabase/
│   └── schema.sql
├── .github/
│   └── workflows/
├── LICENSE
└── README.md
```

## 🔐 Seguridad

- `.env` está ignorado por Git.
- Las claves privadas solo viven en el backend.
- OpenRouter se accede mediante gateway.
- Rate limiting para el endpoint de IA.
- Historial de mensajes limitado antes de enviarlo al proveedor.
- Supabase RLS para datos académicos.
- No se incluyen secretos en el repositorio.

## 🚀 Roadmap

- [x] Dashboard
- [x] Tareas
- [x] Focus
- [x] Calendario
- [x] Study Lab
- [x] Student Support
- [x] Dark / Light
- [x] UI holográfica
- [x] Seis idiomas
- [x] PWA
- [x] IndexedDB
- [x] Materias
- [x] Notas
- [x] Flashcards + repetición espaciada
- [x] Planificador semanal
- [x] Estadísticas base
- [x] Backup JSON
- [x] Modo examen
- [x] Backend seguro OpenRouter
- [x] Base de autenticación/sincronización Supabase
- [x] GitHub Actions para Pages
- [ ] Desplegar LUMI Cloud en producción
- [ ] Conectar sincronización completa de todos los módulos
- [ ] Widgets drag & drop
- [ ] Analítica académica avanzada

## 👩‍💻 Autora

**Sarah Lee Olivera**

LUMI es un proyecto personal creado bajo **NubiWorks**, mini compañía/estudio indie de Sarah.

## 📄 Licencia

LUMI se distribuye bajo **MIT**. Consultá `LICENSE` para los términos completos.

---

**LUMI · Created by Sarah Lee Olivera · NubiWorks · 2026**
