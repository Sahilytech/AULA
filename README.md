# AULA — Trayectoria escolar

**Herramienta educativa para estudiantes de secundaria argentina.**

> Convertir tareas, materias y materiales dispersos en próximos pasos claros.

**Creadora:** Sarah Lee Olivera  
**Marca / estudio:** NubiWorks  
**Proyecto:** AULA  
**Año:** 2026  
**Estado:** MVP funcional en evolución

---

## 1. Problema educativo

En la secundaria, tener información no significa necesariamente saber organizarla. Un estudiante puede tener evaluaciones, trabajos prácticos, apuntes, PDFs, fotos y fechas repartidas en distintos lugares y aun así no saber **qué debería hacer primero**.

AULA aborda esa dificultad desde la organización de la trayectoria escolar y la comprensión de materiales.

### Problemas que busca reducir

- acumulación de tareas;
- estudio de último momento;
- dificultad para priorizar;
- pérdida de materiales;
- dificultad para retomar un contenido después de una ausencia;
- convertir apuntes largos en acciones de estudio concretas.

### Pregunta central

> **¿Qué tengo que hacer hoy para avanzar sin quedarme atrás?**

---

## 2. Solución

AULA concentra en una sola aplicación:

- panorama académico;
- materias y progreso personal;
- tareas y evaluaciones;
- lectura y comprensión de materiales;
- práctica de comprensión;
- planificación de sesiones de estudio.

La herramienta está pensada para acompañar al estudiante, no para reemplazar a docentes, tutores u orientadores.

---

## 3. Funcionalidades

### Inicio

- progreso general;
- cantidad de pendientes;
- estado de cada materia;
- tareas próximas;
- accesos rápidos.

### Materias

Cada materia incluye:

- tema actual;
- porcentaje de avance editable;
- referencia del progreso.

El porcentaje es subjetivo y **no representa una nota**.

### Tareas

- crear tareas;
- asignar materia;
- marcar como completadas;
- conservar datos en el navegador;
- visualizar pendientes.

### Lector y comprensión

El lector trabaja con el texto disponible en el navegador.

Incluye:

- resumen inicial;
- detección de conceptos frecuentes;
- preguntas de comprensión;
- vista del documento;
- copia del texto;
- lectura en voz alta;
- eliminación del documento.

### PDF

AULA incorpora una extracción de texto para PDF mediante PDF.js cargado cuando se necesita.

La extracción está limitada a una cantidad razonable de páginas para mantener el MVP liviano.

Los PDF escaneados o fotografías dentro de un PDF requieren OCR y forman parte de la siguiente etapa.

### Práctica

La sección Práctica utiliza fragmentos del material cargado para generar preguntas abiertas de comprensión.

El sistema puede comparar de forma básica la respuesta escrita con palabras presentes en el fragmento.

**No es una corrección automática académica.** Es una ayuda de autoevaluación y debe interpretarse como tal.

### Plan de estudio

Distribuye sesiones cortas entre las materias:

- prioridad;
- repaso;
- práctica;
- duración aproximada.

---

## 4. Privacidad

El objetivo del proyecto es favorecer el procesamiento local.

Las tareas, materias y preferencias de la demo se guardan en `localStorage` del navegador.

Los documentos cargados se mantienen en memoria/localStorage durante el uso de la aplicación según el estado de la demo; no existe actualmente un backend propio que almacene los archivos.

### Recomendaciones

No cargar:

- datos personales de terceros;
- información médica;
- contraseñas;
- documentación sensible;
- archivos de otras personas sin autorización.

Si se agregan servicios externos de IA en futuras versiones, deberá existir una explicación clara de qué datos se envían y con qué finalidad.

---

## 5. Diseño

AULA utiliza un lenguaje visual sobrio:

- jerarquía tipográfica;
- poco ruido visual;
- responsive;
- modo claro y oscuro;
- botones con estados claros;
- navegación simple;
- tarjetas solo cuando aportan estructura;
- lectura cómoda en PC y celular.

---

## 6. Tecnología

- HTML5
- CSS3
- JavaScript
- LocalStorage API
- Speech Synthesis API
- File API
- PDF.js bajo demanda para PDF
- PWA manifest

No requiere backend para el MVP.

---

## 7. Estructura

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

## 8. Roadmap

### Organización

- [x] Inicio
- [x] Materias
- [x] Tareas
- [x] Persistencia local
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
- [ ] IndexedDB
- [ ] Tests automatizados
- [ ] Accesibilidad WCAG ampliada
- [ ] Sincronización entre dispositivos
- [ ] Backend opcional
- [ ] Modo docente

---

## 9. Principios educativos

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

## 10. Licencia

AULA se distribuye bajo **MIT License**.

Copyright (c) 2026 **Sarah Lee Olivera / NubiWorks**.

Ver [`LICENSE`](LICENSE).

---

## 11. Autora

**Sarah Lee Olivera**  
Creadora y desarrolladora de AULA  
**by NubiWorks**

AULA es un proyecto independiente de innovación educativa.
