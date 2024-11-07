# Dokumentation Frontend Team 2 
**Castor Manuel Fernández Lado** | **M321 Kemper Stefan** | **Datum: 06.11.2024**

---

## Frontend

### Projektübersicht
- **Name**: LB2_M321 Frontend Team 2
- **Beschreibung**: Ein Frontend-Projekt für das Abschlussprojekt des Moduls 321, entwickelt mit Quasar und Vue.js, das eine benutzerfreundliche Oberfläche bietet.
- **Technologien**: Quasar Framework, Vue.js, JavaScript, SCSS für Styles.
- **Projektstatus**: In Entwicklung und Testphase.
- **Entwickelt von**: Castor Fernández

### Struktur des Projektes
- **/src**: Hauptordner für die Anwendung.
- **/components**: Wiederverwendbare UI-Komponenten (z. B. Formular-Elemente, Karten).
- **/pages**: Hauptseiten der Anwendung, z. B. Dashboard oder Benutzerprofilseiten.
- **/layouts**: Anwendungs-Layouts für wiederkehrende Strukturen wie die Navigationsleiste oder den Footer.
- **/assets**: Statische Ressourcen wie Bilder und Icons.

### Funktionale Anforderungen

#### Nicht optional:

**Benutzeranmeldung und -registrierung:**

- Benutzer müssen sich einloggen können und über ein Registrierungsformular ein neues Konto erstellen können.
- **Login:** Benutzer müssen ihre Anmeldedaten (Benutzername und Passwort) eingeben, um auf das Dashboard zugreifen zu können.
- **Registrierung:** Benutzer müssen ein Konto mit einem Benutzernamen, einer E-Mail-Adresse und einem Passwort erstellen können.

**Task-Verwaltung (CRUD):**

- **Erstellen:** Der Benutzer muss in der Lage sein, neue Aufgaben zu erstellen.
- **Lesen:** Der Benutzer kann alle Aufgaben in einer Liste anzeigen lassen.
- **Bearbeiten:** Aufgaben müssen bearbeitet werden können, einschließlich der Änderung von Titel und Beschreibung.
- **Löschen:** Der Benutzer kann Aufgaben aus der Liste löschen.

**Fehlerbehandlung und Validierung:**

- Das System muss sicherstellen, dass die Eingaben im Formular validiert werden (z. B. leere Felder verhindern) und dass Fehlermeldungen angezeigt werden, wenn eine ungültige Eingabe vorliegt.
- Bei der Anmeldung und Registrierung müssen klare Fehlermeldungen angezeigt werden (z. B. ungültige Anmeldedaten oder fehlende Felder).

**Token-basierte Authentifizierung:**

- Das System muss ein JWT (JSON Web Token) verwenden, um sicherzustellen, dass nur authentifizierte Benutzer Zugriff auf ihre Aufgaben haben.
- Das Token muss bei jeder API-Anfrage an das Backend angehängt werden.

**Aufgabenliste:**

- Die Aufgaben müssen in einer Tabelle oder Liste angezeigt werden, und es muss eine Möglichkeit geben, Aufgaben zu filtern oder zu suchen.

#### Optional:

**Such- und Filterfunktionen:**

- Benutzer können Aufgaben nach bestimmten Kriterien filtern oder suchen (z. B. nach Titel, Beschreibung, Erstellungsdatum).

**Erinnerungen und Benachrichtigungen:**

- Die Möglichkeit, Aufgaben mit Erinnerungen oder Benachrichtigungen zu versehen, die den Benutzer daran erinnern, wenn eine Aufgabe fällig ist.

**Benutzerprofilverwaltung:**

- Eine Möglichkeit für Benutzer, ihre Profildaten (z. B. E-Mail, Name) zu aktualisieren.
- Benutzer könnten auch ihr Passwort ändern.

**Multilingualität:**

- Unterstützung für mehrere Sprachen, damit die Anwendung mehrsprachig genutzt werden kann.

