# Portfolio – Oleh Kaliniuk

Dateien:
- index.html – Struktur und Texte (Über mich, Skills, Kontakt)
- style.css – Design
- script.js – Punkt-Schrift und Animationen
- projects.js – Projektliste und Detailfenster (muss nicht geändert werden)
- projects.json – DEINE PROJEKTE (hier editieren)
- img/ – Bilder

## Neues Projekt hinzufügen
Block in projects.json kopieren, Werte ändern, Komma zwischen Blöcken nicht vergessen.

Felder: id, title, year, category, role, summary (eine Zeile in der Liste), description (Text im Detailfenster),
highlights (Liste), tech (Liste), images (Pfade, z. B. "img/mein-bild.jpg"), links.live / links.github (leer = Button wird ausgeblendet).

Bilder werden automatisch schwarz-weiß dargestellt. Fehlt eine Datei, erscheint eine Punkt-Platzhalter-Box.

## Wichtig
projects.json wird per fetch geladen. Per Doppelklick auf index.html (file://) blockiert der Browser das.
Nutze VS Code Live Server oder Netlify/GitHub Pages.

## Lebenslauf (CV)
Der Button "cv (pdf)" lädt cv/Oleh_Kaliniuk_CV.pdf herunter. Aktuell eine Test-Datei.
Zum Ersetzen: dein PDF genau so benennen und in den Ordner cv/ legen (oder den Namen in index.html anpassen).

## Werdegang
In index.html im Abschnitt "03 — werdegang" Blöcke <div class="row static"> kopieren und ändern (Titel, Ort, Zeitraum/Art rechts).
