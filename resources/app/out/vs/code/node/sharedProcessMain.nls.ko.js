/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/sharedProcessMain.nls.ko", {
	"vs/base/common/errors": [
		"{0}. 오류 코드: {1}",
		"사용 권한이 거부되었습니다(HTTP {0}).",
		"사용 권한이 거부되었습니다.",
		"{0}(HTTP {1}: {2})",
		"{0}(HTTP {1})",
		"알 수 없는 연결 오류({0})",
		"알 수 없는 연결 오류가 발생했습니다. 인터넷에 연결되지 않았거나 연결된 서버가 오프라인 상태입니다.",
		"{0}: {1}",
		"알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.",
		"시스템 오류가 발생했습니다({0}).",
		"알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.",
		"{0}(총 {1}개의 오류)",
		"알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.",
		"구현 안 됨",
		"잘못된 인수: {0}",
		"잘못된 인수",
		"잘못된 상태: {0}",
		"잘못된 상태",
		"필요한 파일을 로드하지 못했습니다. 인터넷에 연결되지 않았거나 연결된 서버가 오프라인 상태입니다. 브라우저를 새로 고친 후 다시 시도해 보세요.",
		"필요한 파일을 로드하지 못했습니다. 응용 프로그램을 다시 시작하여 다시 시도하세요. 세부 정보: {0}",
	],
	"vs/base/common/json": [
		"잘못된 기호",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"파일 끝 필요",
	],
	"vs/base/common/severity": [
		"오류",
		"경고",
		"정보",
	],
	"vs/base/node/zip": [
		"zip 파일 내에 {0}이(가) 없습니다.",
	],
	"vs/code/node/argv": [
		"diff 편집기를 엽니다. 인수로 두 개의 파일 경로를 전달해야 합니다.",
		"설치된 모든 확장을 사용하지 않도록 설정합니다.",
		"줄과 열에 있는 경로의 파일을 엽니다(경로에 :line[:column] 추가).",
		"사용할 로캘(예: en-US 또는 zh-TW)입니다.",
		"코드의 새 인스턴스를 강제 적용합니다.",
		"Start with the \'Developer: Startup Performance\' command enabled.",
		"마지막 활성 창에서 파일 또는 폴더를 강제로 엽니다.",
		"사용자 데이터가 저장되는 디렉터리를 지정합니다(루트로 실행할 경우 유용함).",
		"자세한 정보 표시를 출력합니다(--wait를 의미).",
		"창이 닫힐 때까지 기다린 후 돌아갑니다.",
		"Set the root path for extensions.",
		"설치된 확장을 나열합니다.",
		"확장을 설치합니다.",
		"확장을 제거합니다.",
		"버전을 출력합니다.",
		"사용법을 출력합니다.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"구성 설정을 적용합니다.",
		"설정을 요약합니다. 이 레이블은 설정 파일에서 구분 주석으로 사용됩니다.",
		"구성 속성에 대한 설명입니다.",
		"설정된 경우 \'configuration.type\'을 \'개체\'로 설정해야 합니다.",
		"\'configuration.title\'은 문자열이어야 합니다.",
		"\'configuration.properties\'는 개체여야 합니다.",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Extension invalid: package.json is not a JSON file.",
		"Extension invalid: manifest name mismatch.",
		"Extension invalid: manifest publisher mismatch.",
		"Extension invalid: manifest version mismatch.",
		"{0}을(를) 다시 설치하기 전에 Code를 다시 시작하세요.",
		"이 버전의 코드에서 {0}의 호환 버전을 찾을 수 없습니다.",
		"Could not find extension",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"가져온 확장 설명이 비어 있습니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `object` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.",
		"속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string` 형식이어야 합니다.",
		"확장의 폴더({1}) 내에 포함할 `main`({0})이 필요합니다. 이로 인해 확장이 이식 불가능한 상태가 될 수 있습니다.",
		"속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.",
		"VS Code 갤러리에 사용되는 확장의 표시 이름입니다.",
		"확장을 분류하기 위해 VS Code 갤러리에서 사용하는 범주입니다.",
		"VS Code 마켓플레이스에 사용되는 배너입니다.",
		"VS Code 마켓플레이스 페이지 머리글의 배너 색상입니다.",
		"배너에 사용되는 글꼴의 색상 테마입니다.",
		"VS Code 확장의 게시자입니다.",
		"VS Code 확장에 대한 활성화 이벤트입니다.",
		"다른 확장에 대한 종속성입니다. 확장 식별자는 항상 ${publisher}.${name}입니다(예: vscode.csharp).",
		"패키지가 VS Code 확장 형태로 게시되기 전에 스크립트가 실행되었습니다.",
		"이 패키지에 표시된 VS Code 확장의 전체 기여입니다.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"`engines.vscode` 값 {0}을(를) 구문 분석할 수 없습니다. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x 등을 사용하세요.",
		"`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이전이면 최소한 원하는 주 버전과 부 버전을 정의하세요( 예: ^0.10.0, 0.10.x, 0.11.0 등).",
		"`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이후이면 최소한 원하는 주 버전을 정의하세요(예: ^1.10.0, 1.10.x, 1.x.x, 2.x.x 등).",
		"확장이 Code {0}과(와) 호환되지 않습니다. 확장에 {1}이(가) 필요합니다.",
		"확장 버전이 semver와 호환되지 않습니다.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft.",
	]
});