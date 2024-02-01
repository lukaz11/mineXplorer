## Anforderungen (2000 Wörter)

### Funktional

#### Spielfeldgröße
**Beschreibung:**
Das Spiel muss ein gitterförmiges Spielfeld mit variabler Größe haben, so dass die Spieler zwischen verschiedenen Schwierigkeitsgraden wählen können (z. B. 9x9, 16x16, 30x16).
**Problembeschreibung:**
Benutzer wollen auswählen können, wie groß das Spielfeld sein soll.
**Erfüllungskriterien:**
Der Nutzer ist in der Lage vor dem Spielstart zwischen verschiedenen Spielfeldgrößen auszuwählen, sowie selber ein gewünschtes Raster zu erstellen.
**Priorität:** Muss

#### Schwierigkeitsgrad
**Beschreibung:**
Die Verteilung der Minen auf dem Spielfeld sollte zufällig erfolgen, wobei die Anzahl der Minen durch den gewählten Schwierigkeitsgrad bestimmt wird.
**Problembeschreibung:**
Das Spiel soll auch für erfahrene Benutzer ansprechend sein. Deshalb sollen sie den Schwierigkeitsgrad erhöhen können.
**Erfüllungskriterien:**
Der Nutzer ist in der Lage vor Spielstart zwischen verschiedenen Schwierigkeitsgraden auszuwählen, welche die Spielfeldgröße und Anzahl der Minen beeinflussen.
**Priorität:** Soll

#### Feldeigenschaften
**Beschreibung:**
Jede Zelle des Spielfeldes muss entweder leer sein, eine Mine enthalten oder eine Zahl anzeigen, die die Anzahl der angrenzenden Minen angibt.
**Problembeschreibung:**

**Erfüllungskriterien:**

**Priorität:** Muss

#### Feld aufdecken oder markieren
**Beschreibung:**
Die Spieler muss in der Lage sein, auf ein beliebiges Feld zu klicken, um entweder dessen Inhalt aufzudecken oder zu markieren, dass es möglicherweise eine Mine enthält.
**Problembeschreibung:**
Diese Anforderung stellt das Gerüst der Benutzerinteraktion mit dem Spiel dar, ohne welche es ihm unmöglich ist das Spiel erfolgreich zu spielen.
**Erfüllungskriterien:**
Jedes Feld erkennt die Nutzeraktion eines Klicks bzw. Doppelklicks und berechnet die jeweilige Folge korrekt aus.
**Priorität:** Muss

#### Zeit und Punkte
**Beschreibung:**
Das Spiel sollte eine Punkte- oder Timerfunktion enthalten, die es den Spielern ermöglicht, ihre Leistung zu verfolgen.
**Problembeschreibung:**
Die Spieler wollen ihren Fortschritt und ihr Geschick in dem Spiel messen können. Stats geben ihnen die Möglichkeit ihr Ergebnissen mit anderen oder ihren vorigen Spielen zu vergleichen
**Erfüllungskriterien:**
Während des Spielablaufes ist der Nutzer in der Lage die bisherige Zeit seines Spieles einzusehen, sowie eine dazugehörige momentane Evaluation seines Fortschrittes, welche aus der Spielfeldgröße und Spielzeit berechnet wird.
**Priorität:** Soll

#### Erster Zug
**Beschreibung:**
Der erste Klick eines Spielers sollte nie dazu führen, dass eine Mine aufgedeckt wird. Es sollte entweder ein leeres Feld oder eine Zahl sein.
**Problembeschreibung:**
Spieler haben beim ersten Zug keine Chance zu ermitteln, ob hinter dem Feld eine Mine liegt. Deshalb soll das erste Feld nie eine Mine sein.
**Erfüllungskriterien:**
Der Nutzer ist, selbst bei unvorteilhaften Spieleinstellungen, nicht imstande in seinem ersten Zug auf eine Mine zu klicken.
**Priorität:** Soll

#### Mine ausgelöst
**Beschreibung:**
Wenn ein Spieler auf ein Feld klickt, das eine Mine enthält, muss das Spiel enden und der Punktestand des Spielers sollte angezeigt werden.
**Problembeschreibung:**
Wenn eine Mine ausgelöst wird, ist das Speil beendet. Der Benuzter hat verloren.
**Erfüllungskriterien:**
Wenn eine Mine ausgelöst wird, ist das Speil beendet. Der Benuzter hat verloren.
**Priorität:** Muss

