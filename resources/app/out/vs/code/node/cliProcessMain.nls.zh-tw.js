/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.zh-tw", {
	"vs/base/common/json": [
		"符號無效",
		"數字格式無效",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"必須為檔案結尾",
	],
	"vs/base/common/severity": [
		"錯誤",
		"警告",
		"資訊",
	],
	"vs/base/node/zip": [
		"在 ZIP 中找不到 {0}。",
	],
	"vs/code/node/cliProcessMain": [
		"找不到擴充功能 \'{0}\'。",
		"未安裝擴充功能 \'{0}\'。",
		"請確定您使用完整擴充功能識別碼 (包括發行者)，例如: {0}",
		"Extension \'{0}\' was successfully installed!",
		"已安裝過擴充功能 \'{0}\'。",
		"在市集中找到 \'{0}\'。",
		"正在安裝...",
		"已成功安裝擴充功能 \'{0}\' v{1}!",
		"正在將 {0} 解除安裝...",
		"已成功將擴充功能 \'{0}\' 解除安裝!",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"提供組態設定。",
		"設定的摘要。此標籤將會在設定檔中作為分隔註解使用。",
		"組態屬性的描述。",
		"如果已設定，\'configuration.type\' 必須設定為物件",
		"\'configuration.title\' 必須是字串",
		"\'configuration.properties\' 必須是物件",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"擴充功能",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Extension invalid: package.json is not a JSON file.",
		"Extension invalid: manifest name mismatch.",
		"Extension invalid: manifest publisher mismatch.",
		"Extension invalid: manifest version mismatch.",
		"請先重新啟動 Code，再重新安裝 {0}。",
		"找不到與此 Code 版本相容的 {0} 版本。",
		"Could not find extension",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"得到空白擴充功能描述",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `object` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 `{0}` 可以省略或必須屬於 `string[]` 類型",
		"屬性 `{0}` 可以省略或必須屬於 `string[]` 類型",
		"屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略",
		"屬性 `{0}` 可以省略或必須屬於 `string` 類型",
		"`main` ({0}) 必須包含在擴充功能的資料夾 ({1}) 中。這可能會使擴充功能無法移植。",
		"屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略",
		"VS Code 資源庫中使用的擴充功能顯示名稱。",
		"VS Code 資源庫用來將擴充功能歸類的分類。",
		"用於 VS Code Marketplace 的橫幅。",
		"VS Code Marketplace 頁首的橫幅色彩。",
		"橫幅中使用的字型色彩佈景主題。",
		"VS Code 擴充功能的發行者。",
		"VS Code 擴充功能的啟動事件。",
		"其它擴充功能的相依性。擴充功能的識別碼一律為 ${publisher}.${name}。例如: vscode.csharp。",
		"在封裝作為 VS Code 擴充功能發行前所執行的指令碼。",
		"此封裝所代表的所有 VS Code 擴充功能比重。",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"無法剖析 \'engines.vscode` 值 {0}。例如，請使用：^0.10.0、^1.2.3、^0.11.0、^0.10.x 等。",
		"在 `engines.vscode` ({0}) 中指定的版本不夠具體。對於 1.0.0 之前的 vscode 版本，請至少定義所需的主要和次要版本。 例如 ^0.10.0、0.10.x、0.11.0 等。",
		"在 `engines.vscode` ({0}) 中指定的版本不夠具體。對於 1.0.0 之後的 vscode 版本，請至少定義所需的主要和次要版本。 例如 ^1.10.0、1.10.x、1.x.x、2.x.x 等。",
		"擴充功能與 Code {0} 不相容。擴充功能需要: {1}。",
		"擴充功能版本與 semver 不相容。",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft.",
	]
});