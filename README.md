# mineXplorer
Die wichtigsten Dateien und Ordner in dem Projekt sind folgende:

* Die Logik des Spiels ist in dem File `mineXplorer/src/app/library/classes/gamelogic.ts` spezifiziert.
* Die Komponenten sind unter `mineXplorer/src/app/library/components/` abgelegt.
    * Die Hauptkomponente ist der `game-launcher`. In dieser Komponente wird das Spielfeld für den Nutzer erzeugt und festgelegt, wie auf seine Eingaben reagiert wird. 
    * Die `result`-Komponente ist das Popup, das das Ergebnis des Spiels darstellt. 
    * Die `rules`-Komponente ist zum Nachlesen der Regeln. 
    * Die `navbar` wurde als eigene Komponente realisiert, da sie komponentenübergreifend angezeigt wird.
* Unter `mineXplorer/src/app/library/services` ist der `game.service` abgelegt, der für die Berechnung der Performance benötigt wird.