# AI-LOG

- Prompt: "wie setze ich eine eigene searchbar so um das sie eine eigene input komponente ist mit defineProps(['modelValue']) und emit('update:modelValue', .) , sodass sie sich mit v-model einbinden lässt und dem one way flow entspricht?"
  Übernommen: Das Muster aus props.modelValue und dem emit('update:modelValue')-Event.
  Geändert/verstanden: TypeScript-Typisierung via defineProps und defineEmits ergänzt; verstanden, dass v-model unter der Haube reiner syntaktischer Zucker für eine Prop nach unten und ein Event nach oben ist.

- Prompt: "wie baue ich in useNotes.js eine reaktive filter funktion names filteredNotes die nach titel, text und tags (durch komma getrennt) filtert?"
  Übernommen: Grundlogik mit computed() und Array.prototype.some() für die Tag-Suche.
  Geändert/verstanden: Sichergestellt, dass der übergebene Suchterm sowohl als Ref als auch als String verarbeitet werden kann; verstanden, wie computed() automatisch neu ausgewertet wird, sobald sich die Notizen-Ref ändert.

- Prompt: "NoteCard soll eine notiz mit BaseCard render und der löschen button soll per emit nach oben melden und nicht selbst löschen. wie mache ich das mit den slots in BaseCard und dem delete-emit in NoteCard richtig?"
  Übernommen: Die Slot-Aufteilung (#header für Titel/Button und Default-Slot für Inhalt/Tags) sowie das defineEmits(['delete']).
  Geändert/verstanden: Verstanden, warum BaseCard völlig generisch bleiben muss (Muster A: Komposition) und NoteCard den State nicht selbst manipulieren darf, sondern das Löschen per Event an App.vue delegiert (Muster C: Ein-Weg-Datenfluss).

- Prompt: "ich bekomme diesen fehler: Could not find a declaration file for module './composables/useNotes'. 'c:/Users/ubifb/Desktop/Web_Frontend/Hausübung02/QuickNotes/src/composables/useNotes.js' implicitly has an 'any' type.ts-plugin(7016)
wie behebe ich das wenn useNotes eine .js datei sein soll?"
  Übernommen: Den Lösungsansatz mit einer eigenen Deklarationsdatei (useNotes.d.ts).
  Geändert/verstanden: Verstanden, warum TypeScript bei strict-Einstellungen für reine .js-Dateien Typdeklarationen verlangt, und das Problem gelöst, ohne die verbindlich vorgegebene Dateistruktur zu verletzen.

- Prompt: "ich habe jetzt den code eingebaut aber meine webseite ist komplett leer. wie finde ich heraus wo der fehler liegt und wie fixe ich das?"
  Übernommen: Den Hinweis, die Browser-Konsole auf unbehandelte ReferenceErrors im Setup- und Computed-Scope zu prüfen.
  Geändert/verstanden: Den Tippfehler bei den Parametern in useNotes.js aufgespürt (termRef statt term aufgerufen); verstanden, dass ein Absturz innerhalb eines computed() den gesamten Render-Zyklus von Vue abbricht.