### Nicht-funktionale Anforderungen

#### Nicht optional:

**Responsivität:**

- Die Anwendung muss auf verschiedenen Bildschirmgrößen und Geräten gut funktionieren (Mobile, Tablet, Desktop).
- Das Design und Layout müssen sich an die Bildschirmgröße des Geräts anpassen, ohne die Benutzererfahrung zu beeinträchtigen.

**Benutzerfreundlichkeit:**

- Die Anwendung muss eine intuitive Benutzeroberfläche bieten, die es den Benutzern ermöglicht, schnell und einfach mit den Funktionen zu interagieren (z. B. einfaches Hinzufügen und Löschen von Aufgaben).
- Klare Navigation und eine gut strukturierte Layout für eine angenehme Nutzungserfahrung.

**Performance:**

- Schnelle Ladezeiten der Anwendung, insbesondere auf mobilen Geräten.
- Optimierung der Anwendung, damit sie auch bei größeren Datenmengen reibungslos funktioniert.

**Fehlerbehandlung und Robustheit:**

- Das System muss in der Lage sein, mit Fehlern im Backend oder bei der Benutzereingabe angemessen umzugehen (z. B. durch Anzeige von Fehlermeldungen und die Vermeidung von Abstürzen).

**Sicherheit:**

- Sicherstellen, dass Authentifizierung und Token-Management sicher sind (z. B. Verwendung von HTTPS, sichere Speicherung des Tokens).

#### Optional:

**Offline-Funktionalität:**

- Die Anwendung könnte mit einem Offline-Modus ausgestattet werden, sodass Benutzer weiterhin Aufgaben hinzufügen oder anzeigen können, auch wenn keine Internetverbindung besteht.

**Dark Mode:**

- Unterstützung für einen Dark Mode, der es den Benutzern ermöglicht, zwischen einem hellen und dunklen Design zu wechseln.

**Integration von Drittanbieterdiensten:**

- Erweiterung der Anwendung, um Dienste wie Google Calendar für die Aufgabenplanung oder APIs zur Authentifizierung zu integrieren.

### Zusammenfassung der Anforderungen

| Kategorie                | Anforderung                         | Optionale Features                             |
|--------------------------|-------------------------------------|------------------------------------------------|
| **Funktional**            | Benutzeranmeldung und -registrierung | Such- und Filterfunktionen                    |
|                          | Task-Verwaltung (CRUD)             | Erinnerungen und Benachrichtigungen           |
|                          | Fehlerbehandlung und Validierung   | Benutzerprofilverwaltung                      |
|                          | Token-basierte Authentifizierung   | Multilingualität                               |
|                          | Aufgabenliste                      |                                                |
| **Nicht-funktional**      | Responsivität                       | Offline-Funktionalität                        |
|                          | Benutzerfreundlichkeit              | Dark Mode                                      |
|                          | Performance                         | Integration von Drittanbieterdiensten         |
|                          | Fehlerbehandlung und Robustheit    |                                                |
|                          | Sicherheit                          |                                                |

**Nicht optionale Anforderungen** sind für die Kernfunktionalitäten des Frontends unerlässlich und gewährleisten eine stabile, benutzerfreundliche und sichere Anwendung. **Optionale Features** bieten zusätzliche Funktionen, die die Benutzererfahrung erweitern und die Anwendung flexibler machen, aber nicht zwingend erforderlich sind, um das Hauptziel zu erreichen.

### Zustand-Management und APIs
- **Globale Zustand-Verwaltung (Vuex)**: Falls integriert, wird Vuex zur Verwaltung des globalen Zustands verwendet.
- **API-Integration**:
  - Verwendung des Quasar Axios-Plugins.

### TestKonzept

