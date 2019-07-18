Die App wurde so entworfen, dass sich die Hauptgestaltungselemente innerhalb der App durch Anpassungen einer JavaScript-Bibliothek in der goMobile Datenbank mit dem Domino Designer ändern lassen.

> Dieser Leitfaden versucht wichtige Optionen und Möglichkeiten für Anpassungen zu erklären und aufzulisten. Die JavaScript-Bibliothek 'app_getConfig' ist hierbei eine gute Quelle, um den Aufbau und die damit verbundenen Anpassungsmöglichkeiten zu verstehen.

> Verbesserungen an der Dokumentation können ganz einfach per Github eingefügt werden. Dieses Dokument kann unter [https://github.com/GEDYSIntraWare/Anpassungsleitfaden-goMobilePro/blob/master/CUSTOMIZING.md](https://github.com/GEDYSIntraWare/Anpassungsleitfaden-goMobilePro/blob/master/CUSTOMIZING.md) bearbeitet werden.

# Aktualisieren der Konfiguration

Die meisten Konfigurationen aus der Database Settings und die Definitionen für goMobile Pro werden zu Gunsten der Performance in der App goMobile Pro gespeichert. Die App aktualisiert beim Start einmal alle 24 Stunden die gespeicherte Konfiguration, d.h. die Konfiguration wird erneut über die goMobile Datenbank abgerufen. Weiterhin hat der Anwender selbst die Möglichkeit, die Aktualisierung der Konfiguration über die Konfigurationsseite innerhalb der App vorzunehmen.

In der goMobile Datenbank gibt es in den Ansichten die Aktion "Aktualisieren der Konfiguration erzwingen". Mit dieser Aktion kann das Laden der Konfiguration für Anwender der goMobile Pro App erzwungen werden, auch wenn noch keine 24 Stunden seit der letzten Aktualisierung vergangen sind.

# Standarddefinitionen verändern

In der JavaScript-Bibliothek 'app_customization' hat man Zugriff auf alle Konfigurationsobjekte, bevor diese vom REST-Service an die App übermittelt werden. Wenn Standardkonfigurationen verändert oder entfernt werden sollen, können hier die entsprechenden JavaScript-Objekte und -Arrays verändert werden. Zusätzlich zu den Beispielen in den einzelnen Funktionen sollte auch die Struktur der Konfigurationsobjekte in der bereits erwähnten JavaScript-Bibliothek 'app_getConfig' betrachtet werden.

# Eine eigene Datenbank in goMobile Pro verwenden

In diesem Beispiel werden Definitionen für eine externe Datenbank "CD Verwaltung" erstellt und Ansichten für die Integration in goMobile Pro vorbereitet.

## Vorrausetzung

Die Datenbank ist bereits an goMobile „angebunden“, d.h. es gibt eine Konfiguration für eine flexible Liste und einen Startmenüeintrag.

## Eine flexible Liste in goMobile Pro verwenden

Ansichten, die bereits für goMobile angepasst wurden, können durch kleine Änderungen auch als Ansichten für goMobile Pro verwendet werden. Dazu muss eine neue Spalte "mobileConfig" eingefügt werden. Diese Spalte enthält Informationen, die goMobile Pro benötigt, um die Ansicht zu formatieren. Alle Spalten, die angezeigt werden sollen, müssen die Zeile `isMobileView:="true"` in der Spaltenformel beinhalten. Diese Information sorgt dafür, dass der REST-Service diese Spalte an die App überträgt.

**Checkliste**
- Die Zeile `isMobileView:="true";` in die Spalten, die angezeigt werden sollen, hinzufügen.
- Die mobileConfig-Spalte in die flexiblen Listen einfügen.
    ```
    listStyle := "lscd";
    documentStyle := "dscd";
    actionMenu := "";
    

    "<listStyle>" + listStyle + "</listStyle><documentStyle>" + documentStyle + "</documentStyle><actionMenu>" + actionMenu + "</actionMenu>"
    ```
-	In der JavaScript-Bibliothek 'app_customization' die Funktion 'cuGetListStyle' erweitern.
    ```json
		object.lscd = {
		    "itemStyle": "multiline",
		    "title": "$4",
		    "subtitle": "$5"
		}
    ```

Die 'itemStyles' definieren, wie ein Listeneintrag angezeigt wird. Die verfügbaren `itemStyles` und deren Optionen sind weiter unten in der Dokumentation aufgelistet.

> Die Verwendung von sprechenden programmatischen Spaltennamen für alle Spalten, die Werte für die App beinhalten, machen spätere Änderungen einfacher. Bei bestimmten Formelwerten werden diese jedoch von Notes automatisch belegt. Prüfen Sie daher die Spaltennamen, falls es zu Problemen kommen sollte.

## Ein Dokument in goMobile Pro öffnen

Zum Öffnen von Dokumenten wird für jeden Dokumententyp eine eigene Notes Ansicht mit allen Daten und Definitionen benötigt.  Der Name dieser Ansicht muss folgender Namenskonvention folgen:  „vaJAPIMobileDT“ + Dokumenttyp (Wert aus dem Feld DocType), z.B. vaJAPIMobileDTfacd. Weiterhin ist die Notes Ansicht "IDStructure" notwendig.

Der 'DocumentStyle' gibt an, wie ein Dokument angezeigt wird. Im 'DocumentStyle' ist definiert, welche Felder mit welchem Anzeigeelement dargestellt werden. Diese Anzeigeelemente werden 'Components' genannt und beinhalten in der Definition in der Regel den Feldnamen und weitere Parameter. Beim Öffnen von Dokumenten wird der 'DocumentStyle' für das Dokument aus dem Konfigurationsspeicher geladen. Er wird über die Angabe in der mobileConfig-Spalte gefunden.

**Checkliste**
 - Dokumente bestehen aus 'Components'. Die Optionen einzelner Components sind unter der Kategorie "Field" weiter erklärt.
  ```json
    object.dscd = {
        "title": "$4",
            "fieldDefinitions": [
                {
                    "component": "HeaderAddress",
                    "inputs": {
                        "title": "$4",
                        "subtitle": "$5"
                    }
                },
                {
                    "component": "LabeledText",
                    "inputs": {
                        "label": "Jahr",
                        "value": "$6"
                    }
                },
                {
                    "component": "LabeledText",
                    "inputs": {
                        "label": "Genre",
                        "value": "$7"
                    }
                }
        ]
      }
  ```

-	Die Ansicht 'IDStructure' muss vorhanden sein.
-	Eine DocType-Ansicht erstellen. Namenskonvention:  „vaJAPIMobileDT“ + Dokumenttyp (Wert aus dem Feld DocType).
-	Die mobileConfig-Spalte in die Notes Ansicht der flexiblen Liste einfügen.
  ```
  documentStyle := "dscd";
  rtFields := "";
  actionMenu := "";
  createMenu := "";

  "<documentStyle>" + documentStyle + "</documentStyle><richTextFields>" + rtFields + "</richTextFields><actionMenu>" + actionMenu + "</actionMenu><createMenu>" + createMenu + "</createMenu>"
  ```
-	Die Funktion `cuGetDocumentStyle` aus der JavaScript-Bibliothek 'app_customization' erweitern.

> Die Spalten werden beim Öffnen in das Dokument übergeben. Somit kann das Dokument direkt dargestellt werden. Hier ist die Angabe des 'documentStyle' in der mobileConfig-Spalte der Notes Ansicht notwendig. Die Spaltennamen in der Notes Ansicht der flexiblen Liste müssen identisch zur DocType-Ansicht sein. Beim Öffnen von Dokumenten werden die Werte, die bereits aus der Ansicht ausgelesen werden können, angezeigt. Alle weiteren Werte werden nachgeladen.

### Richtext

Richtextfelder, die in goMobile Pro angezeigt werden sollen, müssen in der mobileConfig-Spalte angegeben werden, damit sie vom REST-Service aufbereitet und übertragen werden können.

**Checkliste**
-	Die mobileConfig-Spalte um den Namen des Richtextfelds ergänzen (z. Bsp.: "body").
  ````json
  rtFields := "body";

  "..<richTextFields>"  + rtFields + "</richTextFields>..." 
  ````
-	Den documentStyle "Dscd" um folgende Komponente erweitern:    
  ````json      
  {
      "component": "LabeledTextarea",
      "inputs": {
          "value": "body",
          "openRTAvailable": true,
          "itemMaxHeight": "18rem"
      }
  }
  ````

> Die Methode `addFieldsToRestServiceResponse` bietet die Möglichkeit in Dokumentenklassen Werte zur Antwort des REST-Services hinzuzufügen (z.B. Office Dokumente, DocumentBase).

## Ansicht und Dokument um Aktionen erweitern

Für die Dokumente und die Treffer in Listen können Aktionen definiert werden. Diese Aktionen werden in sogenannte 'ActionSets' zusammengefasst. In der mobileConfig-Spalte kann für jedes Dokument eine ActionSet-ID hinterlegt werden.

Es gibt einige vordefinierte Aktionen, die mit Hilfe eigener Parameter auch für eigene Aktionen genutzt werden können. Einige Aktionen können nach dem Ausführen eine Callback- und Errorcallback-Funktion ausführen. In der Liste der vorhandenen Aktionen werden die Parameter näher erläutert. In der JavaScript-Bibliothek 'app_getConfig' sind einige Aktionen umgesetzt und können wiederverwendet werden.

**Checkliste**
-	In der JavaScript-Bibliothek 'app_customization Lib' die Funktion `cuGetActions` um die Aktion und das ActionSet erweitern:
  ```javascript
  //Neue Aktion definieren
  object.getActions.showCD = {
          "label": "CD anzeigen",
          "icon":"vwicn187",
          "color": "primary",
          "isStandalone": true,
          "action": {
              "name": "openPageOnline",
              "params": {
                          "crmUrl": "showCD.xsp",
                          "crmPointer": "fdMe|GetDocField"
                    }
            }
      }
    
  //ActionSet für Dokumententyp "cd" anlegen
  object.getDocumentActionSets.ascd = [
      "showCD"
  ]
  ```
-	ID des ActionSets in DocType-Ansicht hinterlegen.
-	ID des ActionSets in der Notes Ansicht der flexiblen Liste hinterlegen.

Die Aktionen, die in der DocType-Ansicht hinterlegt sind, werden im geöffneten Dokument angezeigt. Die Aktionen, die in der Ansicht angegeben werden, sind in den Slide Actions in der Liste vorhanden.

> Tipp für die Aktion "openPageOnline": Es gibt einen Unterschied zwischen den Parametern "url": und "crmUrl". Der Parameter "url" öffnet den Browser mit der übergebenen URL und "crmUrl" lädt eine XPage mit den Parametern im goMobile Framework für Navigation, Dialoge etc.

## Eine eigene Verknüpfungsansicht verwenden

In Verknüpfungsansichten müssen die Spalten, wie in den Ansichten der flexiblen Listen, mit `isMobileView=true` und der mobileConfig-Spalte erweitert werden, damit diese in goMobile Pro dargestellt werden können.

**Checkliste**
-	Eine Verknüpfungskonfiguration erstellen bzw. für Mobile freigeben.
-	Die Spalten in der Ansicht mit `isMobileView:="true";` versehen.
-	Die mobileConfig-Spalte erstellen.
  ```
  listStyle := "lscd";
  documentStyle := "dscd";
  actionMenu := "";

  "<listStyle>" + listStyle + "</listStyle><documentStyle>" + documentStyle + "</documentStyle><actionMenu>" + actionMenu + "</actionMenu>"
  ```

## Eine eigene XPage ins Startmenü konfigurieren

In der Datenbankkonfiguration der MobileOnline können XPages und andere Seiten mit dem Typ "Link" eingebunden werden, welche dann in der App im InAppBrowser geöffnet werden.

Diese XPage wird im Vollbildmodus geöffnet. Damit der Anwender von der XPage wieder in die App zurück wechseln kann, muss auf jeder XPage ein Button sein der folgendes Javascript ausführt:

```javascript
sessionStorage.setItem('closeInAppBrowser', 'true');
```
Dadurch erfährt die App, dass der InAppBrowser geschlossen werden soll.

Ein Beispiel für ein solchen Button in der Navigationsleiste findet sich in XPages mit dem Prefix *"app_"*.

# Bestehende Dokumente und Listen anpassen

Mit der Skriptbibliothek 'app_customization' können neben neuen Dokumenten auch die bestehenden Standarddokumente und Listen angepasst werden.

## Ein eigenes Feld im Lesemodus des Dokuments anzeigen

Neue Felder für bestehende Dokumente müssen in den Doctype-Ansichten `vaJAPIDT+Dokumententyp (Company, CProfile...)` hinzugefügt werden, damit diese an die App über die REST-Services ausgliefert werden. Dazu muss in der Ansicht eine neue Spalte für den Feldwert eingefügt werden. Wenn das Feld auch in der Ansicht vorhanden ist, dann bietet es sich an, dass der gleiche Name für die Spalte gewählt wird. Das sorgt dafür, dass beim Öffnen eines Dokuments der Wert aus der Ansicht sofort anzeigbar ist.

Damit das Dokument im Lesemodus angezeigt wird muss der 'DocumentStyle' erweitert werden. 
Ein Beispiel für eine Anpassung in der Javascript-Bibliothek 'app_customization':  

```javascript
function cuGetDocumentStyle(object){
  //add field below header
  var newField = {
      "component": "LabeledText",
      "inputs": {
          "label": CRMContext.getLC("LC01855","Phone"),
          "value": "LC01753" //programmatischer Spaltenname
      }
  }

  var fields = object["dsCompany"].fieldDefinitions;
  for (i = 0; i < fields.length; i++) {
    var field = fields[i];
    if(field.component == "HeaderAddress"){
      fields = fields.splice(i+1, 0, newField);
      break;
    }
  }
  object["dsCompany"].fieldDefinitions = fields;
  return object;
}
```
## Listen und Verknüpfungen anpassen

Bestehende Liststyles können auch über die Bibliothek 'app_customization' verändert werden. Neue Felder müssen in den Flexviews bzw. Displayviews als Spalte aufgenommen werden und die Spalte muss in der Formel `isMobileView:="true"` besitzen.

In der Javascript-Bibliothek 'app_customization' können die Standard-Liststyles angepasst oder komplett ersetzt werden:
 
```javascript
function cuGetListStyle(object){
  // change column for title of company liststyle
  object.lsCompany.title = "mobileAppViewSubject";
  return object;
}
```

# REST-Services

Die Daten aus der Konfiguration, den Ansichten und Dokumenten werden mit REST-Services als JSON an die App übertragen.

## Config Rest Service

Es kann nützlich sein, den Config-REST-Service zum Abrufen der angepassten Konfiguration und Anzeigen von Fehlermeldungen anzusprechen.

URL: `http://server.tld/pfad/Mobileint.nsf/rest.xsp/config?type=all`

# Offline Synchronisation

Die Offline Synchronisation ist ähnlich wie der Onlinemodus erweiterbar. Für die Synchronisation von Firmen und Kontakten gibt es in der Contacts die zwei Ansichten "vaJAPIAppCompanies" und "vaJAPIApppContacts", die vorgeben, welche Dokumente und Feldwerte für die Synchronisation verfügbar sind. Diese Ansichten können mit neuen Spalten erweitert werden, um weitere Felder zu synchronisieren. Der programmatische Name der Spalten muss der Feldname und der Spaltentitel die LC-Nummer für die Bezeichnung sein.

Die Anzeige von Listen und Dokumenten nutzt auch 'listStlyes' und 'documentStyles'. Für die synchronisierten Firmen und Kontakte gibt es in der JavaScript-Bibliothek 'app_getConfig' jeweils einen 'listStyle' und 'documentStyle' mit dem Prefix "OFFLINE". Diese können für Anpassungen über die JavaScript-Bibliothek 'app_customization' verändert werden.

# Komponenten
