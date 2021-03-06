/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.de", {
	"vs/base/common/json": [
		"Ungültiges Symbol",
		"Ungültiges Zahlenformat.",
		"Ein Eigenschaftenname wurde erwartet.",
		"Ein Wert wurde erwartet.",
		"Ein Doppelpunkt wurde erwartet.",
		"Ein Komma wurde erwartet.",
		"Eine schließende geschweifte Klammer wurde erwartet.",
		"Eine schließende Klammer wurde erwartet.",
		"Das Dateiende wurde erwartet.",
	],
	"vs/base/common/severity": [
		"Fehler",
		"Warnung",
		"Info",
	],
	"vs/base/node/zip": [
		"{0} wurde im ZIP nicht gefunden.",
	],
	"vs/code/node/cliProcessMain": [
		"Die Erweiterung \"{0}\" wurde nicht gefunden.",
		"Die Erweiterung \"{0}\" ist nicht installiert.",
		"Stellen Sie sicher, dass Sie die vollständige Erweiterungs-ID (einschließlich des Herausgebers) verwenden. Beispiel: {0}",
		"Extension \'{0}\' was successfully installed!",
		"Die Erweiterung \"{0}\" ist bereits installiert.",
		"\"{0}\" wurde in Marketplace gefunden.",
		"Wird installiert...",
		"Die Erweiterung \"{0}\" v{1} wurde erfolgreich installiert.",
		"{0} wird deinstalliert...",
		"Die Erweiterung \"{0}\" wurde erfolgreich deinstalliert.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Trägt Konfigurationseigenschaften bei.",
		"Eine Zusammenfassung der Einstellungen. Diese Bezeichnung wird in der Einstellungsdatei als trennender Kommentar verwendet.",
		"Die Beschreibung der Konfigurationseigenschaften.",
		"Wenn eine Festlegung erfolgt, muss \"configuration.type\" auf \"object\" festgelegt werden.",
		"configuration.title muss eine Zeichenfolge sein.",
		"\"configuration.properties\" muss ein Objekt sein.",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Erweiterungen",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Die Erweiterung ist ungültig: \"package.json\" ist keine JSON-Datei.",
		"Die Erweiterung ist ungültig: Manifestnamenkonflikt.",
		"Die Erweiterung ist ungültig: Manifestherausgeberkonflikt.",
		"Die Erweiterung ist ungültig: Manifestversionskonflikt.",
		"Bitte starten Sie Code vor der Neuinstallation von {0} neu.",
		"Eine kompatible Version von {0} mit dieser Version des Codes wurde nicht gefunden.",
		"Die Erweiterung wurde nicht gefunden.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Es wurde eine leere Extensionbeschreibung abgerufen.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich und muss vom Typ \"object\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" kann ausgelassen werden oder muss vom Typ \"string[]\" sein.",
		"Die Eigenschaft \"{0}\" kann ausgelassen werden oder muss vom Typ \"string[]\" sein.",
		"Die Eigenschaften \"{0}\" und \"{1}\" müssen beide angegeben oder beide ausgelassen werden.",
		"Die Eigenschaft \"{0}\" kann ausgelassen werden oder muss vom Typ \"string\" sein.",
		"Es wurde erwartet, dass \"main\" ({0}) im Ordner ({1}) der Extension enthalten ist. Dies führt ggf. dazu, dass die Extension nicht portierbar ist.",
		"Die Eigenschaften \"{0}\" und \"{1}\" müssen beide angegeben oder beide ausgelassen werden.",
		"Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.",
		"Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.",
		"Das in VS Code Marketplace verwendete Banner.",
		"Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.",
		"Das Farbdesign für die Schriftart, die im Banner verwendet wird.",
		"Der Herausgeber der VS Code-Extension.",
		"Aktivierungsereignisse für die VS Code-Extension.",
		"Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise \"vscode.csharp\".",
		"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.",
		"Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Der engines.vscode-Wert {0} konnte nicht analysiert werden. Verwenden Sie z. B. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x usw.",
		"Die in \"engines.vscode\" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen vor Version 1.0.0 bitte mindestens die gewünschte Haupt- und Nebenversion, z. B. ^0.10.0, 0.10.x, 0.11.0 usw.",
		"Die in \"engines.vscode\" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen nach Version 1.0.0 bitte mindestens die gewünschte Hauptversion, z. B. ^1.10.0, 1.10.x, 1.x.x, 2.x.x usw.",
		"Die Extension ist nicht mit dem Code {0} kompatibel. Die Extension erfordert {1}.",
		"Die Extensionversion ist nicht mit \"semver\" kompatibel.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft.",
	]
});