#### Ziele des Tests
Die Unit-Tests sollen sicherstellen, dass die Methoden und Computed Properties jeder Komponente korrekt funktionieren und die erwarteten Ergebnisse liefern. Geprüft werden sollen:
- **TodoInput**: Validiert und emittiert neue Aufgaben korrekt.
- **TodoList**: Handhabt das Bearbeiten und Löschen von Aufgaben und emittiert die entsprechenden Events.
- **IndexPage**: Verarbeitet Aufgaben-Management-Methoden korrekt, einschließlich Hinzufügen, Bearbeiten und Löschen.
- **LoginPage**: Führt Login- und Registrierungsvalidierungen durch und gibt korrekte Nachrichten zurück.

#### Testmethoden
- **Unit-Tests**: Tests werden für Methoden wie `submitTask`, `removeTask` und `editTask` geschrieben, um sicherzustellen, dass sie wie erwartet arbeiten.

#### Testwerkzeuge
- **Jest**: Für Unit-Tests.
- **Vue Test Utils**: Zum Testen von Vue-Komponenten und zum Mocken von Events.

### TestCases

| Komponente / Page | Testfall | Beschreibung | Erwartetes Ergebnis | Test_ID |
|-------------------|----------|--------------|----------------------|---------|
| **TodoInput** | Initialisiert `newTask` als leeren String | Überprüft, ob `newTask` korrekt als leerer String initialisiert wird. | `newTask` ist leer (`''`). | 1.1 |
| **TodoInput** | `submitTask` emittiert das `addTask`-Event und setzt `newTask` zurück, wenn Eingabe nicht leer ist | Testet, ob `submitTask` das `addTask`-Event emittiert und `newTask` zurücksetzt, wenn eine gültige Eingabe vorhanden ist. | `addTask`-Event wird emittiert und `newTask` wird auf `''` zurückgesetzt. | 1.2 |
| **TodoInput** | `submitTask` emittiert kein Event, wenn `newTask` leer ist | Überprüft, ob `submitTask` das Event nicht emittiert, wenn `newTask` leer ist. | Kein `addTask`-Event wird emittiert, wenn `newTask` leer ist. | 1.3 |
| **TodoList** | Initialisiert die `columns` korrekt | Stellt sicher, dass die `columns` korrekt mit den erwarteten Werten initialisiert werden. | `columns` entspricht der erwarteten Struktur. | 2.1 |
| **TodoList** | `removeTask` emittiert das `removeTask`-Event mit dem korrekten Index | Testet, ob `removeTask` das `removeTask`-Event mit dem angegebenen Index emittiert. | `removeTask`-Event wird mit dem richtigen Index emittiert. | 2.2 |
| **TodoList** | `editTask` emittiert das `editTask`-Event mit dem korrekten Index | Testet, ob `editTask` das `editTask`-Event mit dem angegebenen Index emittiert. | `editTask`-Event wird mit dem richtigen Index emittiert. | 2.3 |
| **IndexPage** | Initialisiert die Aufgabenliste `tasks` als leeres Array | Überprüft, ob `tasks` standardmäßig als leeres Array initialisiert wird. | `tasks` ist ein leeres Array (`[]`). | 3.1 |
| **IndexPage** | `token` wird aus `sessionStorage` korrekt initialisiert | Stellt sicher, dass `token` aus `sessionStorage` geladen wird und den korrekten Wert speichert. | `token` entspricht dem Wert in `sessionStorage`. | 3.2 |
| **IndexPage** | `addTask` fügt eine neue Aufgabe zur `tasks`-Liste hinzu | Prüft, ob `addTask` eine Aufgabe zur lokalen `tasks`-Liste hinzufügt. | Die neue Aufgabe wird zur `tasks`-Liste hinzugefügt. | 3.3 |
| **IndexPage** | `removeTask` entfernt die Aufgabe aus `tasks`-Liste | Überprüft, ob `removeTask` die Aufgabe korrekt aus `tasks` entfernt. | Die angegebene Aufgabe wird aus der `tasks`-Liste entfernt. | 3.4 |
| **IndexPage** | `editTask` aktualisiert die Aufgabe in `tasks`-Liste | Testet, ob `editTask` die Titel- und Beschreibungseigenschaften einer Aufgabe aktualisiert. | Die Aufgabe wird mit neuen Werten in `tasks` aktualisiert. | 3.5 |
| **LoginPage** | Fehlermeldung bei fehlendem Benutzernamen oder Passwort | Überprüft, ob bei fehlendem Benutzernamen oder Passwort eine Fehlermeldung zurückgegeben wird. | Fehlermeldung wie „Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein“ wird angezeigt. | 4.1 |
| **LoginPage** | `onLogin` emittiert korrekte Benachrichtigung und setzt das Token bei erfolgreicher Anmeldung | Prüft, ob `onLogin` eine Benachrichtigung bei erfolgreichem Login emittiert und das Token speichert (Mock-Test für Token). | Benachrichtigung zeigt erfolgreichen Login an, und `sessionStorage` enthält das Token. | 4.2 |
| **LoginPage** | Fehlermeldung bei unvollständigen Registrierungsdaten | Prüft, ob bei unvollständigen Registrierungsdaten eine Fehlermeldung angezeigt wird. | Fehlermeldung wie „Bitte füllen Sie alle Felder aus“ wird angezeigt. | 4.3 |
| **LoginPage** | `register`-Funktion emittiert Erfolgsnachricht bei vollständigen Daten | Prüft, ob bei vollständigen Registrierungsdaten eine Erfolgsnachricht zurückgegeben wird. | Erfolgsnachricht „Registrierung erfolgreich! Bitte loggen Sie sich ein.“ wird emittiert. | 4.4 |
| **LoginPage** | `resetRegisterForm` setzt alle Registrierungsfelder zurück | Überprüft, ob `resetRegisterForm` alle Eingabefelder im Registrierungsformular korrekt zurücksetzt. | Alle Registrierungsfelder (`registerUsername`, `registerEmail`, `registerFirstName`, `registerLastName`, `registerPassword`) sind leer. | 4.5 |

