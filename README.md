# AULA — Trayectoria escolar

**Proyecto educativo para nivel secundario argentino**

> Una herramienta para transformar tareas, materias y materiales dispersos en próximos pasos claros.

**Creadora:** Sarah Lee Olivera  
**Estudio:** NubiWorks  
**Proyecto:** AULA  
**Estado:** Prototipo funcional / MVP

## Problema

En la escuela secundaria no siempre falta información: muchas veces falta organización. Un estudiante puede tener evaluaciones, trabajos prácticos, apuntes, PDFs y materiales en lugares diferentes y no saber qué priorizar. AULA aborda esa desorganización desde una perspectiva de trayectoria escolar.

## Solución

AULA reúne en una sola interfaz:

- materias y progreso;
- tareas y evaluaciones;
- prioridades de estudio;
- planificación por días;
- lectura de materiales;
- extracción básica de conceptos;
- preguntas de comprensión;
- seguimiento del avance.

La pregunta central del producto es: **“¿Qué tengo que hacer hoy para no quedarme atrás?”**

## Funcionalidades

### Inicio
Resumen del progreso, materias activas y actividades próximas.

### Materias
Vista individual de materias, temas actuales y porcentaje de avance.

### Tareas
Carga y seguimiento de tareas. Las actividades pueden marcarse como completadas.

### Lector y comprensión
Permite cargar archivos de texto compatibles con el navegador y obtener una primera lectura estructurada: resumen inicial, conceptos frecuentes y preguntas de comprensión.

> El MVP no presenta la salida automática como una verdad académica. El estudiante debe contrastarla con el material original.

### Plan de estudio
Organiza sesiones cortas de estudio por día y materia para ayudar a convertir pendientes en acciones concretas.

## Diseño

AULA utiliza una interfaz sobria y accesible, pensada para PC y celular. La prioridad es la claridad: menos ruido visual, jerarquía consistente y acciones fáciles de encontrar.

## Tecnología

El MVP está construido como una aplicación web estática:

- HTML5
- CSS3
- JavaScript vanilla
- Web APIs del navegador
- Diseño responsive

No requiere un backend para la demo inicial.

## Privacidad

El proyecto busca que el material escolar pueda procesarse localmente siempre que sea posible. No se debe subir información personal, sensible o de terceros a servicios externos sin consentimiento y una política de privacidad adecuada.

## Estructura

```text
AULA/
├── index.html
├── styles.css
├── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## Roadmap

- [x] Inicio y trayectoria
- [x] Materias
- [x] Tareas
- [x] Plan de estudio
- [x] Lector inicial
- [ ] Soporte robusto para PDF mediante parser dedicado
- [ ] OCR para fotos de apuntes
- [ ] Generación avanzada de preguntas
- [ ] Simulacros de evaluación
- [ ] Calendario escolar argentino configurable
- [ ] Recuperatorios y mesas
- [ ] Persistencia con IndexedDB/SQLite
- [ ] Modo docente
- [ ] Accesibilidad WCAG ampliada
- [ ] Tests automatizados

## Licencia

Este proyecto se distribuye bajo la **MIT License**. Ver [`LICENSE`](LICENSE).

Copyright (c) 2026 Sarah Lee Olivera / NubiWorks.

## Autora

**Sarah Lee Olivera**  
Creadora de AULA  
**by NubiWorks**

AULA es un proyecto independiente de innovación educativa.
