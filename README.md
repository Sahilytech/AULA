# AULA — Trayectoria escolar

**Herramienta educativa para estudiantes de secundaria argentina.**

> Convertir tareas, materias y materiales dispersos en próximos pasos claros.

**Creadora:** Sarah Lee Olivera  
**Marca / estudio:** NubiWorks  
**Proyecto:** AULA  
**Año:** 2026  
**Estado:** MVP funcional en evolución

---

## Problema educativo

En la secundaria, tener información no significa necesariamente saber organizarla. Un estudiante puede tener evaluaciones, trabajos prácticos, apuntes, PDFs, fotos y fechas repartidas en distintos lugares y aun así no saber **qué debería hacer primero**.

AULA aborda esa dificultad desde la organización de la trayectoria escolar y la comprensión de materiales.

### Busca reducir

- acumulación de tareas;
- estudio de último momento;
- dificultad para priorizar;
- pérdida de materiales;
- dificultad para retomar contenidos después de una ausencia;
- dificultad para transformar apuntes largos en acciones concretas de estudio.

### Pregunta central

> **¿Qué tengo que hacer hoy para avanzar sin quedarme atrás?**

---

## Solución

AULA concentra en una sola aplicación:

- panorama académico;
- materias y progreso personal;
- tareas y evaluaciones;
- lectura y comprensión de materiales;
- práctica de comprensión;
- planificación de sesiones de estudio.

La herramienta acompaña al estudiante; no reemplaza a docentes, tutores u orientadores.

---

## Funcionalidades

### Inicio

- progreso general;
- cantidad de pendientes;
- estado de cada materia;
- tareas próximas;
- accesos rápidos.

### Materias

Cada materia incluye tema actual y porcentaje de avance editable.

El porcentaje es una referencia personal y **no representa una nota**.

### Tareas

- crear tareas;
- asignar materia;
- marcar como completadas;
- conservar la organización en el navegador;
- visualizar pendientes.

### Lector y comprensión

- resumen inicial;
- conceptos frecuentes;
- preguntas de comprensión;
- vista del texto;
- copia del documento;
- lectura en voz alta;
- eliminación del material.

### PDF

AULA intenta extraer texto de PDF mediante PDF.js cargado bajo demanda.

La extracción está limitada a las primeras 40 páginas para mantener el MVP razonable. Un PDF escaneado puede necesitar OCR y no se presenta como correctamente interpretado si no se pudo extraer texto.

### Práctica

La sección **Práctica** utiliza fragmentos del material cargado para formular preguntas abiertas.

La devolución actual compara de forma simple palabras de la respuesta con el fragmento original. **No es una corrección académica automática.** Es una herramienta de autoevaluación.

### Plan de estudio

Distribuye sesiones cortas entre materias usando etiquetas de prioridad, repaso y práctica.

---

## Privacidad

El proyecto prioriza el procesamiento local.

Las tareas, materias, preferencias y configuración se guardan en `localStorage`. Los documentos cargados **no se persisten en localStorage**; permanecen en memoria mientras dura la sesión para evitar almacenar archivos grandes o sensibles en el almacenamiento del navegador.

No existe actualmente un backend propio que almacene los documentos.

No se deben cargar datos personales de terceros, contraseñas, documentación sensible o archivos ajenos sin autorización.

Si se incorporan servicios externos de IA, deberá explicarse qué información sale del dispositivo y con qué finalidad.

---

## Diseño

AULA utiliza un lenguaje visual sobrio y orientado a estudio:

- jerarquía tipográfica;
- poco ruido visual;
- responsive;
- modo claro y oscuro;
- botones con estados claros;
- navegación simple;
- tarjetas solo cuando aportan estructura;
- lectura cómoda en PC y celular.

---

## Tecnología

- HTML5
- CSS3
- JavaScript
- LocalStorage API
- Speech Synthesis API
- File API
- PDF.js bajo demanda
- PWA manifest

No requiere backend para el MVP.

### Estructura

```text
AULA/
├── index.html
├── styles.css
├── app.js
├── favicon.svg
├── manifest.webmanifest
├── README.md
├── LICENSE
└── .gitkeep
```

---

## Roadmap

### Organización

- [x] Inicio
- [x] Materias
- [x] Tareas
- [x] Persistencia local de datos no documentales
- [x] Plan de estudio
- [ ] Calendario escolar configurable por jurisdicción
- [ ] Recuperatorios
- [ ] Mesas de examen
- [ ] Seguimiento de asistencia

### Comprensión

- [x] TXT
- [x] MD
- [x] CSV
- [x] Extracción PDF básica
- [x] Resumen inicial
- [x] Conceptos frecuentes
- [x] Preguntas de comprensión
- [x] Vista del texto
- [x] Lectura en voz alta
- [x] Práctica abierta
- [ ] OCR para fotografías
- [ ] OCR para PDF escaneado
- [ ] Extracción de tablas
- [ ] Reconocimiento de títulos y secciones

### Estudio

- [x] Plan de estudio
- [x] Práctica basada en documento
- [ ] Simulacros de evaluación
- [ ] Tarjetas de estudio
- [ ] Repaso espaciado
- [ ] Registro de errores
- [ ] IA opcional para preguntas avanzadas
- [ ] Modo examen

### Plataforma

- [x] Responsive
- [x] Dark mode
- [x] Favicon
- [x] Manifest PWA
- [ ] IndexedDB para datos locales más grandes
- [ ] Tests automatizados
- [ ] Accesibilidad WCAG ampliada
- [ ] Sincronización entre dispositivos
- [ ] Backend opcional
- [ ] Modo docente

---

## Principios educativos

### Acompañar, no reemplazar
AULA organiza y ayuda a practicar. No reemplaza el criterio docente.

### El documento original manda
Los análisis automáticos deben contrastarse con el material original.

### Comprender antes que memorizar
La práctica prioriza explicar ideas con palabras propias.

### Menos decisiones innecesarias
El producto intenta responder qué conviene hacer a continuación.

### Privacidad primero
El procesamiento local se prioriza cuando es técnicamente posible.

---

## Licencia

AULA se distribuye bajo **MIT License**.

Copyright (c) 2026 **Sarah Lee Olivera / NubiWorks**.

Ver [`LICENSE`](LICENSE).

---

## Autora

**Sarah Lee Olivera**  
Creadora y desarrolladora de AULA  
**by NubiWorks**

AULA es un proyecto independiente de innovación educativa.
