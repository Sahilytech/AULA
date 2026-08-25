from datetime import date, datetime
from pathlib import Path
from typing import Optional
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from sqlalchemy import create_engine, String, Integer, Float, Date, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, sessionmaker

BASE = Path(__file__).resolve().parent
DATA = BASE / "data"
UPLOADS = DATA / "evidence"
DATA.mkdir(exist_ok=True); UPLOADS.mkdir(parents=True, exist_ok=True)
engine = create_engine(f"sqlite:///{DATA / 'aula.db'}", connect_args={"check_same_thread": False})
Session = sessionmaker(bind=engine, autoflush=False)
class Base(DeclarativeBase): pass

class Profile(Base):
    __tablename__='profile'; id:Mapped[int]=mapped_column(primary_key=True); jurisdiction:Mapped[str]=mapped_column(String(80),default='CABA'); school_shift:Mapped[str]=mapped_column(String(30),default='Tarde'); school_start:Mapped[str]=mapped_column(String(5),default='13:15'); school_end:Mapped[str]=mapped_column(String(5),default='18:15'); school_year:Mapped[int]=mapped_column(Integer,default=date.today().year); cycle:Mapped[str]=mapped_column(String(30),default='Secundario')
class Subject(Base):
    __tablename__='subjects'; id:Mapped[int]=mapped_column(primary_key=True); name:Mapped[str]=mapped_column(String(120)); teacher:Mapped[Optional[str]]=mapped_column(String(120),nullable=True); weekly_hours:Mapped[float]=mapped_column(Float,default=0); color:Mapped[str]=mapped_column(String(20),default='#315f55'); active:Mapped[bool]=mapped_column(Boolean,default=True)
class Activity(Base):
    __tablename__='activities'; id:Mapped[int]=mapped_column(primary_key=True); subject_id:Mapped[int]=mapped_column(ForeignKey('subjects.id')); title:Mapped[str]=mapped_column(String(180)); kind:Mapped[str]=mapped_column(String(30)); due:Mapped[Optional[date]]=mapped_column(Date,nullable=True); grade:Mapped[Optional[float]]=mapped_column(Float,nullable=True); completed:Mapped[bool]=mapped_column(Boolean,default=False); weight:Mapped[float]=mapped_column(Float,default=1); notes:Mapped[Optional[str]]=mapped_column(Text,nullable=True); created_at:Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)
class Evidence(Base):
    __tablename__='evidence'; id:Mapped[int]=mapped_column(primary_key=True); activity_id:Mapped[int]=mapped_column(ForeignKey('activities.id')); filename:Mapped[str]=mapped_column(String(255)); stored_name:Mapped[str]=mapped_column(String(255)); mime:Mapped[str]=mapped_column(String(100)); size:Mapped[int]=mapped_column(Integer); created_at:Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)
Base.metadata.create_all(engine)
app=FastAPI(title='AULA API',version='1.0.0')
app.add_middleware(CORSMiddleware,allow_origins=['*'],allow_methods=['*'],allow_headers=['*'])

class ProfileIn(BaseModel): jurisdiction:str='CABA'; school_shift:str='Tarde'; school_start:str='13:15'; school_end:str='18:15'; school_year:int=date.today().year; cycle:str='Secundario'
class SubjectIn(BaseModel): name:str=Field(min_length=1,max_length=120); teacher:Optional[str]=None; weekly_hours:float=0; color:str='#315f55'; active:bool=True
class ActivityIn(BaseModel): subject_id:int; title:str=Field(min_length=1); kind:str='Entrega'; due:Optional[date]=None; grade:Optional[float]=None; completed:bool=False; weight:float=1; notes:Optional[str]=None

def progress(db):
    rows=db.query(Activity).all()
    if not rows:return 0
    # A completed delivery or exam is progress; grades don't artificially inflate completion.
    return round(sum((1 if r.completed else 0)*r.weight for r in rows)/sum(r.weight for r in rows)*100,1)
