# QuickNotes (HÜ2)

## 1. Setup

### Voraussetzungen
- Node.js installiert
### Schritte zum Ausführen
- Ordner erstellen:
```
mkdir Ordername
```
```
cd Ordername
``` 
- Repository klonen:
```
git clone https://github.com/Mardalon/Solo-Assignment-2.git
```
```
cd Solo-Assignment-2
```
- Abhängigkeiten installieren:
```
npm install
```
- Development-Server starten:
```
npm run dev
```
Browser unter der im Terminal angezeigten Adresse (standardmäßig http://localhost:5173) öffnen.

## 2. Begründung der Struktur
Die gesamte Geschäftslogik (State-Verwaltung, Hinzufügen, Löschen, Reaktiv-Filterung) sowie die Persistenz sind vollständig in Composables (`useNotes`, `useLocalStorage`) ausgelagert. Die Komponenten (`NoteCard`, `NoteForm`, `SearchBar`, `BaseCard`) dienen rein der Darstellung und Interaktion (Separation of Concerns). Dadurch ist der Code modular, wartungsfreundlich und die Logik ließe sich ohne Änderungen an den UI-Komponenten austauschen oder testen.

## 3. Reflexionsfragen

### Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?
Props unterliegen in Vue dem Prinzip des Ein-Weg-Datenflusses (One-Way Data Flow) und sind read-only. Ein direktes Ändern von Props im Kind bricht die Nachvollziehbarkeit des State-Flusses und Vue wirft eine Warnung. 
Stattdessen emittet `NoteCard` ein Event (`$emit('delete', note.id)`) an die Elternkomponente (`App.vue`), welche die eigentliche Löschfunktion des Composables ausführt.

### Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen — teilen sie sich die Notizen oder nicht? Begründet kurz.
Bei der aktuellen Umsetzung teilen sie sich die Notizen zur Laufzeit **nicht**. Da `useLocalStorage` bzw. `ref()` innerhalb des Funktionsaufrufs von `useNotes()` liegt, erzeugt jeder Aufruf eine neue, unabhängige reaktive Instanz. Beide Komponenten lesen und schreiben zwar in denselben `localStorage`-Key, reaktive Änderungen in einer Komponente werden in der anderen aber erst nach einem Neuladen sichtbar.

### Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
Das `Note`-Interface definiert einen eindeutigen Typ-Vertrag für die Datenstruktur einer Notiz. Es verhindert Tippfehler bei Objekt-Attributen (z. B. `text` statt `content`), liefert Autovervollständigung in der IDE und meldet Fehler bereits zur Entwicklungszeit (Compile-Time), anstatt erst zur Laufzeit beim Benutzer zu crashen.
