let LUMI_SQLITE=null;const LUMI_DB_KEY='lumi-sqlite-v1';
async function initSQLite(){if(LUMI_SQLITE)return LUMI_SQLITE;if(!window.initSqlJs)throw new Error('SQLite engine did not load');const SQL=await window.initSqlJs({locateFile:f=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${f}`});const saved=localStorage.getItem(LUMI_DB_KEY);LUMI_SQLITE=saved?new SQL.Database(new Uint8Array(JSON.parse(saved))):new SQL.Database();LUMI_SQLITE.run(`CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,priority TEXT DEFAULT 'Media',done INTEGER DEFAULT 0,created_at TEXT NOT NULL);CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,body TEXT DEFAULT '',updated_at TEXT NOT NULL);CREATE TABLE IF NOT EXISTS subjects(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,teacher TEXT DEFAULT '',progress INTEGER DEFAULT 0);CREATE TABLE IF NOT EXISTS cards(id INTEGER PRIMARY KEY AUTOINCREMENT,front TEXT NOT NULL,back TEXT NOT NULL,due_at TEXT NOT NULL,interval INTEGER DEFAULT 1,reviews INTEGER DEFAULT 0);CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,date TEXT NOT NULL,time TEXT DEFAULT '');CREATE TABLE IF NOT EXISTS sessions(id INTEGER PRIMARY KEY AUTOINCREMENT,minutes INTEGER NOT NULL,created_at TEXT NOT NULL);`);persistSQLite();return LUMI_SQLITE}
function persistSQLite(){const bytes=LUMI_SQLITE.export();localStorage.setItem(LUMI_DB_KEY,JSON.stringify(Array.from(bytes)))}
function sqlRows(sql){const r=LUMI_SQLITE.exec(sql);if(!r.length)return[];return r[0].values.map(row=>Object.fromEntries(r[0].columns.map((c,i)=>[c,row[i]])))}
function sqlRun(sql){LUMI_SQLITE.run(sql);persistSQLite()}
function sqlEscape(v){return String(v??'').replaceAll("'","''")}
function dbTasks(){return sqlRows("SELECT * FROM tasks ORDER BY done ASC, CASE priority WHEN 'Alta' THEN 0 WHEN 'Media' THEN 1 ELSE 2 END,id DESC")}
function dbSubjects(){return sqlRows('SELECT * FROM subjects ORDER BY id DESC')}
function dbNotes(){return sqlRows('SELECT * FROM notes ORDER BY updated_at DESC')}
function dbCards(){return sqlRows('SELECT * FROM cards ORDER BY due_at ASC')}
function dbEvents(){return sqlRows('SELECT * FROM events ORDER BY date,time')}
function dbSessions(){return sqlRows('SELECT * FROM sessions ORDER BY id DESC')}
function addDbTask(title,priority){sqlRun(`INSERT INTO tasks(title,priority,done,created_at) VALUES('${sqlEscape(title)}','${sqlEscape(priority)}',0,'${new Date().toISOString()}')`)}
function toggleDbTask(id,done){sqlRun(`UPDATE tasks SET done=${done?1:0} WHERE id=${Number(id)}`)}
function deleteDbTask(id){sqlRun(`DELETE FROM tasks WHERE id=${Number(id)}`)}
function addDbNote(title,body){sqlRun(`INSERT INTO notes(title,body,updated_at) VALUES('${sqlEscape(title)}','${sqlEscape(body)}','${new Date().toISOString()}')`)}
function addDbSubject(name,teacher){sqlRun(`INSERT INTO subjects(name,teacher,progress) VALUES('${sqlEscape(name)}','${sqlEscape(teacher)}',0)`)}
function addDbCard(front,back){sqlRun(`INSERT INTO cards(front,back,due_at,interval,reviews) VALUES('${sqlEscape(front)}','${sqlEscape(back)}','${new Date().toISOString()}',1,0)`)}
function addDbEvent(title,date,time){sqlRun(`INSERT INTO events(title,date,time) VALUES('${sqlEscape(title)}','${sqlEscape(date)}','${sqlEscape(time)}')`)}
function addDbSession(minutes){sqlRun(`INSERT INTO sessions(minutes,created_at) VALUES(${Number(minutes)},'${new Date().toISOString()}')`)}
function exportSQLite(){const blob=new Blob([LUMI_SQLITE.export()],{type:'application/x-sqlite3'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='lumi.sqlite';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
async function importSQLite(file){const bytes=new Uint8Array(await file.arrayBuffer());const SQL=await window.initSqlJs({locateFile:f=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${f}`});LUMI_SQLITE=new SQL.Database(bytes);persistSQLite();await renderLumi();lumiToast('Base SQLite restaurada.')}