#### Felder markieren
**Beschreibung:**
Das Spiel muss eine Option zur Markierung von Zellen enthalten, in denen Minen vermutet werden, um den Spielern zu helfen, den Überblick über potenziell gefährliche Zellen zu behalten.
**Problembeschreibung:**
Um nicht ständig erneut überlegen zu müssen, ob sich hinter dem Feld eine Mine befindet, sollen Benutzer Felder markieren können. Diese Felder sollen nicht bei einem Klick ausgelöst werden.
**Erfüllungskriterien:**
Der Nutzer kann mithilfe eines Rechtsklickes auf ein noch nicht aufgedecktes Feld dieses mit einer Fahne visuell markieren
**Priorität:** Muss

#### Alle Felder aufgedeckt
**Beschreibung:**
Das Spiel muss eine Siegbedingung enthalten, die erfüllt ist, wenn alle Zellen, die keine Minen enthalten, aufgedeckt wurden.
**Problembeschreibung:**
Das Spiel ist beendet und der Nutzer hat gewonnen, wenn er alle Felder, hinter den sich eine Mine verbirgt markiert hat und keine zusätzlichen Felder markiert wurden. 
**Erfüllungskriterien:**
Wenn der Nutzer erfolgreich alle Felder, welche keine Minen enthalten, aufgedeckt hat und diejenigen, die Minen enthalten, mit einer Fahne versehen haben
**Priorität:** Muss

#### Tipps
**Beschreibung:**
Das Spiel kann eine "Tipp"-Funktion bieten, die dem Spieler einen Hinweis auf den Standort einer sicheren Zelle oder einer Mine gibt.
**Problembeschreibung:**
Unerfahrenen Nutzer kennen Techniken nicht. Sie sollen beim Lernen des Spiels unterstützt werden
**Erfüllungskriterien:**
Wenn der Nutzer länger als 3 Sekunden über ein Feld hovert erscheint eine kurze Beschreibung der Regeln beinhaltet
**Priorität:** Kann

#### Verbleibende Minen
**Beschreibung:**
Die Anzahl der verbleibenden Minen und markierten Zellen kann auf der Benutzeroberfläche angezeigt werden.
**Problembeschreibung:**
Der Nutzer hat vergessen wie viele Minen in den Spielerstellung ausgewählt wurden und kann somit die ihm verbleibende Anzahl an Minen nicht berechnen
**Erfüllungskriterien:**
Das Speilinterface zeigt neben des Spieles selber auch eine Seitenleiste mit Informationen zu den Spieleinstellungen und -feld
**Priorität:** Kann

#### Verdeckte Felder
**Beschreibung:**
Jede Zelle muss einen verdeckten Status haben, der zunächst verdeckt ist, und der Spieler kann Zellen aufdecken, indem er sie anklickt.
**Problembeschreibung:**
Der Nutzer muss selbst derjenige sein, der den Status der Zellen zu erforschen versucht.
**Erfüllungskriterien:**
Am Anfang eines Spielablaufes sind alle Felder verdeckt.
**Priorität:** Muss
**Setzt Anfroderung voraus:**

#### Aufdecken mehrerer Felder
**Beschreibung:**
Beim Klick auf ein Feld, in dem keine Mine auf dem Feld oder in der Umgebung ist, sollen alle Felder aufgedeckt werden, die in dem abgeschottetten Bereich sind.
**Problembeschreibung:**
Es gibt viele Felder, die nicht in der Nähe sind. Die User-Experience soll verbessert werden, indem der Benutzer nicht alle Felder in der Umgebung ancklicken muss.
**Erfüllungskriterien:**
Der Nutzer klickt auf ein Feld, welches nicht an mindestens eine Mine angrenzt und die angrenzenden leeren Felder, sowie deren unmittelbaren Nachbarn werden aufgedeckt.
**Priorität:** Soll

#### Spiel zurücksetzen
**Beschreibung:**
Der Spieler sollte in der Lage sein vor und nach dem Abschließen der momentanen Spielrunde das Spiel auf den Anfang zurückzusetzen
**Problembeschreibung:**
Der Nutzer will seine momentanen Spieleinstellungen beibehalten und versuchen seine Bestzeit zu schlagen, ohne hierfür jedesmal die Spieleinstellungen erneut auswählen zu müssen.
**Erfüllungskriterien:**
Sowohl während der Spielrunde als auch bei der Absolvierung eines Spieles ist wird dem Nutzer ein Knopf mit der Eigenschaft eine neue Spielinstanz mit denselben Einstellung, jedoch anderer Verteilung der Minen, zu erstellen.
**Priorität:** Soll