def average(db):
    rows=[r for r in db.query(Activity).all() if r.grade is not None]
    if not rows:return None
    weights=[max(r.weight,0.01) for r in rows]; return round(sum(r.grade*w for r,w in zip(rows,weights))/sum(weights),2)

@app.get('/api/profile')
def get_profile():
    with Session() as db:
        p=db.get(Profile,1)
        if not p:p=Profile(id=1);db.add(p);db.commit();db.refresh(p)
        return {c.name:getattr(p,c.name) for c in Profile.__table__.columns}
@app.put('/api/profile')
def put_profile(data:ProfileIn):
    with Session() as db:
        p=db.get(Profile,1) or Profile(id=1); [setattr(p,k,v) for k,v in data.model_dump().items()]; db.add(p);db.commit();return data
@app.get('/api/subjects')
def subjects():
    with Session() as db:return [{c.name:getattr(s,c.name) for c in Subject.__table__.columns} for s in db.query(Subject).filter_by(active=True).all()]
@app.post('/api/subjects')
def add_subject(data:SubjectIn):
    with Session() as db:s=Subject(**data.model_dump());db.add(s);db.commit();db.refresh(s);return {'id':s.id,**data.model_dump()}
@app.put('/api/subjects/{sid}')
def edit_subject(sid:int,data:SubjectIn):
    with Session() as db:
        s=db.get(Subject,sid)
        if not s:raise HTTPException(404,'Materia no encontrada')
        for k,v in data.model_dump().items():setattr(s,k,v)
        db.commit();return {'id':sid,**data.model_dump()}
@app.delete('/api/subjects/{sid}')
def delete_subject(sid:int):
    with Session() as db:
        s=db.get(Subject,sid)
        if not s:raise HTTPException(404,'Materia no encontrada')
        s.active=False;db.commit();return {'ok':True}
@app.get('/api/activities')
def activities():
    with Session() as db:return [{c.name:getattr(a,c.name) for c in Activity.__table__.columns} for a in db.query(Activity).order_by(Activity.due.asc()).all()]
@app.post('/api/activities')
def add_activity(data:ActivityIn):
    with Session() as db:
        if not db.get(Subject,data.subject_id):raise HTTPException(400,'Materia inválida')
        a=Activity(**data.model_dump());db.add(a);db.commit();db.refresh(a);return {'id':a.id,**data.model_dump()}
@app.put('/api/activities/{aid}')
def edit_activity(aid:int,data:ActivityIn):
    with Session() as db:
        a=db.get(Activity,aid)
        if not a:raise HTTPException(404,'Actividad no encontrada')
        for k,v in data.model_dump().items():setattr(a,k,v)
        db.commit();return {'id':aid,**data.model_dump()}
@app.get('/api/dashboard')
def dashboard():
    with Session() as db:
        return {'progress':progress(db),'average':average(db),'subjects':db.query(Subject).filter_by(active=True).count(),'activities':db.query(Activity).count(),'completed':db.query(Activity).filter_by(completed=True).count(),'pending':db.query(Activity).filter_by(completed=False).count()}
@app.post('/api/activities/{aid}/evidence')
async def evidence(aid:int,file:UploadFile=File(...)):
    with Session() as db:
        if not db.get(Activity,aid):raise HTTPException(404,'Actividad no encontrada')
        safe=Path(file.filename or 'evidencia').name; stamp=datetime.utcnow().strftime('%Y%m%d%H%M%S%f'); stored=f'{aid}_{stamp}_{safe}'
        content=await file.read();
        if len(content)>15*1024*1024:raise HTTPException(413,'Archivo demasiado grande (máximo 15 MB)')
        (UPLOADS/stored).write_bytes(content); e=Evidence(activity_id=aid,filename=safe,stored_name=stored,mime=file.content_type or 'application/octet-stream',size=len(content));db.add(e);db.commit();db.refresh(e);return {'id':e.id,'filename':safe,'size':len(content)}
app.mount('/evidence',StaticFiles(directory=UPLOADS),name='evidence')
