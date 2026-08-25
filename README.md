# AULA — Trayectoria escolar

**Una herramienta educativa pensada para estudiantes de secundaria argentina.**

> Convertir tareas, materias y materiales dispersos en próximos pasos claros.

**Creadora:** Sarah Lee Olivera  
**Estudio / marca:** NubiWorks  
**Proyecto:** AULA  
**Año:** 2026  
**Estado:** MVP funcional en evolución

---

## El problema

En la secundaria, el problema no siempre es la falta de información. Muchas veces el estudiante tiene demasiada información repartida entre carpetas, apuntes, PDFs, mensajes, fechas de evaluación y trabajos prácticos, pero no una forma simple de decidir **qué hacer primero**.

Esto puede generar:

- acumulación de tareas;
- dificultad para priorizar;
- pérdida de materiales;
- estudio de último momento;
- problemas para recuperar contenidos después de una ausencia;
- dificultad para transformar un apunte en una estrategia de estudio.

AULA nace para abordar esa parte concreta de la trayectoria escolar.

## La solución

AULA funciona como un centro personal de organización académica. Su pregunta principal es:

> **¿Qué tengo que hacer hoy para avanzar sin quedarme atrás?**

La aplicación reúne cinco áreas:

1. **Inicio** — panorama rápido del estado académico.
2. **Materias** — materias, temas y progreso personal.
3. **Tareas** — pendientes, fechas y estados.
4. **Lector y comprensión** — convertir materiales en una guía de estudio.
5. **Plan** — distribuir sesiones de estudio cortas y realistas.

---

## Funcionalidades actuales

### Inicio

- progreso general;
- cantidad de actividades pendientes;
- panorama por materia;
- tareas próximas;
- accesos rápidos al lector, tareas y planificación.

### Materias

Cada materia puede mostrar:

- tema actual;
- porcentaje de avance personal;
- referencia del estado de estudio.

El porcentaje **no es una calificación** y no pretende reemplazar una evaluación docente.

### Tareas

Permite:

- crear tareas;
- asociarlas a una materia;
- marcarlas como completadas;
- conservarlas en el navegador;
- ver rápidamente las pendientes.

Los datos básicos se guardan con `localStorage` para que la demo no dependa de un servidor.

### Lector y comprensión

El lector permite cargar materiales y trabajar con su texto cuando el navegador puede extraerlo.

Actualmente incluye:

- resumen inicial basado en fragmentos del documento;
- detección de palabras/conceptos frecuentes;
- preguntas de comprensión basadas en fragmentos;
- vista del texto completo;
- copia del texto;
- lectura en voz alta mediante `SpeechSynthesis` del navegador;
- eliminación del material cargado.

**Importante:** el MVP no presenta el análisis automático como una verdad académica. El contenido original siempre debe ser la referencia.

Los PDF escaneados no se consideran correctamente interpretados todavía. Para ellos hace falta una capa OCR/parser específica.

### Plan de estudio

AULA genera una estructura simple de sesiones para varios días:

- prioridad;
- repaso;
- práctica;
- duración aproximada.

La intención es reducir la carga de decidir por dónde empezar, no imponer una rutina rígida.

---

## Diseño

La interfaz está pensada como una herramienta educativa y no como una red social o un juego.

Principios visuales:

- jerarquía clara;
- poco ruido visual;
- acciones visibles;
- responsive;
- modo claro y oscuro;
- controles accesibles por teclado;
- tarjetas usadas solo cuando ayudan a separar información;
- tipografía legible;
- estados visuales consistentes.

---

## Tecnología

AULA está construido inicialmente como una aplicación web estática:

- HTML5
- CSS3
- JavaScript moderno
- Web APIs
- LocalStorage
- Speech Synthesis API
- PWA manifest

No necesita backend para la demo actual.

### Arquitectura

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

La arquitectura está deliberadamente mantenida simple para que pueda ser comprendida, presentada y extendida dentro de un proyecto escolar.

---

## Privacidad

La intención del proyecto es favorecer el procesamiento local de materiales escolares.

AULA no necesita enviar los documentos a un servidor para las funciones actuales de análisis básico y lectura.

Aun así:

- no se deben cargar datos personales de otras personas sin autorización;
- no se deben utilizar documentos sensibles en servicios externos sin consentimiento;
- las futuras funciones con IA deberán explicar claramente qué datos salen del dispositivo;
- el proyecto no reemplaza a docentes, tutores, orientadores ni instituciones educativas.

---

## Roadmap

### Organización

- [x] Inicio
- [x] Materias
- [x] Tareas
- [x] Persistencia local básica
- [x] Plan de estudio
- [ ] Calendario escolar configurable por jurisdicción
- [ ] Recuperatorios
- [ ] Mesas de examen
- [ ] Asistencia y seguimiento de inasistencias

### Comprensión

- [x] Lectura de TXT/MD/CSV
- [x] Resumen inicial
- [x] Conceptos frecuentes
- [x] Preguntas de comprensión
- [x] Lectura en voz alta
- [ ] Parser PDF robusto
- [ ] OCR para fotografías de apuntes
- [ ] Extracción de tablas
- [ ] Reconocimiento de estructura de apuntes

### Estudio

- [ ] Simulacros de evaluación
- [ ] Tarjetas de estudio
- [ ] Repaso espaciado
- [ ] Registro de errores frecuentes
- [ ] Generación avanzada de preguntas con IA opcional
- [ ] Modo examen

### Plataforma

- [x] Responsive
- [x] Dark mode
- [x] PWA manifest
- [x] Favicon
- [ ] IndexedDB
- [ ] Tests automatizados
- [ ] Accesibilidad WCAG ampliada
- [ ] Backend opcional
- [ ] Sincronización entre dispositivos
- [ ] Modo docente

---

## Principios del proyecto

### 1. La herramienta acompaña, no reemplaza

AULA ayuda a organizar y estudiar. No pretende reemplazar al docente ni emitir diagnósticos académicos.

### 2. El material original importa

Los resúmenes y preguntas automáticas deben poder contrastarse con el documento original.

### 3. Menos decisiones innecesarias

El objetivo principal es transformar una lista confusa de pendientes en próximos pasos concretos.

### 4. Privacidad primero

El procesamiento local se prioriza siempre que sea técnicamente posible.

### 5. Tecnología comprensible

El proyecto busca ser suficientemente simple para que estudiantes puedan entender cómo está construido.

---

## Licencia

AULA se distribuye bajo la **MIT License**.

Copyright (c) 2026 **Sarah Lee Olivera / NubiWorks**.

Consultar [`LICENSE`](LICENSE) para el texto completo.

---

## Autora

**Sarah Lee Olivera**  
Creadora y desarrolladora de AULA  
**by NubiWorks**

AULA es un proyecto independiente de innovación educativa.