**Hinweis**: Diese Testfälle konzentrieren sich auf die isolierte Funktionalität jeder Methode und das Verhalten innerhalb jeder Komponente, um die Codequalität und Fehlertoleranz sicherzustellen.

### Testprotokoll für manuelle Tests

| Komponente / Page | Testfall | Beschreibung | Testaufbau | Erwartetes Ergebnis | Tatsächliches Ergebnis | Status | Bemerkungen |
|-----------------------|--------------|------------------|----------------|-------------------------|---------------------------|------------|-----------------|
| **TodoInput** | Initialisiert `newTask` als leeren String | Überprüft, ob `newTask` korrekt als leerer String initialisiert wird. | Starte die Anwendung und überprüfe den initialen Wert von `newTask`. | `newTask` ist leer (`''`). | Bestanden | - |
| **TodoInput** | `submitTask` emittiert das `addTask`-Event und setzt `newTask` zurück, wenn Eingabe nicht leer ist | Gebe einen Task in das Eingabefeld ein und klicke auf "Hinzufügen". | `addTask`-Event wird emittiert, `newTask` wird auf `''` zurückgesetzt. | `addTask`-Event wird emittiert, `newTask` wird zurückgesetzt. | Bestanden | - |
| **TodoInput** | `submitTask` emittiert kein Event, wenn `newTask` leer ist | Lasse das Eingabefeld leer und klicke auf "Hinzufügen". | Kein `addTask`-Event wird emittiert. | Kein `addTask`-Event wird emittiert. | Bestanden | - |
| **TodoList** | Initialisiert die `columns` korrekt | Überprüfe die Struktur von `columns` bei der Initialisierung der Seite. | `columns` entspricht der erwarteten Struktur. | `columns` entspricht der erwarteten Struktur. | Bestanden | - |
| **TodoList** | `removeTask` emittiert das `removeTask`-Event mit dem korrekten Index | Wähle eine Aufgabe aus und klicke auf "Löschen". | `removeTask`-Event wird mit dem richtigen Index emittiert. | `removeTask`-Event wird mit dem richtigen Index emittiert. | Bestanden | - |
| **TodoList** | `editTask` emittiert das `editTask`-Event mit dem korrekten Index | Wähle eine Aufgabe aus und bearbeite den Titel, dann klicke auf "Speichern". | `editTask`-Event wird mit dem richtigen Index emittiert. | `editTask`-Event wird mit dem richtigen Index emittiert. | Bestanden | - |
| **IndexPage** | Initialisiert die Aufgabenliste `tasks` als leeres Array | Starte die Anwendung und überprüfe die `tasks`-Liste bei der Initialisierung. | `tasks` ist ein leeres Array (`[]`). | `tasks` ist ein leeres Array (`[]`). | Bestanden | - |
| **IndexPage** | `token` wird aus `sessionStorage` korrekt initialisiert | Überprüfe, ob das `token` korrekt aus `sessionStorage` geladen wird. | `token` entspricht dem Wert in `sessionStorage`. | `token` entspricht dem Wert in `sessionStorage`. | Bestanden | - |
| **IndexPage** | `addTask` fügt eine neue Aufgabe zur `tasks`-Liste hinzu | Gebe eine neue Aufgabe ein und klicke auf "Hinzufügen". | Die neue Aufgabe wird zur `tasks`-Liste hinzugefügt. | Die neue Aufgabe wird zur `tasks`-Liste hinzugefügt. | Bestanden | - |
| **IndexPage** | `removeTask` entfernt die Aufgabe aus `tasks`-Liste | Wähle eine Aufgabe aus und klicke auf "Löschen". | Die angegebene Aufgabe wird aus der `tasks`-Liste entfernt. | Die angegebene Aufgabe wird aus der `tasks`-Liste entfernt. | Bestanden | - |
| **IndexPage** | `editTask` aktualisiert die Aufgabe in `tasks`-Liste | Bearbeite eine Aufgabe und klicke auf "Speichern". | Die Aufgabe wird mit neuen Werten in `tasks` aktualisiert. | Die Aufgabe wird mit neuen Werten in `tasks` aktualisiert. | Bestanden | - |
| **LoginPage** | Fehlermeldung bei fehlendem Benutzernamen oder Passwort | Lasse das Login-Formular leer und klicke auf "Login". | Fehlermeldung wie „Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein“ wird angezeigt. | Fehlermeldung wie „Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein“ wird angezeigt. | Bestanden | - |
| **LoginPage** | `onLogin` emittiert korrekte Benachrichtigung und setzt das Token bei erfolgreicher Anmeldung | Gib gültige Anmeldedaten ein und klicke auf "Login". | Benachrichtigung zeigt erfolgreichen Login an, und `sessionStorage` enthält das Token. | Benachrichtigung zeigt erfolgreichen Login an, und `sessionStorage` enthält das Token. | Bestanden | - |
| **LoginPage** | Fehlermeldung bei unvollständigen Registrierungsdaten | Lasse ein oder mehrere Registrierungsfelder leer und klicke auf "Registrieren". | Fehlermeldung wie „Bitte füllen Sie alle Felder aus“ wird angezeigt. | Fehlermeldung wie „Bitte füllen Sie alle Felder aus“ wird angezeigt. | Bestanden | - |
| **LoginPage** | `register`-Funktion emittiert Erfolgsnachricht bei vollständigen Daten | Gib vollständige Registrierungsdaten ein und klicke auf "Registrieren". | Erfolgsnachricht „Registrierung erfolgreich! Bitte loggen Sie sich ein.“ wird emittiert. | Erfolgsnachricht „Registrierung erfolgreich! Bitte loggen Sie sich ein.“ wird emittiert. | Bestanden | - |
| **LoginPage** | `resetRegisterForm` setzt alle Registrierungsfelder zurück | Klicke auf "Zurücksetzen" im Registrierungsformular. | Alle Registrierungsfelder (`registerUsername`, `registerEmail`, `registerFirstName`, `registerLastName`, `registerPassword`) sind leer. | Alle Registrierungsfelder sind leer. | Bestanden | - |