### Nicht-Funktionale Ziele

#### Plattformunabhängigkeit
**Beschreibung:**
Das Spiel muss in der Lage sein auf den gängigen Browser in der Webversion zu laufen
**Problembeschreibung:**
andere nutzer andere browser
**Erfüllungskriterien:**
läuft auf den gängigen webbrowsern
**Priorität:** Kann

#### Sicherheit
**Beschreibung:**
Das Spiel soll keine Informationen der Nutzer speichern
**Problembeschreibung:**
warum sollte es
**Erfüllungskriterien:**
ja passt
**Priorität:** Soll

#### DSGVO
**Beschreibung:**
muss dsgvo konform sien
**Problembeschreibung:**
illegal
**Erfüllungskriterien:**
legal
**Priorität:** Muss

### Nicht-Ziele

#### Falsche Highscores
**Beschreibung:**
Das Spiel muss in der Lage sein die Leistung des Nutzer korrekt zu evaluieren
**Problembeschreibung:**
Fehler oder Exploits in der Spielmechanik könnten zu unfairen Highscores führen.
**Erfüllungskriterien:**
Verwendung von sicheren Methoden zur Verfolgung der Spielzeit und regelmäßige Überprüfung von Spielerdaten auf Unregelmäßigkeiten.
**Priorität:** Muss

#### Unmögliche Highscores
**Beschreibung:**
Die erfolgreiche Beendigung des Spieles mit voller Punktzahl muss für die Nutzer ein erreichbares Ziel sein.
**Problembeschreibung:**

**Erfüllungskriterien:**

**Priorität:** Muss

### Langsam
**Beschreibung:**
Das Spiel muss zeitnah reagieren können
**Problembeschreibung:**
Der Nutzer will ein effizienzes und immersives Spieleerlebnis erleben.
**Erfüllungskriterien:**
Unter normalen Internetbedingungen ist das Spiel in der Lage innerhalb von höchstens 2 sekunden zu reagieren
**Priorität:** Muss

## Designentscheidungen (1000 Wörter)

### single page app



### Angular
**Beschreibung:**
Angular ist ein umfassendes Frontend-Framework, das darauf abzielt, die Entwicklung von dynamischen, modularen und gut strukturierten Webanwendungen zu erleichtern. Es bietet eine Vielzahl von Funktionen und Werkzeugen, um den Entwicklungsprozess zu optimieren.
**Begründing:**
- Komponentenbasierte Architektur: Angular-Anwendungen sind auf einer komponentenbasierten Architektur aufgebaut. Jede Funktion oder Ansicht wird durch Komponenten repräsentiert, die wiederverwendbar und leicht zu verstehen sind.
- TypeScript-Integration: Angular ist vollständig in TypeScript geschrieben, einer typisierten Version von JavaScript. Die Verwendung von TypeScript ermöglicht eine bessere Codequalität, frühzeitige Fehlererkennung und verbesserte Entwicklungs-Tool-Unterstützung.
- Kontinuität und Konsistenz: Durch die fortgesetzte Nutzung von Angular kann die Kontinuität in der Entwicklungspraxis aufrechterhalten werden. Das bereits vorhandene Wissen und die Erfahrung werden weiter genutzt, und die Entwickler können sich auf ihre vertrauten Werkzeuge und Strukturen verlassen.


### Docker
Docker ist eine Plattform für die Entwicklung, den Versand und die Ausführung von Anwendungen in Containern. Container sind leichtgewichtige, portable und autarke Einheiten, die Anwendungen und ihre Abhängigkeiten isoliert vom zugrunde liegenden System ausführen können. Hier eine Beschreibung und Erklärung, wie Docker in einem Projekt verwendet werden kann:

**1. Containerisierung:**
   - Docker ermöglicht es Ihnen, Ihre Anwendung und ihre Abhängigkeiten in einen einzigen Container zu packen. Dieser Container enthält alles, was zur Ausführung der Anwendung benötigt wird, wie Code, Laufzeit, Systemtools, Bibliotheken und Einstellungen.

**2. Portabilität:**
   - Container sind über verschiedene Umgebungen hinweg portabel. Da ein Docker-Container die Anwendung und ihre Abhängigkeiten kapselt, kann sie auf jedem Rechner, auf dem Docker installiert ist, konsistent ausgeführt werden, unabhängig vom zugrunde liegenden Betriebssystem oder der Hardware.

