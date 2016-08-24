/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.zh-cn", {
	"vs/base/common/json": [
		"符号无效",
		"数字格式无效",
		"需要属性名",
		"需要值",
		"需要冒号",
		"需要逗号",
		"需要右大括号",
		"需要右括号",
		"预期的文件结尾",
	],
	"vs/base/common/severity": [
		"错误",
		"警告",
		"信息",
	],
	"vs/base/node/zip": [
		"在 Zip 中找不到 {0}。",
	],
	"vs/code/node/cliProcessMain": [
		"找不到扩展“{0}”。",
		"未安装扩展“{0}”。",
		"确保使用完整扩展 ID，包括发布服务器，如: {0}",
		"Extension \'{0}\' was successfully installed!",
		"已安装扩展“{0}”。",
		"在应用商店中找到了“{0}”。",
		"正在安装...",
		"已成功安装扩展“{0}” v{1}!",
		"正在卸载 {0}...",
		"已成功卸载扩展“{0}”!",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"用于配置字符串。",
		"设置摘要。此标签将在设置文件中用作分隔注释。",
		"配置属性的描述。",
		"如果进行设置，\"configuration.type\" 必须设置为对象",
		"configuration.title 必须是字符串",
		"configuration.properties 必须是对象",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"扩展",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"扩展无效: package.json 不是 JSON 文件。",
		"扩展无效: 清单名不匹配。",
		"扩展无效: 清单发布服务器不匹配。",
		"扩展无效: 清单版本不匹配。",
		"请先重启 Code 再重新安装 {0}。",
		"找不到可与此代码版本兼容的 {0} 版本。",
		"找不到扩展",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"已获得空扩展说明",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”为必需且其类型必须为 \"object\"",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”可以省略或其类型必须是 \"string[]\"",
		"属性“{0}”可以省略或其类型必须是 \"string[]\"",
		"必须同时指定或同时省略属性”{0}“和”{1}“",
		"属性“{0}”可以省略，或者其类型必须是“字符串”",
		"应在扩展文件夹({1})中包含 \"main\" ({0})。这可能会使扩展不可移植。",
		"必须同时指定或同时省略属性”{0}“和”{1}“",
		"VS Code 库中使用的扩展的显示名称。",
		"VS Code 库用于对扩展进行分类的类别。",
		"VS Code 商城使用的横幅。",
		"VS Code 商城页标题上的横幅颜色。",
		"横幅中使用的字体颜色主题。",
		"VS Code 扩展的发布服务器。",
		"VS Code 扩展的激活事件。",
		"其他扩展的依赖关系。扩展的标识符始终是 ${publisher}.${name}。例如: vscode.csharp。",
		"包作为 VS Code 扩展发布前执行的脚本。",
		"由此包表示的 VS Code 扩展的所有贡献。",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"无法分析 \"engines.vscode\" 值 {0}。例如请使用: ^0.10.0、^1.2.3、^0.11.0、^0.10.x 等。",
		"\"engines.vscode\" ({0}) 中指定的版本不够具体。对于 1.0.0 之前的 vscode 版本，请至少定义主要和次要想要的版本。例如: ^0.10.0、0.10.x、0.11.0 等。",
		"\"engines.vscode\" ({0}) 中指定的版本不够具体。对于 1.0.0 之后的 vscode 版本，请至少定义主要想要的版本。例如: ^1.10.0、1.10.x、1.x.x、2.x.x 等。",
		"扩展与 Code {0} 不兼容。扩展需要: {1}。",
		"扩展版本与 semver 不兼容。",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft.",
	]
});