### Stille und Themes
- **SCSS und Quasar-Styling**: Nutzung von SCSS und Quasars integrierten CSS-Klassen.
- **Globale Farb- und Stilthemen**: Definition von Farb- und Stilvariablen für die gesamte Anwendung (über `src/css`).
- **Benennungskonventionen**: Konsistente Klassennamen, vorzugsweise in BEM (Block-Element-Modifier)-Konvention.

### Code-Konventionen und Formatierung
- **ESLint und Prettier**: Einsatz von ESLint und Prettier für sauberen und konsistenten Code-Stil.
- **Commit-Richtlinien**: Konsistente Commit-Nachrichten für eine übersichtliche Entwicklungshistorie.
- **Weitere Richtlinien**:
  - Kommentare zur Erklärung komplexer Logik.
  - Nutzung moderner JavaScript-Methoden (`map`, `filter`, `reduce`).

### Weiterführende Informationen
- **Dokumentation**: Siehe die Quasar- und Vue.js-Dokumentationen für tiefere Einblicke.

### Absicht (SOLL)

#### Welche Ziele hatte ich?
Mein Ziel war ein funktionales Frontend, das gut mit den APIs kommuniziert. Das Projekt ist eine Todo List App mit vier verschiedenen Services:
- **Backend**: API
- **Frontend**
- **SQL**
- **Login API**: SQL zum Speichern der User-Daten
- **Authorisierung**: Users sollen authorisiert sein.