**3. Konsistenz der Umgebung:**
   - Docker stellt sicher, dass die Entwicklungs-, Test- und Produktionsumgebungen konsistent sind. Dadurch wird das Problem "es funktioniert auf meinem Rechner" reduziert, da die containerisierte Anwendung in jeder Umgebung auf die gleiche Weise ausgeführt wird.

**4. Abhängigkeitsmanagement:**
   - Docker vereinfacht die Verwaltung von Abhängigkeiten, indem Abhängigkeiten in Containern gekapselt werden. Dadurch werden Konflikte zwischen verschiedenen Versionen von Bibliotheken oder Abhängigkeiten in verschiedenen Projekten vermieden.

**5. Schnelles Deployment:**
   - Docker ermöglicht eine schnelle und einfache Bereitstellung von Anwendungen. Sobald ein Container erstellt ist, kann er einfach freigegeben und auf jedem Docker-fähigen System bereitgestellt werden.

### VS Code
**Beschreibung:**
Visual Studio Code (VSCode) ist ein beliebter und leistungsstarker Quellcode-Editor, der von Microsoft entwickelt wurde. Er ist für verschiedene Programmiersprachen weit verbreitet und bekannt für seine Flexibilität, Erweiterbarkeit und eine Fülle von Funktionen, die den Entwicklungs-Workflow verbessern. Hier finden Sie eine Beschreibung und Erklärung der Verwendung von VSCode in einem Projekt:
**Begründing:**
integration mit anderen tools 

benutzerfreundlich 


### Github
**Beschreibung:**
GitHub dient als zentraler Knotenpunkt für Ihr Projekt und bietet eine Reihe von Funktionen, die die Zusammenarbeit, Kommunikation und Versionskontrolle optimieren. Hier sind einige wichtige Aspekte:
**Begründing:**
Dokumentation:
GitHub kann die Dokumentation für Ihr Projekt bereitstellen. Markdown-Dateien und Wikis können verwendet werden, um Informationen über die Struktur des Projekts, Installationsanweisungen und Nutzungsrichtlinien bereitzustellen.

Sichtbarkeit und Transparenz:
GitHub bietet eine transparente Ansicht der Projektaktivitäten. Teammitglieder können sehen, wer zu bestimmten Teilen des Codes beigetragen hat, wann Änderungen vorgenommen wurden und an welchen Problemen gerade gearbeitet wird.



### Microsoft Teams
Microsoft Teams ist eine Plattform für die Zusammenarbeit, die die Kommunikation, die gemeinsame Nutzung von Dateien und das Projektmanagement in Unternehmen erleichtert. Es ist Teil der Microsoft 365-Suite und bietet eine zentrale Drehscheibe für Teams, die nahtlos zusammenarbeiten können. Hier finden Sie eine Beschreibung und Erklärung, wie Microsoft Teams effektiv in einem Projekt eingesetzt werden kann:

1. **Kommunikationsdrehscheibe:**
   - Teams dient als zentraler Knotenpunkt für die Kommunikation, der es Teammitgliedern ermöglicht, über Chats, Audioanrufe und Videomeetings Gespräche in Echtzeit zu führen.

2. **Kanäle und Kollaboration:**
   - Projekte können in verschiedene Kanäle unterteilt werden, die jeweils einem bestimmten Aspekt oder einer bestimmten Phase des Projekts gewidmet sind.
   - Kanäle erleichtern gezielte Diskussionen, die gemeinsame Nutzung von Dateien und die Zusammenarbeit in Bezug auf bestimmte Themen oder Aufgaben.

4. **Meetings und Videokonferenzen:**
   - Teams bietet eine robuste Videokonferenzfunktion, die virtuelle Meetings und Zusammenarbeit unabhängig vom physischen Standort der Teammitglieder ermöglicht.
   - Videoanrufe unterstützen die gemeinsame Nutzung des Bildschirms und ermöglichen so effektive Präsentationen und Diskussionen.

8. **Dokumentenspeicherung und -zusammenarbeit:**
   - Teams verfügt über eine SharePoint-Integration, die eine sichere und organisierte Dokumentenablage bietet.
   - In Teams freigegebene Dateien werden in SharePoint gespeichert, was einen einfachen Zugriff und Versionskontrolle ermöglicht.
**cross platform**


### image creator (evtl.)
**Beschreibung:**
ki bild generierung
**Begründing:**
faul

### Theme des Spieles
Die Entscheidung, ein auf Minecraft basierendes Theme für ein klassisches Indie-Spiel zu nutzen, könnte auf verschiedenen Überlegungen und Zielen basieren. Hier sind einige mögliche Begründungen:

