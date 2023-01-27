define({
  "name": "Anpassungsleitfaden goMobile Pro",
  "title": "goMobile Pro",
  "url": "https://gomobile.gedys-intraware.de",
  "header": {
    "title": "",
    "content": "<p>Die App wurde so entworfen, dass sich die Hauptgestaltungselemente innerhalb der App durch Anpassungen einer JavaScript-Bibliothek in der goMobile Datenbank mit dem Domino Designer ändern lassen.</p>\n<blockquote>\n<p>Dieser Leitfaden versucht wichtige Optionen und Möglichkeiten für Anpassungen zu erklären und aufzulisten. Die JavaScript-Bibliothek 'app_getConfig' ist hierbei eine gute Quelle, um den Aufbau und die damit verbundenen Anpassungsmöglichkeiten zu verstehen.</p>\n</blockquote>\n<blockquote>\n<p>Verbesserungen an der Dokumentation können ganz einfach per Github eingefügt werden. Dieses Dokument kann unter <a href=\"https://github.com/GEDYSIntraWare/Anpassungsleitfaden-goMobilePro/blob/master/CUSTOMIZING.md\">https://github.com/GEDYSIntraWare/Anpassungsleitfaden-goMobilePro/blob/master/CUSTOMIZING.md</a> bearbeitet werden.</p>\n</blockquote>\n<h1>Aktualisieren der Konfiguration</h1>\n<p>Die meisten Konfigurationen aus der Database Settings und die Definitionen für goMobile Pro werden zu Gunsten der Performance in der App goMobile Pro gespeichert. Die App aktualisiert beim Start einmal alle 24 Stunden die gespeicherte Konfiguration, d.h. die Konfiguration wird erneut über die goMobile Datenbank abgerufen. Weiterhin hat der Anwender selbst die Möglichkeit, die Aktualisierung der Konfiguration über die Konfigurationsseite innerhalb der App vorzunehmen.</p>\n<p>In der goMobile Datenbank gibt es in den Ansichten die Aktion &quot;Aktualisieren der Konfiguration erzwingen&quot;. Mit dieser Aktion kann das Laden der Konfiguration für Anwender der goMobile Pro App erzwungen werden, auch wenn noch keine 24 Stunden seit der letzten Aktualisierung vergangen sind.</p>\n<h2>Config Rest Service</h2>\n<p>Diese Konfigurationen werden über den sogenannten Config Rest Service ausgeliefert. Es kann nützlich sein, den Config-REST-Service zum Abrufen der angepassten Konfiguration und Anzeigen von Fehlermeldungen anzusprechen. <strong>Bei Fehlern wie u.a. &quot;Sie verwenden eine veraltete Version von goMobile Pro&quot; und Anpassungen die nicht korrekt sind sollte man immer zuerst die Antwort des Config REST-Services prüfen</strong>. Der Firefox Desktop Browser bietet eine praktische JSON Ansicht an. Vor dem Aufrufen sollte man sicherstellen, dass man angemeldet ist.</p>\n<p>URL: <code>http://server.tld/pfad/Mobileint.nsf/rest.xsp/config?type=all</code></p>\n<h1>Standarddefinitionen verändern</h1>\n<p>In der JavaScript-Bibliothek 'app_customization' hat man Zugriff auf alle Konfigurationsobjekte, bevor diese vom REST-Service an die App übermittelt werden. Wenn Standardkonfigurationen verändert oder entfernt werden sollen, können hier die entsprechenden JavaScript-Objekte und -Arrays verändert werden. Zusätzlich zu den Beispielen in den einzelnen Funktionen sollte auch die Struktur der Konfigurationsobjekte in der bereits erwähnten JavaScript-Bibliothek 'app_getConfig' betrachtet werden.</p>\n<h1>Bestehende Dokumente und Listen anpassen</h1>\n<p>Mit der Skriptbibliothek 'app_customization' können die bestehenden Standarddokumente und Listen angepasst werden.</p>\n<h2>Ein eigenes Feld im Lesemodus des Dokuments anzeigen</h2>\n<p>Neue Felder für bestehende Dokumente müssen in den Doctype-Ansichten <code>vaJAPIDT+Dokumententyp (Company, CProfile...)</code> hinzugefügt werden, damit diese an die App über die REST-Services ausgeliefert werden. Dazu muss in der Ansicht eine neue Spalte für den Feldwert eingefügt werden. Wenn das Feld auch in der Ansicht vorhanden ist, dann bietet es sich an, dass der gleiche Name für die Spalte gewählt wird. Das sorgt dafür, dass beim Öffnen eines Dokuments der Wert aus der Ansicht sofort angezeigt wird und das nachladen der Felder weniger auffällt.</p>\n<p>Alternativ kann man Felder für den Lesemodus auch in der Dokumentenklasse im Java mit der Methode <code>addFieldsToRestServiceResponse</code> eingefügen:</p>\n<pre class=\"prettyprint lang-java\">@Override\n\tpublic void addFieldsToRestServiceResponse(JsonObject response)\n\t{\n\t\t//Single fields\n\t\tString[] oTextFieldNames = {\"DistributionList\", \"COUser1\", \"COUser11\", \"COUser12\", \"COUser13\"};\n\n\t\t//Loop over all single text fields\n\t\tfor (int k = 0; k < oTextFieldNames.length; k++) {\n\t\t\tString fieldName = oTextFieldNames[k];\n\t\t\tString fieldValue = Tools.implode(this.getItemValue(fieldName), \", \") ;\n\t\t\tif(fieldValue == null || fieldValue.equals(\"null\")) {\n\t\t\t\tfieldValue = \"\";\n\t\t\t}\n\n\t\t\tresponse.put(fieldName, fieldValue);\n\t\t};\n\n\n\t\tsuper.addFieldsToRestServiceResponse(response);\n\n\t}\n</pre>\n<p>Damit das Dokument im Lesemodus angezeigt wird muss der 'DocumentStyle' erweitert werden.\nEin Beispiel für eine Anpassung in der JavaScript-Bibliothek 'app_customization':</p>\n<pre class=\"prettyprint lang-javascript\">function cuGetDocumentStyle(object){\n  //add field below header\n  var newField = {\n      \"component\": \"LabeledText\",\n      \"inputs\": {\n          \"label\": CRMContext.getLC(\"LC01855\",\"Phone\"),\n          \"value\": \"LC01753\" //programmatischer Spaltenname\n      }\n  }\n\n  var fields = object[\"dsCompany\"].fieldDefinitions;\n  for (i = 0; i < fields.length; i++) {\n    var field = fields[i];\n    if(field.component == \"HeaderAddress\"){\n      fields = fields.splice(i+1, 0, newField);\n      break;\n    }\n  }\n  object[\"dsCompany\"].fieldDefinitions = fields;\n  return object;\n}\n</pre>\n<h2>Listen und Verknüpfungen anpassen</h2>\n<p>Bestehende Liststyles können auch über die Bibliothek 'app_customization' verändert werden. Neue Felder müssen in den Flexviews bzw. Displayviews als Spalte aufgenommen werden und die Spalte muss in der Formel <code>isMobileView:=&quot;true&quot;</code> besitzen.</p>\n<p>In der JavaScript-Bibliothek 'app_customization' können die Standard-Liststyles angepasst oder komplett ersetzt werden:</p>\n<pre class=\"prettyprint lang-javascript\">function cuGetListStyle(object){\n  // change column for title of company liststyle\n  object.lsCompany.title = \"mobileAppViewSubject\";\n  return object;\n}\n</pre>\n<h2>Einen bestehenden editStyle ändern</h2>\n<p>Die 'editStyles' aus dem Standard könne wie 'documentStyles' über die JavaScript-Bibliothek 'app_customization' angepasst werden.</p>\n<blockquote>\n<p>Wichtiger Hinweis: Feldnamen in editStyles müssen immer <strong>klein</strong> geschrieben werden!</p>\n</blockquote>\n<h3>Beispiel: Einbau eines Feldes in die Firma per app_customization</h3>\n<pre class=\"prettyprint lang-javascript\">function cuGetEditStyle(object){\n\tvar newField = {\n    \"component\": \"EditText\",\n    \"inputs\": {\n    \"fieldName\": \"mynewfield\",\n    \"label\": \"Bereich\"\n    }\n  };\n\t\n\tvar fields = object[\"esCompany\"].fieldDefintions;\n\t\n\tfor (i = 0; i < fields.length; i++) {\n\t\tvar field = fields[i];\n    if(field.component == \"EditSubform\" && field.inputs.id == \"companyGeneral\"){\n      var subFields = field.inputs.fieldDefinitions;\n      subFields.push(newField);\n      break;\n    }\n\t}\n\t\n\treturn object;\n}\n</pre>\n<h3>Beispiel: Textfeld auf Auswahl aus Schlüsselwort umstellen</h3>\n<pre class=\"prettyprint lang-javascript\">function cuGetKeywords(object){\n\tvar appConfig = new com.gi.crm.mobile.tools.AppConfiguration;\n\tobject.myBereich = fromJson(appConfig.getKeywordConfig(\"900\", \"Department\", \"Addresses\"));\n\t\n\treturn object;\n}\n\nfunction cuGetEditStyle(object){\n\tvar newField = {\n  \"component\": \"EditSelect\",\n  \"inputs\": {\n      \"fieldName\": \"mynewfield\",\n      \"label\": \"Bereich\",\n      \"mode\": \"select\",\n      \"itemSourceType\": \"keyword\",\n      \"itemSourceName\": \"myBereich\"\n    }  \n  };\n\t\n\tvar fields = object[\"esCompany\"].fieldDefintions;\n\t\n\tfor (i = 0; i < fields.length; i++) {\n\t\tvar field = fields[i];\n    if(field.component == \"EditSubform\" && field.inputs.id == \"companyGeneral\"){\n      var subFields = field.inputs.fieldDefinitions;\n      subFields.push(newField);\n      break;\n    }\n\t}\n\t\n  return object;\n}\n</pre>\n<p>Die Schlüsselworteinstellung Offen/Geschlossen greift in diesem Fall. Sie kann aber mit dem Parameter <code>&quot;allowValuesNotInList&quot;: false</code> übersteuert werden.</p>\n<h2>Bedingungen zum Ausblenden von Feldern</h2>\n<p>Bei jedem Component können über 'rendered' Bedingungen festgelegt werden, wann der Component angezeigt werden soll.</p>\n<p>Es ist möglich UND und ODER Bedingungen, die auf Feldwerte, die Konfiguration und den &quot;Data-Bereich&quot; zugreifen, zu erstellen und zu verknüpfen.</p>\n<p>Rendered kann auch auf CRM- und ACL-Rollen prüfen mit <code>type</code> &quot;role&quot; und &quot;aclrole&quot;. &quot;aclrole&quot; prüft auf die ACL Rollen der MobileOnline Datenbank und ist immer ein Array. Deswegen muss hier der Operator <code>contains</code> genutzt werden.</p>\n<p>Es gibt folgende Typen die mit <code>type</code> für Bedingungen verwendet werden können:</p>\n<ul>\n<li>doc: Feldwert aus dem Dokument</li>\n<li>globalconfig: Wert aus dem globalconfig Objekt des Configsyncs</li>\n<li>dbconfig: Wert aus dem Datenbankobjekt der aktuellen Datenbank</li>\n<li>data: Wert aus dem Dataobjekt eines Dokuments im EditMode</li>\n<li>role: Aktuelle CRM-Rolle</li>\n<li>aclrole: ACL-Rolle</li>\n</ul>\n<p>Es gibt folgende Operatoren die mit <code>operator</code> für Bedingungen verwendet werden können:</p>\n<ul>\n<li>equals</li>\n<li>notequals</li>\n<li>contains</li>\n<li>notcontains</li>\n<li>isempty</li>\n<li>notempty</li>\n</ul>\n<h3>Komplexeres Beispiel mit verschiedenen Typen</h3>\n<pre class=\"prettyprint lang-json\">{\n    \"orConditions\": [\n      {\n        \"type\": \"doc\",\n        \"operator\": \"equals\",\n        \"value\": \"123\",\n        \"field\": \"company\"\n      },\n      {\n        \"type\": \"data\",\n        \"operator\": \"notequals\",\n        \"value\": \"+49\",\n        \"field\": \"phone\"\n      },\n      {\n      \t\"type\": \"data\",\n        \"operator\": \"contains\",\n        \"value\": \"+31\",\n        \"field\": \"phone\n      },\n      {\n      \"type\": \"data\",\n        \"operator\": \"notcontains\",\n        \"value\": \"0180\",\n        \"field\": \"phone\"\n      }\n    ],\n    \"andConditions\": [\n      {\n        \"type\": \"dbconfig\",\n        \"operator\": \"notempty\",\n        \"field\": \"test\"\n      },\n      {\n        \"type\": \"globalconfig\",\n        \"operator\": \"equals\",\n        \"value\": \"test\",\n        \"field\": \"fdskypename\"\n      },\n      {\n        \"type\": \"dbconfig\",\n        \"operator\": \"isempty\",\n        \"field\": \"fdteamsname\"\n      }\n    ],\n    \"operator\": \"and\"\n}\n</pre>\n<p>Es gibt auch einige möglichen Vereinfachungen.</p>\n<h3>Beispiel: Ein Feld in esCompany nur in Einheiten anzeigen</h3>\n<pre class=\"prettyprint lang-javascript\">\"rendered\": {\n  \"field\": \"fdisbranch\",\n  \"value\": \"1\"\n}\n</pre>\n<h3>Felder in direkter Abhängigkeit verstecken</h3>\n<pre class=\"prettyprint lang-javascript\">function cuGetEditStyle(object){\n\tvar newField = {\n\t\t    \"component\": \"EditSelect\",\n\t\t    \"inputs\": {\n          \"fieldName\": \"mynewfield\",\n          \"label\": \"Bereich\",\n          \"mode\": \"select\",\n          \"itemSourceType\": \"keyword\",\n          \"itemSourceName\": \"myBereich\"\n\t\t\t }\n        };\n\t\n\tvar newField2 = {\n\t\t    \"component\": \"EditText\",\n\t\t    \"inputs\": {\n\t\t\t\t\"fieldName\": \"mynewfield2\",\n\t\t\t\t\"label\": \"Bonus\",\n\t\t\t\t\"rendered\": {\n\t\t\t\t    \"field\": \"mynewfield\",\n\t\t\t\t\t  \"value\": \"Vertrieb\"\n\t\t\t    }\n\t\t    }\n        };\n\t\n\tvar fields = object[\"esCompany\"].fieldDefintions;\n\t\n\tfor (i = 0; i < fields.length; i++) {\n\t\tvar field = fields[i];\n\t    if(field.component == \"EditSubform\" && field.inputs.id == \"companyGeneral\"){\n\t    \tvar subFields = field.inputs.fieldDefinitions;\n\t    \tsubFields.push(newField);\n\t    \tsubFields.push(newField2);\n\t    \tbreak;\n\t    }\n\t}\n\t\n\treturn object;\n</pre>\n<h2>Refresh</h2>\n<p>Mit dem Parameter <code>&quot;refreshOnChange&quot;: true</code> kann man dafür sorgen, dass das Dokument an den Server gesendet wird. Dort durchläuft es die Refresh-Methode, die im nächsten Abschnitt beschrieben ist. Danach wird das Dokument neu an goMobile Pro ausgeliefert und alle Components werden neu aufgebaut. Man kann auf diese Weise beispielsweise Felder befüllen, Berechnungen durchführen und alles was im Java-Framework möglich ist.</p>\n<p>Um die beste Benutzererfahrung für goMobile Pro zu bieten, sollte ein Refresh nur eingesetzt werden, wenn es unbedingt nötig ist. Vieles, wie zum Beispiel das Ausblenden von Feldern, kann auch ohne Refresh erreicht werden. Der sparsamen Einsatz des Refresh Parameters führt dazu, dass sich die App subjektiv deutlich performanter anfühlt.</p>\n<p>Wird z.B. mit dem &quot;EditCheckBox&quot; Component mittels &quot;refreshOnChange&quot; ein Refresh ausgelöst, können mit der Methode refreshEditModeREST, die man in die abgeleitete Document Klasse einfügt, Berechnungen durchgeführt werden, deren Ergebnis dann wiederum mittels EditText Components und der Eigenschaft &quot;disabled: false&quot; unmittelbar angezeigt werden kann, z.B. Validierung von Bestelldaten, bevor eine Bestellung aufgegeben werden kann.</p>\n<h2>Dokumente im Java-Backend aufbereiten</h2>\n<p>Für den neuen InAppEditMode gibt es einige Erweiterungen im Java-Framework, die es erlauben Änderungen an den Dokumenten im Backend zu machen, wenn diese per goMobile Pro bearbeitet werden.</p>\n<p>Für Lesemodus gab es bereits 'addFieldsToRestServiceResponse' und für den Lesemodus sind diese Methoden interessant:</p>\n<p><strong>initEditModeREST</strong></p>\n<p>Diese Methode wird aufgerufen, wenn ein Dokument in den EditMode geschaltet werden und kann beispielsweise dafür genutzt werden um Felder für den EditMode zu erzeugen.</p>\n<p><strong>refreshEditModeREST</strong></p>\n<p>Wenn bei Components &quot;refreshOnChange&quot; aktiviert ist, wird diese Methode aufgerufen und das Dokument kann verändert werden bevor es zurück an goMobile Pro übermittelt wird.</p>\n<p><strong>prepareSaveEditModeREST</strong></p>\n<p>Diese Methoden wird aufgerufen, wenn das Dokument in goMobile Pro gespeichert wird. Mit dem Übergabeparameter &quot;saveEventId&quot; können Aktionen wie das Senden von E-Mails eingeleitet werden.</p>\n<p><strong>addValuesToDataEditModeREST</strong></p>\n<p>An diversen Stellen kann man mit dem Pipe |GetData Werte aus dem Data Objekt abrufen. Mit dieser Methode kann das Data Objekt mit temporären Werten befüllt werden. Alternativ zu temporären Feldern.</p>\n<p><strong>addTempFieldToRESTDoc</strong></p>\n<p>Mit dieser Methode könne temporäre Felder im Dokument für den EditMode hinterlegt werden um diese beispielsweise für Components zu verwenden oder um Werte zwischen Refreshes zu speichern. Diese Felder werden vor dem Speichern wieder entfernt.</p>\n<p><strong>getDocumentStyleNameEditModeRest</strong></p>\n<p>Mit dieser Methode kann der EditStyle programmatisch gesetzt werden.</p>\n<p><strong>In Dokumentenklassen bzw. Ableitungen für Anpassungen können diese Methoden sehr nützlich sein um das Verhalten des EditModes zu beeinflussen.</strong></p>\n<h1>Eine eigene Datenbank in goMobile Pro verwenden</h1>\n<p>In diesem Beispiel werden Definitionen für eine externe Datenbank &quot;CD Verwaltung&quot; erstellt und Ansichten für die Integration in goMobile Pro vorbereitet.</p>\n<h2>Voraussetzung</h2>\n<p>Die Datenbank ist bereits an goMobile „angebunden“, d.h. es gibt eine Konfiguration für eine flexible Liste und einen Startmenüeintrag.</p>\n<h2>Eine flexible Liste in goMobile Pro verwenden</h2>\n<p>Ansichten, die bereits für goMobile angepasst wurden, können durch kleine Änderungen auch als Ansichten für goMobile Pro verwendet werden. Dazu muss eine neue Spalte &quot;mobileConfig&quot; eingefügt werden. Diese Spalte enthält Informationen, die goMobile Pro benötigt, um die Ansicht zu formatieren. Alle Spalten, die angezeigt werden sollen, müssen die Zeile <code>isMobileView:=&quot;true&quot;</code> in der Spaltenformel beinhalten. Diese Information sorgt dafür, dass der REST-Service diese Spalte an die App überträgt.</p>\n<p><strong>Checkliste</strong></p>\n<ul>\n<li>Die Zeile <code>isMobileView:=&quot;true&quot;;</code> in die Spalten, die angezeigt werden sollen, hinzufügen.</li>\n<li>Die mobileConfig-Spalte in die flexiblen Listen einfügen.<pre class=\"prettyprint\">listStyle := \"lscd\";\ndocumentStyle := \"dscd\";\nactionMenu := \"\";\n\n\n\"<listStyle>\" + listStyle + \"</listStyle><documentStyle>\" + documentStyle + \"</documentStyle><actionMenu>\" + actionMenu + \"</actionMenu>\"\n</code></pre>\n</li>\n<li>In der JavaScript-Bibliothek 'app_customization' die Funktion 'cuGetListStyle' erweitern.<pre class=\"prettyprint lang-json\">\tobject.lscd = {\n\t    \"itemStyle\": \"multiline\",\n\t    \"title\": \"$4\",\n\t    \"subtitle\": \"$5\"\n\t}\n</pre>\n</li>\n</ul>\n<p>Die 'itemStyles' definieren, wie ein Listeneintrag angezeigt wird. Die verfügbaren <code>itemStyles</code> und deren Optionen sind weiter unten in der Dokumentation aufgelistet.</p>\n<blockquote>\n<p>Die Verwendung von sprechenden programmatischen Spaltennamen für alle Spalten, die Werte für die App beinhalten, machen spätere Änderungen einfacher. Bei bestimmten Formelwerten werden diese jedoch von Notes automatisch belegt. Prüfen Sie daher die Spaltennamen, falls es zu Problemen kommen sollte.</p>\n</blockquote>\n<h2>Ein Dokument in goMobile Pro öffnen</h2>\n<p>Zum Öffnen von Dokumenten wird für jeden Dokumententyp eine eigene Notes Ansicht mit allen Daten und Definitionen benötigt.  Der Name dieser Ansicht muss folgender Namenskonvention folgen:  „vaJAPIMobileDT“ + Dokumenttyp (Wert aus dem Feld DocType), z.B. vaJAPIMobileDTfacd. Weiterhin ist die Notes Ansicht &quot;IDStructure&quot; notwendig.</p>\n<p>Der 'DocumentStyle' gibt an, wie ein Dokument angezeigt wird. Im 'DocumentStyle' ist definiert, welche Felder mit welchem Anzeigeelement dargestellt werden. Diese Anzeigeelemente werden 'Components' genannt und beinhalten in der Definition in der Regel den Feldnamen und weitere Parameter. Beim Öffnen von Dokumenten wird der 'DocumentStyle' für das Dokument aus dem Konfigurationsspeicher geladen. Er wird über die Angabe in der mobileConfig-Spalte gefunden.</p>\n<p><strong>Checkliste</strong></p>\n<ul>\n<li>Dokumente bestehen aus 'Components'. Die Optionen einzelner Components sind unter der Kategorie &quot;Field&quot; weiter erklärt.</li>\n</ul>\n<pre class=\"prettyprint lang-json\">  object.dscd = {\n      \"title\": \"$4\",\n          \"fieldDefinitions\": [\n              {\n                  \"component\": \"HeaderAddress\",\n                  \"inputs\": {\n                      \"title\": \"$4\",\n                      \"subtitle\": \"$5\"\n                  }\n              },\n              {\n                  \"component\": \"LabeledText\",\n                  \"inputs\": {\n                      \"label\": \"Jahr\",\n                      \"value\": \"$6\"\n                  }\n              },\n              {\n                  \"component\": \"LabeledText\",\n                  \"inputs\": {\n                      \"label\": \"Genre\",\n                      \"value\": \"$7\"\n                  }\n              }\n      ]\n    }\n</pre>\n<ul>\n<li>Die Ansicht 'IDStructure' muss vorhanden sein.</li>\n<li>Eine DocType-Ansicht erstellen. Namenskonvention:  „vaJAPIMobileDT“ + Dokumenttyp (Wert aus dem Feld DocType).</li>\n<li>Die mobileConfig-Spalte in die Notes Ansicht der flexiblen Liste einfügen.</li>\n</ul>\n<pre class=\"prettyprint\">documentStyle := \"dscd\";\nrtFields := \"\";\nactionMenu := \"\";\ncreateMenu := \"\";\n\n\"<documentStyle>\" + documentStyle + \"</documentStyle><richTextFields>\" + rtFields + \"</richTextFields><actionMenu>\" + actionMenu + \"</actionMenu><createMenu>\" + createMenu + \"</createMenu>\"\n</code></pre>\n<ul>\n<li>Die Funktion <code>cuGetDocumentStyle</code> aus der JavaScript-Bibliothek 'app_customization' erweitern.</li>\n</ul>\n<blockquote>\n<p>Die Spalten werden beim Öffnen in das Dokument übergeben. Somit kann das Dokument direkt dargestellt werden. Hier ist die Angabe des 'documentStyle' in der mobileConfig-Spalte der Notes Ansicht notwendig. Die Spaltennamen in der Notes Ansicht der flexiblen Liste müssen identisch zur DocType-Ansicht sein. Beim Öffnen von Dokumenten werden die Werte, die bereits aus der Ansicht ausgelesen werden können, angezeigt. Alle weiteren Werte werden nachgeladen.</p>\n</blockquote>\n<h3>Richtext</h3>\n<p>Richtextfelder, die in goMobile Pro angezeigt werden sollen, müssen in der mobileConfig-Spalte angegeben werden, damit sie vom REST-Service aufbereitet und übertragen werden können.</p>\n<p><strong>Checkliste</strong></p>\n<ul>\n<li>Die mobileConfig-Spalte um den Namen des Richtextfelds ergänzen (z. Bsp.: &quot;body&quot;).</li>\n</ul>\n<pre class=\"prettyprint lang-json\">rtFields := \"body\";\n\n\"..<richTextFields>\"  + rtFields + \"</richTextFields>...\" \n</pre>\n<ul>\n<li>Den documentStyle &quot;Dscd&quot; um folgende Komponente erweitern:</li>\n</ul>\n<pre class=\"prettyprint lang-json\">{\n    \"component\": \"LabeledTextarea\",\n    \"inputs\": {\n        \"value\": \"body\",\n        \"openRTAvailable\": true,\n        \"itemMaxHeight\": \"18rem\"\n    }\n}\n</pre>\n<blockquote>\n<p>Die Methode <code>addFieldsToRestServiceResponse</code> bietet die Möglichkeit in Dokumentenklassen Werte zur Antwort des REST-Services hinzuzufügen (z.B. Office Dokumente, DocumentBase).</p>\n</blockquote>\n<h2>Ansicht und Dokument um Aktionen erweitern</h2>\n<p>Für die Dokumente und die Treffer in Listen können Aktionen definiert werden. Diese Aktionen werden in sogenannte 'ActionSets' zusammengefasst. In der mobileConfig-Spalte kann für jedes Dokument eine ActionSet-ID hinterlegt werden.</p>\n<p>Es gibt einige vordefinierte Aktionen, die mit Hilfe eigener Parameter auch für eigene Aktionen genutzt werden können. Einige Aktionen können nach dem Ausführen eine Callback- und Errorcallback-Funktion ausführen. In der Liste der vorhandenen Aktionen werden die Parameter näher erläutert. In der JavaScript-Bibliothek 'app_getConfig' sind einige Aktionen umgesetzt und können wiederverwendet werden.</p>\n<p><strong>Checkliste</strong></p>\n<ul>\n<li>In der JavaScript-Bibliothek 'app_customization Lib' die Funktion <code>cuGetActions</code> um die Aktion und das ActionSet erweitern:</li>\n</ul>\n<pre class=\"prettyprint lang-javascript\">//Neue Aktion definieren\nobject.getActions.showCD = {\n        \"label\": \"CD anzeigen\",\n        \"icon\":\"vwicn187\",\n        \"color\": \"primary\",\n        \"isStandalone\": true,\n        \"action\": {\n            \"name\": \"openPageOnline\",\n            \"params\": {\n                        \"crmUrl\": \"showCD.xsp\",\n                        \"crmPointer\": \"fdMe|GetDocField\"\n                  }\n          }\n    }\n  \n//ActionSet für Dokumententyp \"cd\" anlegen\nobject.getDocumentActionSets.ascd = [\n    \"showCD\"\n]\n</pre>\n<ul>\n<li>ID des ActionSets in DocType-Ansicht hinterlegen.</li>\n<li>ID des ActionSets in der Notes Ansicht der flexiblen Liste hinterlegen.</li>\n</ul>\n<p>Die Aktionen, die in der DocType-Ansicht hinterlegt sind, werden im geöffneten Dokument angezeigt. Die Aktionen, die in der Ansicht angegeben werden, sind in den Slide Actions in der Liste vorhanden.</p>\n<blockquote>\n<p>Tipp für die Aktion &quot;openPageOnline&quot;: Es gibt einen Unterschied zwischen den Parametern &quot;url&quot;: und &quot;crmUrl&quot;. Der Parameter &quot;url&quot; öffnet den Browser mit der übergebenen URL und &quot;crmUrl&quot; lädt eine XPage mit den Parametern im goMobile Framework für Navigation, Dialoge etc.</p>\n</blockquote>\n<h2>Eine eigene Verknüpfungsansicht verwenden</h2>\n<p>In Verknüpfungsansichten müssen die Spalten, wie in den Ansichten der flexiblen Listen, mit <code>isMobileView=true</code> und der mobileConfig-Spalte erweitert werden, damit diese in goMobile Pro dargestellt werden können.</p>\n<p><strong>Checkliste</strong></p>\n<ul>\n<li>Eine Verknüpfungskonfiguration erstellen bzw. für Mobile freigeben.</li>\n<li>Die Spalten in der Ansicht mit <code>isMobileView:=&quot;true&quot;;</code> versehen.</li>\n<li>Die mobileConfig-Spalte erstellen.</li>\n</ul>\n<pre class=\"prettyprint\">listStyle := \"lscd\";\ndocumentStyle := \"dscd\";\nactionMenu := \"\";\n\n\"<listStyle>\" + listStyle + \"</listStyle><documentStyle>\" + documentStyle + \"</documentStyle><actionMenu>\" + actionMenu + \"</actionMenu>\"\n</code></pre>\n<h2>Eine eigene XPage ins Startmenü konfigurieren</h2>\n<p>In der Datenbankkonfiguration der MobileOnline können XPages und andere Seiten mit dem Typ &quot;Link&quot; eingebunden werden, welche dann in der App im InAppBrowser geöffnet werden.</p>\n<p>Diese XPage wird im Vollbildmodus geöffnet. Damit der Anwender von der XPage wieder in die App zurück wechseln kann, muss auf jeder XPage ein Button sein der folgendes JavaScript ausführt:</p>\n<pre class=\"prettyprint lang-javascript\">sessionStorage.setItem('closeInAppBrowser', 'true');\n</pre>\n<p>Dadurch erfährt die App, dass der InAppBrowser geschlossen werden soll.</p>\n<p>Ein Beispiel für ein solchen Button in der Navigationsleiste findet sich in XPages mit dem Prefix <em>&quot;app_&quot;</em>.</p>\n<h1>Dokumente in goMobile Pro bearbeiten</h1>\n<p>Seit Version 4.2.0 bietet goMobile Pro einen integrierten Bearbeitenmodus für die Online-Bearbeitung. In vorherigen Versionen und in machen Dokumententypen wird noch der Bearbeitenmodus auf Basis der XPage aus goMobile verwendet.</p>\n<p>Der neue InAppEditmode benutzt analog zum Lesemodus einen sogenannten 'editStyle'. Es gibt zusätzlich die Möglichkeit einen 'editSubStyle' mit Hilfe des Components 'EditSubform' zu verwenden. <strong>Dabei ist zu beachten, dass innerhalb der <code>fieldDefinitions</code> eines 'editSubStyle's kein weiterer 'EditSubform' Component verwendet werden kann.</strong></p>\n<p>'EditSubform' unterstützt die Inputs <code>field</code> oder <code>name</code> zum Einbinden eines 'editSubStyle's.</p>\n<pre class=\"prettyprint lang-json\">{\n\t\"component\": \"EditSubform\",\n\t\"inputs\": {\n\t\t\"id\": \"examplesubform\",\n\t\t\"field\": \"fdsubformfield\",\n\t\t\"name\": \"examplesubsstyle\"\n\t}\n}\n</pre>\n<h2>Neue Dokumententyp im InAppEditMode bereitstellen</h2>\n<p>Um einen Dokumententyp im neuen Bearbeitenmodus zu erstellen, muss der 'editStyle' im Parameter 'createStyle' der Erstellenaktion hinterlegt werden. Beispiel: <code>&quot;createStyle&quot;: &quot;esCProfile&quot;</code>.</p>\n<h2>Bearbeiten eines Dokumententyps auf InAppEditMode umstellen.</h2>\n<p>Damit ein Dokument im InAppEditMode bearbeitet werden kann, muss einerseits die Bearbeitenaktion im Aktionsmenü von 'editDocument' auf 'editDocumentNew' geändert werden. Andererseits benötigt diese Bearbeitenaktion die Angabe des 'editStyles' in der 'mobileConfig' Spalte der Ansichten, über die das Dokument geöffnet werden kann. In der Regel ist das eine Listenansicht (JAPI..List) aus der Flexview und auf jeden Fall die Doctype-Ansicht (JAPIMobileDT...). Der 'editStyle' wird mit '<editStyle>' in die 'mobileConfig' Spalte eingefügt:</p>\n<pre class=\"prettyprint\">documentStyle:= \"dsTask\";\neditStyle:=\"esTask\";\nactionMenu := \"asTask\";\ncreateMenu := \"csTask\";\n\n\"<documentStyle>\" + documentStyle + \"</documentStyle><actionMenu>\" + actionMenu + \"</actionMenu><createMenu>\" + createMenu + \"</createMenu><editStyle>\" + editStyle + \"</editStyle>\"\n</code></pre>\n<h2>Schlüsselworte auslesen und in Config-Objekt aufnehmen</h2>\n<p>Funktion cuGetKeywords</p>\n<pre class=\"prettyprint lang-javascript\">function cuGetKeywords(object){\n\t//auslesen\n\tvar appConfig = new com.gi.crm.mobile.tools.AppConfiguration;\t\n\tvar cuContactFunction = fromJson(appConfig.getKeywordConfig(\"901\", \"fdCUContactFunction\", \"Customer\"));\n\tvar cuTrainings = fromJson(appConfig.getKeywordConfig(\"901\", \"fdCUTrainings\", \"Instasell\"));\n\tvar salutationAddress = fromJson(appConfig.getKeywordConfig(\"901\", \"SalutationAddress\", \"Addresses\"));\n\n\t//in Objekt schreiben\n\tobject.CUContactFunction = cuContactFunction; \n\tobject.CUTrainings = cuTrainings;\n\tobject.CUSalutationAddress = salutationAddress;\n\n\n\t//Ermitteln von Werten aus Aliasschlüsselwortlisten Klarname|Alias, hier Bestellnummer|Preis\n\tvar cuProducts;\n\tvar cuParamArray;\n\tfor (i=0; i < cuProductLineAliases.length; i++){\n\t\tcuProducts = fromJson(appConfig.getKeywordConfig(\"901\", (\"fdCUProducts.\" + cuProductLineAliases[i]), \"Customer\"));\n\t\tfor(n=0; n < cuProducts.Office.values.length; n++){\n\t\t\tif(cuProducts.Office.values[n].alias.indexOf(\"#\") != -1){\n\t\t\t\tcuParamArray = cuProducts.Office.values[n].alias.split(\"#\");\n\t\t\t\tcuProducts.Office.values[n].ordernumber = cuParamArray[0];\t\t\t\t\n\t\t\t\tcuProducts.Office.values[n].price = cuParamArray[1];\n\t\t\t}\n\t\t\tcuProducts.Office.values[n].alias = cuProducts.Office.values[n].label\n\t\t};\n\t\tobject[\"CUProducts_\" + cuProductLineAliases[i]] = cuProducts;\n\t};\n\treturn object;\n}\n\n</pre>\n<h3>Zugriff auf Schlüsselwort</h3>\n<p>Beispiel aus cuGetDocumentStyle</p>\n<pre class=\"prettyprint lang-javascript\">//Funktion Kontakt\n{\n  \"component\": \"EditSelect\",\n  \"inputs\": {\n    \"fieldName\": \"fdcucontactfunction\",\n    \"label\": \"Funktion\",\n    \"mode\": \"select\",\n    \"allowValuesNotInList\": false,\n    \"itemSourceType\": \"keyword\",\n    \"itemSourceName\": \"CUContactFunction\",\n    \"addEmptyLine\": true,\n    \"fixedLabel\": false\n  }\n}\n</pre>\n<h1>Offline Synchronisation</h1>\n<p>Die Offline Synchronisation ist ähnlich wie der Onlinemodus erweiterbar. Für die Synchronisation von Firmen und Kontakten gibt es in der Contacts die zwei Ansichten &quot;vaJAPIAppCompanies&quot; und &quot;vaJAPIApppContacts&quot;, die vorgeben, welche Dokumente und Feldwerte für die Synchronisation verfügbar sind. Diese Ansichten können mit neuen Spalten erweitert werden, um weitere Felder zu synchronisieren. Der programmatische Name der Spalten muss der Feldname und der Spaltentitel die LC-Nummer für die Bezeichnung sein.</p>\n<p>Die Anzeige von Listen und Dokumenten nutzt auch 'listStlyes' und 'documentStyles'. Für die synchronisierten Firmen und Kontakte gibt es in der JavaScript-Bibliothek 'app_getConfig' jeweils einen 'listStyle' und 'documentStyle' mit dem Prefix &quot;OFFLINE&quot;. Diese können für Anpassungen über die JavaScript-Bibliothek 'app_customization' verändert werden.</p>\n<h1>Tablet-Mode</h1>\n<p>Ab goMobile Pro Version 5.0 gibt es den sogenannte Tablet-Mode. Mit dem zugehörigen Property <code>size</code> kann die Breite von Components bei der Anzeige auf einem Tablet gesteuert werden. Der Tablet-Mode basiert auf einem 12-spaltigen Grid und der Wert von <code>size</code> steuert dabei die Anzahl der Spalten, welche von einem Component verwendet werden sollen. Wenn beispielsweise eine zweispaltige Darstellung gewünscht ist, muss bei allen Components der Wert '6' in das Property <code>size</code> geschrieben werden. Einzelne Components können aber auch breiter oder schmaler gestaltet werden und das Grid richtet sich dementsprechend aus.</p>\n<pre class=\"prettyprint lang-json\">{\n  \"component\": \"LabeledText\",\n  \"size\": \"6\",\n  \"inputs\": {\n      \"label\": \"Status\",\n      \"value\": \"LC01058\"\n  }\n}\n</pre>\n<h1>Komponenten</h1>\n"
  },
  "version": "5.1.2",
  "description": "",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2023-01-27T09:20:12.292Z",
    "url": "https://apidocjs.com",
    "version": "0.25.0"
  }
});