Die Ziele im Frontend umfassen die Implementierung und Dokumentation folgender Features:
- CRUD-Funktionen für Tasks auf der API
- Login und Register über die Login API

### Resultat (IST)

#### Welche Ziele habe ich erreicht?
Die folgenden Features wurden erfolgreich im Frontend umgesetzt:
- **Create Task**: Hinzufügen von Aufgaben auf der Index-Seite.
- **Get Task**: Anzeigen vorhandener Aufgaben in einer Tabelle.
- **Delete Task**: Löschen von Aufgaben über die Anzeigetabelle.
- **Update Task**: Bearbeiten der Titel und Beschreibung der Aufgaben.
- **Login mit Bearer Token**: Authentifizierung und Token-Management.
- **User Registration**: Möglichkeit zur Benutzerregistrierung.
- **Authorisierung**: Barer Token wird in SessionStorage gespeichert und als Header in jedem API request geschickt.

#### Was müsste noch verbessert werden?
Verbesserungspotential besteht in der Testeffizienz und in der Kommunikation mit Teammitgliedern.

### Reflexion

#### Welche Probleme sind aufgetreten?

##### UnitTests
Unit-Tests für Frontend-Projekte waren für mich neu und erforderten viel Zeit für Dokumentationsrecherche.

##### Manuelle Tests
Die Services meiner Teammitglieder waren nicht immer gebaut, sodass ich nicht immer alles testen konnte und keine Mock-Daten verfügbar waren.

##### Kommunikation
Die Kommunikation mit meinen Teammitgliedern könnte verbessert werden, war jedoch letztlich ausreichend, um die Arbeit zu bewältigen.

#### Was hat gut funktioniert?
Die Planung und Entwicklung liefen insgesamt reibungslos.

#### Was würde ich das nächste Mal wieder so machen? Was würde ich ändern?
- Verbesserung der Kommunikation
- Eigenständiges Einrichten der Services der Teammitglieder zur besseren Testbarkeit
- Mehr Styling implementieren

---