1. **Bekanntheit und Popularität:**
   - Minecraft ist eines der erfolgreichsten und bekanntesten Spiele weltweit. Die Verwendung eines Minecraft-Themas könnte dazu beitragen, die Aufmerksamkeit der Spieler auf sich zu ziehen, da viele bereits mit der Ästhetik und dem Stil von Minecraft vertraut sind.

2. **Nostalgie und Spielerbindung:**
   - Minecraft hat eine große Fangemeinde, und viele Spieler haben positive Erinnerungen und eine starke Bindung an das Spiel. Ein auf Minecraft basierendes Theme könnte daher eine nostalgische Reaktion auslösen und diese Spieler dazu verleiten, das neue Spiel auszuprobieren.

3. **Kreative Freiheit und Anpassungsmöglichkeiten:**
   - Das Minecraft-Universum ist bekannt für seine kreativen Freiheiten und Anpassungsmöglichkeiten. Die Nutzung dieses Themas könnte dem Entwicklerteam erlauben, in Bezug auf Level-Design, Umgebungen und Charaktere äußerst kreativ zu sein, da Minecraft selbst viele verschiedene Stile und Elemente enthält.

4. **Cross-Promotion und Community-Interaktion:**
   - Die Integration eines Minecraft-Themas könnte dazu dienen, die Verbindung zur Minecraft-Community zu stärken. Durch Cross-Promotion und gezielte Marketingstrategien könnte das Indie-Spiel von der bestehenden Minecraft-Community entdeckt und unterstützt werden.

5. **Zielgruppenansprache:**
   - Wenn das Ziel des Indie-Spiels darin besteht, eine jüngere Zielgruppe anzusprechen, die bereits mit Minecraft vertraut ist, könnte die Verwendung eines entsprechenden Themas den Zugang zu dieser Zielgruppe erleichtern.

6. **Kombination von Spielmechaniken:**
   - Wenn das Indie-Spiel ähnliche Spielmechaniken wie Minecraft aufweist (zum Beispiel das Erkunden, Sammeln, Bauen), könnte die Verwendung eines auf Minecraft basierenden Themes die Spieler sofort mit den erwarteten Spielmechaniken vertraut machen.

Es ist wichtig zu beachten, dass die Entscheidung für ein bestimmtes Thema sorgfältig durchdacht werden sollte, um sicherzustellen, dass es gut zum Spielkonzept passt und die gewünschte Zielgruppe anspricht. Ein auf Minecraft basierendes Theme kann Vorteile bieten, sollte jedoch nicht nur aufgrund von Trends oder Bekanntheit gewählt werden, sondern sollte zum Gesamtkonzept und den Zielen des Spiels passen.

### Spielfeld - Richtlinen
Die Einstellungen des Spielfeldes bezüglich der Spalten und Reihen müssen folgende Kriterien erfüllen:
**Beschreibung:**
**Begründing:**
- Ganzzahlige Zahl
begründing:
Da alles andere kein sinn ergibt

- Größer als etwas anderes
begründing:
Da alles andere kein sinn ergibt

- kleiner als eine bestimmte Zahl
begründung:
das programm ist nicht darauf ausgelegt milliarden von feldern zu berechnen

- bestimmte ratio
begründung:
so will es der derzeitige code. den zu ändern wäre mühselig

### Minen - Richtlinen

Die Anzahl der Minen bei der Spieleinstellung muss folgende Kriterien erfüllen:
**Beschreibung:**
**Begründing:**

- Ganzzahlige Zahl
begründing:
Da alles andere kein sinn ergibt

- Die Anzahl der Minen muss kleiner sein, als die Anzahl der Spielfelder
Begrundung:
Die Anzahl der Minen darf nicht die der Spielfelder übertreffen, da unmöglich, aber darf auch nicht gleichgroß sein (siehe: Funktionale Anforderung "Erster Zug")


### Evaluation der Punkte - Richtlinen

Die Evaluation der Punkte muss folgenden Kriteria unterlegen:
**Beschreibung:**
Problem: Spieler verstehen möglicherweise nicht, wie die Highscores berechnet werden.
Erfüllungskriterien: Klare Dokumentation der Berechnungsmethoden. Verständliche Erklärungen für Spieler.
**Begründing:**

- berechnung basierend auf feldern und zeit

- für den nutzer erreichbar
(siehe anforerujngå)



  

## Glossar (100 Wörter)

### GitHub
### Angular
### Typescript
### Frontend
### Docker
### Microsoft Teams
### Sharepoint
### Excel
