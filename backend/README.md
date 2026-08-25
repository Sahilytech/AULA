# AULA — Backend académico

**Creadora:** Sarah Lee Olivera  
**by NubiWorks**

AULA es una plataforma web para acompañar la trayectoria escolar secundaria. La versión académica separa dos métricas que no deben confundirse:

- **Progreso:** porcentaje de actividades académicas completadas (entregas, trabajos y evaluaciones) según su peso configurado.
- **Promedio:** promedio ponderado de calificaciones registradas.

## Contexto argentino

El perfil guarda jurisdicción/provincia, turno, horario, ciclo lectivo y ciclo educativo. Estos datos sirven para contextualizar calendario y planificación; no se utilizan para alterar artificialmente una calificación.

## Funciones

- Perfil escolar configurable.
- Alta, edición y baja lógica de materias.
- Docente y horas semanales por materia.
- Entregas, trabajos, exámenes y recuperatorios mediante actividades tipadas.
- Fechas de vencimiento.
- Peso configurable por actividad.
- Notas y observaciones.
- Cálculo automático de progreso y promedio.
- Evidencias de entrega: capturas, imágenes, PDF y otros archivos.
- Metadatos de evidencia.
- SQLite local y API REST con FastAPI.

## Instalación

```bash
cd backend
python -m venv .venv
# Windows
.venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app:app --reload
```

API: `http://localhost:8000`  
Documentación: `http://localhost:8000/docs`

## Privacidad

La base SQLite y las evidencias quedan en `backend/data/`. No se envían automáticamente a servicios externos.

## Licencia

MIT — Copyright © 2026 Sarah Lee Olivera / NubiWorks.
