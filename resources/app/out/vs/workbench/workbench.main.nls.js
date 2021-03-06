/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/workbench.main.nls", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Use Regular Expression",
		"Match Whole Word",
		"Match Case",
		"input"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"vs/base/browser/ui/messagelist/messageList": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}",
		"Error",
		"Warn",
		"Info",
		"Close"
	],
	"vs/base/browser/ui/resourceviewer/resourceViewer": [
		"{0} ({1}x{2})",
		"Sorry but playback of audio files is not supported.",
		"Sorry but playback of video files is not supported.",
		"The file will not be displayed in the editor because it is either binary, very large or uses an unsupported text encoding."
	],
	"vs/base/browser/ui/toolbar/toolbar": [
		"More"
	],
	"vs/base/common/errors": [
		"{0}. Error code: {1}",
		"Permission Denied (HTTP {0})",
		"Permission Denied",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Unknown Connection Error ({0})",
		"An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.",
		"{0}: {1}",
		"An unknown error occurred. Please consult the log for more details.",
		"A system error occured ({0})",
		"An unknown error occurred. Please consult the log for more details.",
		"{0} ({1} errors in total)",
		"An unknown error occurred. Please consult the log for more details.",
		"Not Implemented",
		"Illegal argument: {0}",
		"Illegal argument",
		"Illegal state: {0}",
		"Illegal state",
		"Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.",
		"Failed to load a required file. Please restart the application to try again. Details: {0}"
	],
	"vs/base/common/json": [
		"Invalid symbol",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"End of file expected"
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows"
	],
	"vs/base/common/processes": [
		"Error: executable info must define a command of type string.",
		"Warning: isShellCommand must be of type boolean. Ignoring value {0}.",
		"Warning: args must be of type string[]. Ignoring value {0}.",
		"Warning: options.cwd must be of type string. Ignoring value {0}."
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/node/processes": [
		"Can't execute a shell command on an UNC drive."
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse"
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controls the font family.",
		"Controls the font size.",
		"Controls the line height. Use 0 to compute the lineHeight from the fontSize.",
		"Controls visibility of line numbers",
		"Controls visibility of the glyph margin",
		"Columns at which to show vertical rulers",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls after how many characters the editor will wrap to the next line. Setting this to 0 turns on viewport width wrapping (word wrapping). Setting this to -1 forces the editor to never wrap.",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Controls if quick suggestions should show up or not while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Enables parameter hints",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions.",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Enable word based suggestions.",
		"Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled.",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'",
		"Zoom the font of the editor when using mouse wheel and holding Ctrl",
		"Controls the cursor style, accepted values are 'block', 'line' and 'underline'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls whether the editor should render whitespace characters",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls if the editor shows reference information for the modes that support it",
		"Controls whether the editor has code folding enabled",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/editorCommon": [
		"Move cursor to a logical position in the view",
		"Cursor move argument",
		"Argument containing mandatory 'to' value and an optional 'inSelectionMode' value. Value of 'to' has to be a defined value in `CursorMoveViewPosition`."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}"
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"Invalid `contributes.{0}`. Expected an array."
	],
	"vs/editor/common/services/modelServiceImpl": [
		"Please update your settings: `editor.detectIndentation` replaces `editor.tabSize`: \"auto\" or `editor.insertSpaces`: \"auto\""
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"Show Accessibility Help",
		"Thank you for trying out VS Code's experimental accessibility options.",
		"Status:",
		"Pressing Tab in this editor will move focus to the next focusable element. Toggle this behaviour by pressing {0}.",
		"Pressing Tab in this editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Pressing Tab in this editor will insert the tab character. Toggle this behaviour by pressing {0}.",
		"Pressing Tab in this editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"You can dismiss this tooltip and return to the editor by pressing Escape."
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"Move Carret Left",
		"Move Carret Right"
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"Define Keybinding",
		"Press desired key combination and ENTER",
		"Define Keybinding",
		"For your current keyboard layout press ",
		"You won't be able to produce this key combination under your current keyboard layout."
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No results"
	],
	"vs/editor/contrib/find/common/findController": [
		"Select All Occurences of Find Match",
		"Change All Occurrences",
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Move Last Selection To Next Find Match",
		"Move Last Selection To Previous Find Match",
		"Add Selection To Next Find Match",
		"Add Selection To Previous Find Match"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Unfold Recursively",
		"Fold",
		"Fold Recursively",
		"Fold All",
		"Unfold All",
		"Fold Level 1",
		"Fold Level 2",
		"Fold Level 3",
		"Fold Level 4",
		"Fold Level 5"
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Format Code"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} definitions",
		"Click to show the {0} definitions found.",
		"Peek Definition",
		"Go to Definition",
		"Open Definition to the Side"
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Suggested fixes: ",
		"Suggested fix: ",
		"({0}/{1}) [{2}]",
		"({0}/{1})",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning"
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Configured Tab Size",
		"Select Tab Size for Current File",
		"Convert Indentation to Spaces",
		"Convert Indentation to Tabs",
		"Indent Using Spaces",
		"Indent Using Tabs",
		"Detect Indentation from Content",
		"Toggle Render Whitespace",
		"Toggle Control Characters"
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Delete Line",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Move Line Down",
		"Move Line Up",
		"Copy Line Down",
		"Copy Line Up",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Invalid URI: cannot open {0}",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Create Multiple Cursors from Selected Lines"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Quick Fix"
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}, quick fix suggestion",
		"Loading...",
		"No fix suggestions.",
		"Quick Fix",
		"{0}, accepted"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} references",
		"Find All References",
		"Find All References"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Loading..."
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"No results",
		"References"
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Sorry, rename failed to execute.",
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/rename/common/rename": [
		"No result."
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Go to Bracket"
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggest": [
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Go back",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/suggest/electron-browser/snippetCompletion": [
		"Insert Snippet"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Use of Tab Key for Setting Focus"
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"View: Toggle Word Wrap"
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Close"
	],
	"vs/editor/node/languageConfiguration": [
		"Errors parsing {0}: {1}",
		"The opening bracket character or string sequence.",
		"The closing bracket character or string sequence.",
		"Defines the comment symbols",
		"Defines how block comments are marked.",
		"The character sequence that starts a block comment.",
		"The character sequence that ends a block comment.",
		"The character sequence that starts a line comment.",
		"Defines the bracket symbols that increase or decrease the indentation.",
		"Defines the bracket pairs. When a opening bracket is entered, the closing bracket is inserted automatically.",
		"Defines a list of scopes where the auto pairs are disabled.",
		"Defines the bracket pairs that can be used to surround a selected string."
	],
	"vs/editor/node/textMate/TMSnippets": [
		"Contributes snippets.",
		"Language identifier for which this snippet is contributed to.",
		"Path of the snippets file. The path is relative to the extension folder and typically starts with './snippets/'.",
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable."
	],
	"vs/editor/node/textMate/TMSyntax": [
		"Contributes textmate tokenizers.",
		"Language identifier for which this syntax is contributed to.",
		"Textmate scope name used by the tmLanguage file.",
		"Path of the tmLanguage file. The path is relative to the extension folder and typically starts with './syntaxes/'.",
		"List of language scope names to which this grammar is injected to.",
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.scopeName`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Invalid value in `contributes.{0}.injectTo`. Must be an array of language scope names. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable."
	],
	"vs/languages/html/common/html.contribution": [
		"HTML",
		"Maximum amount of characters per line (0 = disable).",
		"List of tags, comma separated, that shouldn't be reformatted. 'null' defaults to all tags listed at https://www.w3.org/TR/html5/dom.html#phrasing-content.",
		"Indent <head> and <body> sections.",
		"Whether existing line breaks before elements should be preserved. Only works before elements, not inside tags or for text.",
		"Maximum number of line breaks to be preserved in one chunk. Use 'null' for unlimited.",
		"Format and indent {{#foo}} and {{/foo}}.",
		"End with a newline.",
		"List of tags, comma separated, that should have an extra newline before them. 'null' defaults to \"head, body, /html\"."
	],
	"vs/platform/actions/browser/menuItemActionItem": [
		"{0} ({1})"
	],
	"vs/platform/actions/browser/menusExtensionPoint": [
		"menu items must be an arry",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to execute. The command must be declared in the 'commands'-section",
		"Identifier of an alternative command to execute. The command must be declared in the 'commands'-section",
		"Condition which must be true to show this item",
		"Group into which this command belongs",
		"Contributes menu items to the editor",
		"The editor title menu",
		"The editor context menu",
		"The file explorer context menu",
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `icon` can be omitted or must be either a string or a literal like `{dark, light}`",
		"Identifier of the command to execute",
		"Title by which the command is represented in the UI",
		"(Optional) Category string by the command is grouped in the UI",
		"(Optional) Icon which is used to represent the command in the UI. Either a file path or a themable configuration",
		"Icon path when a light theme is used",
		"Icon path when a dark theme is used",
		"Contributes commands to the command palette.",
		"Command `{0}` appears multiple times in the `commands` section.",
		"`{0}` is not a valid menu identifier",
		"Menu item references a command `{0}` which is not defined in the 'commands' section.",
		"Menu item references an alt-command `{0}` which is not defined in the 'commands' section.",
		"Menu item references the same command as default and alt-command",
		"Sorry, but currently only the 'navigation' group of the 'editor/title' menu supports alt-commands"
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"'configuration.properties' must be an object"
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions"
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"The publisher of the VS Code extension.",
		"Activation events for the VS Code extension.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"All contributions of the VS Code extension represented by this package."
	],
	"vs/platform/jsonschemas/common/jsonValidationExtensionPoint": [
		"Contributes json schema configuration.",
		"The file pattern to match, for example \"package.json\" or \"*.launch\".",
		"A schema URL ('http:', 'https:') or relative path to the extension folder ('./').",
		"'configuration.jsonValidation' must be a array",
		"'configuration.jsonValidation.fileMatch' must be defined",
		"'configuration.jsonValidation.url' must be a URL or relative path",
		"'configuration.jsonValidation.url' is an invalid relative URL: {0}",
		"'configuration.jsonValidation.url' must start with 'http:', 'https:' or './' to reference schemas located in the extension"
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Here are other available commands: ",
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/markers/common/problemMatcher": [
		"Error: Invalid problemMatcher description. A matcher must at least define a pattern, owner and a file location. The problematic matcher is:\n{0}\n",
		"Info: unknown severity {0}. Valid values are error, warning and info.\n",
		"The loop property is only supported on the last line matcher.",
		"The loop property is only supported on multi line matchers.",
		"The problem pattern is missing a regular expression.",
		"The problem pattern is invalid. It must have at least a file, message and line or location match group.",
		"A problem matcher must define both a begin pattern and an end pattern for watching.",
		"Error: The string {0} is not a valid regular expression.\n"
	],
	"vs/platform/message/common/message": [
		"Close",
		"Later",
		"Cancel"
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft."
	],
	"vs/workbench/api/node/mainThreadMessageService": [
		"Close"
	],
	"vs/workbench/browser/actions/configureLocale": [
		"Configure Language",
		"Defines VSCode's display language.",
		"See {0} for a list of supported languages.",
		"Changing the value requires to restart VSCode.",
		"Unable to create '{0}' ({1}).",
		"The UI Language to use."
	],
	"vs/workbench/browser/actions/openSettings": [
		"Unable to create '{0}' ({1}).",
		"Open User Settings",
		"The currently opened folder contains workspace settings that may override user settings",
		"Don't show again",
		"Open Workspace Settings",
		"Place your settings in this file to overwrite the default settings",
		"Open Keyboard Shortcuts",
		"Place your key bindings in this file to overwrite the defaults",
		"Open Workspace Settings",
		"Open a folder first to create workspace settings",
		"Place your settings in this file to overwrite default and user settings.",
		"Overwrite settings by placing them into your settings file.",
		"See http://go.microsoft.com/fwlink/?LinkId=808995 for the most commonly used settings.",
		"Default Settings",
		"Overwrite key bindings by placing them into your key bindings file.",
		"Default Keyboard Shortcuts",
		"Preferences"
	],
	"vs/workbench/browser/actions/toggleSidebarPosition": [
		"Toggle Side Bar Position",
		"View"
	],
	"vs/workbench/browser/actions/toggleSidebarVisibility": [
		"Toggle Side Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleStatusbarVisibility": [
		"Toggle Status Bar Visibility",
		"View"
	],
	"vs/workbench/browser/parts/activitybar/activityAction": [
		"{0} ({1})"
	],
	"vs/workbench/browser/parts/activitybar/activitybarPart": [
		"Active View Switcher"
	],
	"vs/workbench/browser/parts/compositePart": [
		"{0} ({1})",
		"{0} actions"
	],
	"vs/workbench/browser/parts/editor/binaryDiffEditor": [
		"Binary Diff Viewer",
		"Comparing binary files to non binary files is currently not supported"
	],
	"vs/workbench/browser/parts/editor/binaryEditor": [
		"Binary Viewer"
	],
	"vs/workbench/browser/parts/editor/editor.contribution": [
		"Text Editor",
		"Text Diff Editor",
		"Binary Diff Editor",
		"Show Editors in Left Group",
		"Show Editors in Center Group",
		"Show Editors in Right Group",
		"Show All Opened Editors",
		"View",
		"Workbench",
		"Controls if opened editors should show in tabs or not.",
		"Controls if opened editors show as preview. Preview editors are reused until they are kept (e.g. via double click or editing).",
		"Controls if opened editors from quick open show as preview. Preview editors are reused until they are kept (e.g. via double click or editing).",
		"Controls where editors open. Select 'left' or 'right' to open editors to the left or right of the current active one. Select 'first' or 'last' to open editors independently from the currently active one."
	],
	"vs/workbench/browser/parts/editor/editorActions": [
		"Split Editor",
		"Navigate Between Editor Groups",
		"Focus Left Editor Group",
		"Focus Center Editor Group",
		"Focus Right Editor Group",
		"Focus Previous Group",
		"Focus Next Group",
		"Open to the Side",
		"Close Editor",
		"Close Editors to the Left",
		"Close Editors to the Right",
		"Close All Editors",
		"Close Editors in Other Groups",
		"Close Other Editors",
		"Close All Editors in Group",
		"Move Editor Group Left",
		"Move Editor Group Right",
		"Minimize Other Editor Groups",
		"Even Editor Group Widths",
		"Maximize Editor Group and Hide Sidebar",
		"Keep Editor",
		"Open Next Editor",
		"Open Previous Editor",
		"Go Forward",
		"Go Back",
		"Reopen Closed Editor",
		"Show Editors in Left Group",
		"Show Editors in Center Group",
		"Show Editors in Right Group",
		"Show Editors in Group",
		"Show All Editors",
		"Open Previous Recently Used Editor in Group",
		"Open Next Recently Used Editor in Group",
		"Go to File...",
		"Open Previous Editor from History",
		"Clear Editor History",
		"Remove From Editor History",
		"Navigate Next in Quick Open",
		"Navigate Previous in Quick Open",
		"Open Last Editor in Group",
		"Move Editor into Group to the Left",
		"Move Editor into Group to the Right"
	],
	"vs/workbench/browser/parts/editor/editorCommands": [
		"Move the active editor by tabs or groups",
		"Active editor move argument",
		"\n\t\t\t\t\t\tArgument Properties:\n\t\t\t\t\t\t'to': String value providing where to move.\n\t\t\t\t\t\t'by': String value providing the unit for move. By tab or by group.\n\t\t\t\t\t\t'value': Number value providing how many positions or an absolute position to move.\n\t\t\t\t\t"
	],
	"vs/workbench/browser/parts/editor/editorPart": [
		"Left",
		"Center",
		"Right",
		"Unable to open '{0}': {1}."
	],
	"vs/workbench/browser/parts/editor/editorPicker": [
		"{0}, editor group picker",
		"Group: {0}",
		"No matching opened editor found in group",
		"List of opened editors is currently empty",
		"No matching opened editor found",
		"List of opened editors is currently empty"
	],
	"vs/workbench/browser/parts/editor/editorStatus": [
		"Ln {0}, Col {1} ({2} selected)",
		"Ln {0}, Col {1}",
		"{0} selections ({1} characters selected)",
		"{0} selections",
		"LF",
		"CRLF",
		"Tab moves focus",
		"Disable Accessibility Mode",
		"Go to Line",
		"Indentation",
		"Select Encoding",
		"Select End of Line Sequence",
		"Select Language Mode",
		"Spaces: {0}",
		"Tab Size: {0}",
		"Change Language Mode",
		"No text editor active at this time",
		"Configured Language",
		"languages",
		"Configure File Associations...",
		"Configure File Association for '{0}'...",
		"Auto Detect",
		"Select Language Mode",
		"You can configure filename to language associations in the **files.associations** section. The changes may need a restart to take effect on already opened files.",
		"Change Indentation",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"change view",
		"convert file",
		"Select Action",
		"Change End of Line Sequence",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"Select End of Line Sequence",
		"Change File Encoding",
		"No text editor active at this time",
		"No file active at this time",
		"Save with Encoding",
		"Reopen with Encoding",
		"Save with Encoding",
		"Reopen with Encoding",
		"Select Action",
		"Select File Encoding to Reopen File",
		"Select File Encoding to Save with"
	],
	"vs/workbench/browser/parts/editor/stringEditor": [
		"Text Editor",
		"{0}. Readonly text editor.",
		"Readonly text editor.",
		"{0}. Untitled file text editor.",
		"Untitled file text editor."
	],
	"vs/workbench/browser/parts/editor/tabsTitleControl": [
		"Tab actions"
	],
	"vs/workbench/browser/parts/editor/textDiffEditor": [
		"Text Diff Editor",
		"{0}. Readonly text compare editor.",
		"Readonly text compare editor.",
		"{0}. Text file compare editor.",
		"Text file compare editor.",
		"Switch to Inline View",
		"Switch to Side by Side View",
		"Next Change",
		"Previous Change"
	],
	"vs/workbench/browser/parts/editor/titleControl": [
		"Close",
		"Close Others",
		"Close to the Right",
		"Close All",
		"Keep Open",
		"Show Opened Editors",
		"Editor actions"
	],
	"vs/workbench/browser/parts/panel/panelPart": [
		"Close",
		"Toggle Panel Visibility",
		"Focus into Panel",
		"View",
		"View"
	],
	"vs/workbench/browser/parts/quickopen/quickOpenController": [
		"{0} (Press 'Enter' to confirm or 'Escape' to cancel)",
		"Press 'Enter' to confirm your input or 'Escape' to cancel",
		"There are no entries to pick from",
		"Type '?' to get help on the actions you can take from here",
		"recently opened",
		"recently opened",
		"No results found",
		"This quick open handler can not be used in the current context",
		"{0}, recently opened"
	],
	"vs/workbench/browser/parts/sidebar/sidebarPart": [
		"Focus into Side Bar",
		"View"
	],
	"vs/workbench/browser/parts/statusbar/statusbarPart": [
		"Command '{0}' can not be run from here."
	],
	"vs/workbench/browser/quickopen": [
		"No results matching",
		"No results found",
		"{0}, command",
		"No commands matching"
	],
	"vs/workbench/browser/viewlet": [
		"Collapse All",
		"{0} actions",
		"{0} actions"
	],
	"vs/workbench/common/editor/diffEditorInput": [
		"{0} ↔ {1}"
	],
	"vs/workbench/electron-browser/actions": [
		"Close Editor",
		"Close Window",
		"Close Folder",
		"There is currently no folder opened in this instance to close.",
		"New Window",
		"Toggle Full Screen",
		"Toggle Menu Bar",
		"Toggle Developer Tools",
		"Zoom In",
		"Zoom Out",
		"Reset Zoom",
		"Startup Performance",
		"Reload Window",
		"Open Recent",
		"folders",
		"files",
		"Select a path (hold Cmd-key to open in new window)",
		"Select a path to open (hold Ctrl-key to open in new window)",
		"Close Notification Messages",
		"{0} ⟷ {1}"
	],
	"vs/workbench/electron-browser/crashReporter": [
		"Enable crash reports to be sent to Microsoft.\n\t// This option requires restart to take effect."
	],
	"vs/workbench/electron-browser/darwin/cli.contribution": [
		"Install '{0}' command in PATH",
		"Please remove the alias referencing '{0}' in '{1}' (line {2}) and retry this action.",
		"Edit '{0}'",
		"Please remove the '{0}' alias from '{1}' before continuing.",
		"Cancel",
		"Continue",
		"Shell command '{0}' successfully installed in PATH.",
		"Code will now prompt with 'osascript' for Administrator privileges to install the shell command.",
		"Cancel",
		"Aborted",
		"OK",
		"Unable to create '/usr/local/bin'.",
		"Uninstall '{0}' command from PATH",
		"Shell command '{0}' successfully uninstalled from PATH.",
		"Code needs to change the '{0}' shell command. Would you like to do this now?",
		"Change Now",
		"Later",
		"Remember you can always run the '{0}' action from the Command Palette.",
		"Shell Command"
	],
	"vs/workbench/electron-browser/integration": [
		"Undo",
		"Redo",
		"Cut",
		"Copy",
		"Paste",
		"Select All"
	],
	"vs/workbench/electron-browser/main.contribution": [
		"View",
		"Developer",
		"File",
		"Window",
		"When enabled, will open files in a new window instead of reusing an existing instance.",
		"Controls how folders are being reopened after a restart. Select 'none' to never reopen a folder, 'one' to reopen the last folder you worked on or 'all' to reopen all folders of your last session.",
		"Controls if a window should restore to full screen mode if it was exited in full screen mode.",
		"Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.",
		"Update",
		"Configure whether you receive automatic updates from an update channel. Requires a restart after change."
	],
	"vs/workbench/electron-browser/nps.contribution": [
		"Do you mind taking a quick feedback survey?",
		"Take Survey",
		"Remind Me later",
		"Never Show Again"
	],
	"vs/workbench/electron-browser/shell": [
		"It is recommended not to run Code as 'root'.",
		"The shared process terminated unexpectedly. Please reload the window to recover."
	],
	"vs/workbench/electron-browser/update": [
		"Update Now",
		"Later",
		"Release Notes",
		"Download Now",
		"{0} will be updated after it restarts.",
		"There is an available update.",
		"There are no updates currently available."
	],
	"vs/workbench/parts/debug/browser/breakpointWidget": [
		"Breakpoint on line {0} will only stop if this condition is true. 'Enter' to accept, 'esc' to cancel.",
		"Type the breakpoint condition for line {0}. The program will only stop here if this condition is true. Press Enter to accept or Escape to cancel."
	],
	"vs/workbench/parts/debug/browser/debugActions": [
		"{0} ({1})",
		"Open {0}",
		"Configure or Fix 'launch.json'",
		"Select Configuration",
		"Start Debugging",
		"Restart",
		"Reconnect",
		"Step Over",
		"Step Into",
		"Step Out",
		"Step Back",
		"Stop",
		"Disconnect",
		"Continue",
		"Pause",
		"Restart Frame",
		"Remove Breakpoint",
		"Remove All Breakpoints",
		"Enable/Disable Breakpoint",
		"Enable All Breakpoints",
		"Disable All Breakpoints",
		"Activate Breakpoints",
		"Deactivate Breakpoints",
		"Reapply All Breakpoints",
		"Add Function Breakpoint",
		"Rename Function Breakpoint",
		"Add Conditional Breakpoint",
		"Edit Breakpoint",
		"Set Value",
		"Add Expression",
		"Add to Watch",
		"Rename Expression",
		"Remove Expression",
		"Remove All Expressions",
		"Clear Console",
		"Debug Console",
		"New Output in Debug Console",
		"Start Without Debugging"
	],
	"vs/workbench/parts/debug/browser/debugEditorModelManager": [
		"Breakpoint",
		"Disabled Breakpoint",
		"Unverified Breakpoint",
		"Unverified breakpoint. File is modified, please restart debug session.",
		"Conditional breakpoints not supported by this debug type"
	],
	"vs/workbench/parts/debug/common/debugModel": [
		"Unknown Source",
		"Please start a debug session to evaluate",
		"Unknown stack location",
		"Only primitive values are shown for this object."
	],
	"vs/workbench/parts/debug/electron-browser/debug.contribution": [
		"Show Debug",
		"Debug: Toggle Breakpoint",
		"Debug: Show Hover",
		"Debug: Conditional Breakpoint",
		"Debug: Evaluate",
		"Debug: Run to Cursor",
		"Debug",
		"Debug Console",
		"View",
		"Debug",
		"Launch configuration '{0}' does not exist."
	],
	"vs/workbench/parts/debug/electron-browser/debugEditorContribution": [
		"Add Breakpoint"
	],
	"vs/workbench/parts/debug/electron-browser/debugHover": [
		"Debug Hover"
	],
	"vs/workbench/parts/debug/electron-browser/debugService": [
		"Debugging started.",
		"Debugging paused, reason {0}, {1} {2}",
		"Debugging stopped.",
		"Added breakpoint, line {0}, file {1}",
		"Removed breakpoint, line {0}, file {1}",
		"Please set up the launch configuration file for your application.",
		"Configured debug type '{0}' is not supported.",
		"Missing property 'type' for the chosen launch configuration.",
		"Build errors have been detected during preLaunchTask '{0}'.",
		"Build error has been detected during preLaunchTask '{0}'.",
		"The preLaunchTask '{0}' terminated with exit code {1}.",
		"Debug Anyway",
		"Debug adapter process has terminated unexpectedly",
		"Could not find the preLaunchTask '{0}'.",
		"There is a task {0} running. Can not run pre launch task {1}.",
		"Source {0} is not available.",
		"Debugging continued."
	],
	"vs/workbench/parts/debug/electron-browser/debugViewer": [
		"Thread",
		"paused",
		"running",
		"Load More Stack Frames",
		"Thread {0}, callstack, debug",
		"Stack Frame {0} line {1} {2}, callstack, debug",
		"Type new variable value",
		"Scope {0}, variables, debug",
		"{0} value {1}, variables, debug",
		"Expression to watch",
		"Type watch expression",
		"{0} value {1}, watch, debug",
		"{0} value {1}, watch, debug",
		"Function to break on",
		"Type function breakpoint",
		"Function breakpoints are not supported by this debug type",
		"Breakpoint line {0} {1}, breakpoints, debug",
		"Function breakpoint {0}, breakpoints, debug",
		"Exception breakpoint {0}, breakpoints, debug"
	],
	"vs/workbench/parts/debug/electron-browser/debugViews": [
		"Variables Section",
		"Variables",
		"Debug Variables",
		"Expressions Section",
		"Watch",
		"Debug Watch Expressions",
		"Call Stack Section",
		"Call Stack",
		"Debug Call Stack",
		"Paused on {0}",
		"Breakpoints Section",
		"Breakpoints",
		"Debug Breakpoints"
	],
	"vs/workbench/parts/debug/electron-browser/electronDebugActions": [
		"Copy Value",
		"Copy"
	],
	"vs/workbench/parts/debug/node/debugAdapter": [
		"Type of configuration.",
		"Name of configuration; appears in the launch configuration drop down menu.",
		"Request type of configuration. Can be \"launch\" or \"attach\".",
		"Task to run before debug session starts.",
		"Controls behavior of the internal debug console.",
		"Windows specific launch configuration attributes.",
		"OS X specific launch configuration attributes.",
		"Linux specific launch configuration attributes.",
		"Relative paths will no longer be automatically converted to absolute ones. Consider using ${workspaceRoot} as a prefix."
	],
	"vs/workbench/parts/debug/node/debugConfigurationManager": [
		"Contributes debug adapters.",
		"Unique identifier for this debug adapter.",
		"Display name for this debug adapter.",
		"Allow breakpoints for these languages.",
		"List of languages.",
		"Path to the debug adapter program. Path is either absolute or relative to the extension folder.",
		"Optional arguments to pass to the adapter.",
		"Optional runtime in case the program attribute is not an executable but requires a runtime.",
		"Optional runtime arguments.",
		"Mapping from interactive variables (e.g ${action.pickProcess}) in `launch.json` to a command.",
		"Configurations for generating the initial 'launch.json'.",
		"JSON schema configurations for validating 'launch.json'.",
		"Windows specific settings.",
		"Runtime used for Windows.",
		"OS X specific settings.",
		"Runtime used for OSX.",
		"Linux specific settings.",
		"Runtime used for Linux.",
		"Contributes breakpoints.",
		"Allow breakpoints for this language.",
		"Launch",
		"Version of this file format.",
		"List of configurations. Add new configurations or edit existing ones.",
		"Debug adapter 'type' can not be omitted and must be of type 'string'.",
		"Debug type '{0}' is already registered and has attribute '{1}', ignoring attribute '{1}'.",
		"Adapter {0} does not contribute variable {1} that is specified in launch configuration.",
		"Unable to create 'launch.json' file inside the '.vscode' folder ({0}).",
		"Select Environment"
	],
	"vs/workbench/parts/debug/node/rawDebugSession": [
		"More Info",
		"No extension installed for '{0}' debugging.",
		"Unable to launch debug adapter from '{0}'.",
		"Debug adapter executable '{0}' not found.",
		"{0}. Stopping the debug adapter.",
		"Debug adapter process has terminated unexpectedly"
	],
	"vs/workbench/parts/emmet/node/actions/balance": [
		"Emmet: Balance (inward)",
		"Emmet: Balance (outward)"
	],
	"vs/workbench/parts/emmet/node/actions/editPoints": [
		"Emmet: Previous Edit Point",
		"Emmet: Next Edit Point"
	],
	"vs/workbench/parts/emmet/node/actions/evaluateMath": [
		"Emmet: Evaluate Math Expression"
	],
	"vs/workbench/parts/emmet/node/actions/expandAbbreviation": [
		"Emmet: Expand Abbreviation"
	],
	"vs/workbench/parts/emmet/node/actions/incrementDecrement": [
		"Emmet: Increment by 0.1",
		"Emmet: Decrement by 0.1",
		"Emmet: Increment by 1",
		"Emmet: Decrement by 1",
		"Emmet: Increment by 10",
		"Emmet: Decrement by 10"
	],
	"vs/workbench/parts/emmet/node/actions/matchingPair": [
		"Emmet: Go to Matching Pair"
	],
	"vs/workbench/parts/emmet/node/actions/mergeLines": [
		"Emmet: Merge Lines"
	],
	"vs/workbench/parts/emmet/node/actions/reflectCssValue": [
		"Emmet: Reflect CSS Value"
	],
	"vs/workbench/parts/emmet/node/actions/removeTag": [
		"Emmet: Remove Tag"
	],
	"vs/workbench/parts/emmet/node/actions/selectItem": [
		"Emmet: Select Previous Item",
		"Emmet: Select Next Item"
	],
	"vs/workbench/parts/emmet/node/actions/splitJoinTag": [
		"Emmet: Split/Join Tag"
	],
	"vs/workbench/parts/emmet/node/actions/toggleComment": [
		"Emmet: Toggle Comment"
	],
	"vs/workbench/parts/emmet/node/actions/updateImageSize": [
		"Emmet: Update Image Size"
	],
	"vs/workbench/parts/emmet/node/actions/updateTag": [
		"Enter Tag",
		"Tag",
		"Emmet: Update Tag"
	],
	"vs/workbench/parts/emmet/node/actions/wrapWithAbbreviation": [
		"Enter Abbreviation",
		"Abbreviation",
		"Emmet: Wrap with Abbreviation"
	],
	"vs/workbench/parts/emmet/node/emmet.contribution": [
		"Emmet",
		"When enabled, emmet abbreviations are expanded when pressing TAB.",
		"Preferences used to modify behavior of some actions and resolvers of Emmet.",
		"Define profile for specified syntax or use your own profile with specific rules."
	],
	"vs/workbench/parts/execution/electron-browser/terminal.contribution": [
		"External Terminal",
		"Customizes which terminal to run on Windows.",
		"Customizes which terminal application to run on OS X.",
		"Customizes which terminal to run on Linux.",
		"Open New Command Prompt",
		"Open New Terminal",
		"Open in Command Prompt",
		"Open in Terminal"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionEditor": [
		"License",
		"No README available."
	],
	"vs/workbench/parts/extensions/electron-browser/extensionTipsService": [
		"It is recommended to install the '{0}' extension.",
		"Don't show again",
		"Show Recommendations"
	],
	"vs/workbench/parts/extensions/electron-browser/extensions.contribution": [
		"Manage Extensions",
		"Install Gallery Extensions",
		"Extension",
		"View"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsActions": [
		"Install",
		"Installing",
		"Uninstall",
		"Are you sure you want to uninstall '{0}'?",
		"{0} was successfully uninstalled. Restart to deactivate it.",
		"Restart Now",
		"Update",
		"Enable",
		"In order to enable this extension, this window of VS Code needs to be restarted.\n\nDo you want to continue?",
		"Restart Now",
		"Show Extensions",
		"Install Extensions",
		"Show Installed Extensions",
		"Clear Extensions Input",
		"Show Outdated Extensions",
		"Show Popular Extensions",
		"Show Recommended Extensions"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsInput": [
		"Extension: {0}"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsQuickOpen": [
		"Press Enter to manage your extensions.",
		"Press Enter to search for '{0}' in the Marketplace.",
		"Type an extension name"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsWorkbenchExtension": [
		"Extensions were successfully installed. Restart to enable them.",
		"Extension was successfully installed. Restart to enable it.",
		"Restart Now",
		"Extensions",
		"{0} Outdated Extensions"
	],
	"vs/workbench/parts/feedback/browser/feedback": [
		"Tweet Feedback",
		"Tweet us your feedback.",
		"How was your experience?",
		"Happy",
		"Sad",
		"Other ways to contact us",
		"Submit a bug",
		"Request a missing feature",
		"Tell us why?",
		"Comments",
		"Tweet",
		"character left",
		"characters left",
		"Sending",
		"Thanks",
		"Try again"
	],
	"vs/workbench/parts/files/browser/editors/binaryFileEditor": [
		"Binary File Viewer"
	],
	"vs/workbench/parts/files/browser/editors/textFileEditor": [
		"Text File Editor",
		"Create File",
		"{0}. Text file editor.",
		"Text file editor."
	],
	"vs/workbench/parts/files/browser/fileActions": [
		"Retry",
		"Rename",
		"Rename",
		"File '{0}' is currently being saved, please try again later.",
		"New File",
		"New Folder",
		"Open a folder first to create files or folders within.",
		"New Untitled File",
		"New File",
		"New Folder",
		"New File",
		"New Folder",
		"Are you sure you want to delete '{0}' and its contents?",
		"Are you sure you want to delete '{0}'?",
		"You can restore from the recycle bin.",
		"You can restore from the trash.",
		"&&Move to Recycle Bin",
		"&&Move to Trash",
		"Are you sure you want to permanently delete '{0}' and its contents?",
		"Are you sure you want to permanently delete '{0}'?",
		"This action is irreversible!",
		"&&Delete",
		"Delete Permanently",
		"Delete",
		"Delete",
		"Import Files",
		"A file or folder with the same name already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace",
		"Copy",
		"Paste",
		"Duplicate",
		"Open to the Side",
		"Select for Compare",
		"Compare Active File With...",
		"The selected file can not be compared with '{0}'.",
		"Open a file first to compare it with another file.",
		"Compare with '{0}'",
		"Compare Files",
		"Refresh",
		"Save",
		"Save As...",
		"Save All",
		"Save All in Group",
		"Save Dirty Files",
		"Revert File",
		"Focus on Open Editors View",
		"Focus on Files Explorer",
		"Show Active File in Explorer",
		"Open a file first to show it in the explorer",
		"Collapse Folders in Explorer",
		"Refresh Explorer",
		"A file or folder name must be provided.",
		"A file or folder **{0}** already exists at this location. Please choose a different name.",
		"The name **{0}** is not valid as a file or folder name. Please choose a different name.",
		"The name **{0}** results in a path that is too long. Please choose a shorter name."
	],
	"vs/workbench/parts/files/browser/fileActions.contribution": [
		"Files"
	],
	"vs/workbench/parts/files/browser/fileTracker": [
		"{0} unsaved files"
	],
	"vs/workbench/parts/files/browser/files.contribution": [
		"Show Explorer",
		"Explorer",
		"View",
		"Text File Editor",
		"Binary File Editor",
		"Files",
		"Configure glob patterns for excluding files and folders.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name.",
		"Configure file associations to languages (e.g. \"*.extension\": \"html\"). These have precedence over the default associations of the languages installed.",
		"The default character set encoding to use when reading and writing files.",
		"The default end of line character.",
		"When enabled, will trim trailing whitespace when you save a file.",
		"Controls auto save of dirty files. Accepted values:  \"{0}\", \"{1}\", \"{2}\". If set to \"{3}\" you can configure the delay in \"files.autoSaveDelay\".",
		"Controls the delay in ms after which a dirty file is saved automatically. Only applies when \"files.autoSave\" is set to \"{0}\"",
		"Configure glob patterns of file paths to exclude from file watching. Changing this setting requires a restart. When you experience Code consuming lots of cpu time on startup, you can exclude large folders to reduce the initial load.",
		"File Explorer",
		"Number of editors shown in the Open Editors pane. Set it to 0 to hide the pane.",
		"Controls if the height of the open editors section should adapt dynamically to the number of elements or not.",
		"Controls if the explorer should automatically reveal files when opening them.",
		"Controls if the explorer should allow to move files and folders via drag and drop."
	],
	"vs/workbench/parts/files/browser/saveErrorHandler": [
		"Overwrite",
		"Retry",
		"Discard",
		"Failed to save '{0}': File is write protected. Select 'Overwrite' to remove protection.",
		"Failed to save '{0}': {1}",
		"Failed to save '{0}': The content on disk is newer. Click on **Compare** to compare your version with the one on disk.",
		"Compare",
		"{0} - on disk ↔ in {1}",
		"{0} - Resolve save conflict",
		"Please either select **Revert** to discard your changes or **Overwrite** to replace the content on disk with your changes",
		"Overwrite",
		"The content of the file on disk has changed and the left hand side of the compare editor was refreshed. Please review and resolve again.",
		"Revert"
	],
	"vs/workbench/parts/files/browser/views/emptyView": [
		"Files Explorer Section",
		"No Folder Opened",
		"You have not yet opened a folder.",
		"Open Folder"
	],
	"vs/workbench/parts/files/browser/views/explorerView": [
		"Files Explorer Section",
		"Files Explorer"
	],
	"vs/workbench/parts/files/browser/views/explorerViewer": [
		"Type file name. Press Enter to confirm or Escape to cancel.",
		"{0}, Files Explorer",
		"File '{0}' is currently being saved, please try again later.",
		"'{0}' already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace"
	],
	"vs/workbench/parts/files/browser/views/openEditorsView": [
		"Open Editors Section",
		"Open Editors",
		"Open Editors",
		"{0} unsaved"
	],
	"vs/workbench/parts/files/browser/views/openEditorsViewer": [
		"{0}, Editor Group",
		"{0}, Open Editor",
		"Save All",
		"Close All",
		"Close",
		"Close Others",
		"Close All"
	],
	"vs/workbench/parts/files/common/editors/textFileEditorModel": [
		"Failed to save '{0}': {1}",
		"An unexpected error was thrown from a file change listener of type: {0}",
		"The file is dirty. Please save it first before reopening it with another encoding."
	],
	"vs/workbench/parts/files/electron-browser/electronFileActions": [
		"Reveal in Explorer",
		"Reveal in Finder",
		"Open Containing Folder",
		"Reveal Active File in Windows Explorer",
		"Reveal Active File in Finder",
		"Open Containing Folder of Active File",
		"Open a file first to reveal",
		"Copy Path",
		"Copy Path of Active File",
		"Open a file first to copy its path",
		"Open File...",
		"Open Folder...",
		"Open...",
		"Open Active File in New Window",
		"Open a file first to open in new window"
	],
	"vs/workbench/parts/files/electron-browser/files.electron.contribution": [
		"Files"
	],
	"vs/workbench/parts/files/electron-browser/textFileServices": [
		"Do you want to save the changes you made to {0}?",
		"Do you want to save the changes to the following {0} files?",
		"...1 additional file not shown",
		"...{0} additional files not shown",
		"&&Save All",
		"&&Save",
		"Do&&n't Save",
		"Cancel",
		"Your changes will be lost if you don't save them.",
		"All Files"
	],
	"vs/workbench/parts/git/browser/gitActions": [
		"Open Change",
		"Open File",
		"Init",
		"Refresh",
		"Stage",
		"Stage All",
		"Are you sure you want to clean all changes?",
		"There are unstaged changes in {0} file.\n\nThis action is irreversible!",
		"There are unstaged changes in {0} files.\n\nThis action is irreversible!",
		"&&Clean Changes",
		"Are you sure you want to clean changes in '{0}'?",
		"This action is irreversible!",
		"&&Clean Changes",
		"Clean",
		"Clean All",
		"Unstage",
		"Unstage All",
		"Can't checkout. Please commit or stage your work first.",
		"Commit Staged",
		"Commit",
		"Commit Message",
		"Commit All",
		"Commit All",
		"Commit Staged",
		"Can't pull. Please commit or stage your work first.",
		"Authentication failed on the git remote.",
		"Authentication failed on the git remote.",
		"Publish",
		"Are you sure you want to publish '{0}' to '{1}'?",
		"&&Publish",
		"Pick a remote to publish the branch '{0}' to:",
		"Authentication failed on the git remote.",
		"Are you sure you want to synchronize your git repository?",
		"Authentication failed on the git remote.",
		"Undo Last Commit"
	],
	"vs/workbench/parts/git/browser/gitActions.contribution": [
		"Switch to Changes View",
		"Switch to Editor View",
		"Stage",
		"Unstage",
		"Stage Selected Lines",
		"Unstage Selected Lines",
		"Open Change",
		"Open File",
		"Git"
	],
	"vs/workbench/parts/git/browser/gitQuickOpen": [
		"{0}, git",
		"Branch at {0}",
		"Remote branch at {0}",
		"Tag at {0}",
		"Branch {0} is already the current branch",
		"{0}, git branch",
		"Create branch {0}",
		"No other branches",
		"Please provide a valid branch name"
	],
	"vs/workbench/parts/git/browser/gitServices": [
		"Can't open this git resource.",
		"{0} (index) ↔ {1}",
		"{0} - Changes on index",
		"{0} ← {1}",
		"{0} - Renamed - Changes on index",
		"{0} (HEAD) ↔ {1}",
		"{0} - Changes on working tree",
		"{0} (merge) ↔ {1}",
		"{0} - Merge changes",
		"You seem to have git {0} installed. Code works best with git >=2.0.0.",
		"Don't show again",
		"Download",
		"Please configure your git user name and e-mail.",
		"Git {0}",
		"You should first resolve the unmerged changes before committing your changes.",
		"Show Output",
		"Cancel",
		"There was an issue running a git operation. Please review the output or use a console to check the state of your repository.",
		"{0} (index)",
		"{0} - Changes on index",
		"{0} ({1})",
		"{0} - Changes on {1}",
		"Can't open this git resource."
	],
	"vs/workbench/parts/git/browser/gitWidgets": [
		"Publish Branch",
		"Synchronize Changes",
		"Git is not enabled in this workspace."
	],
	"vs/workbench/parts/git/browser/gitWorkbenchContributions": [
		"Running git status",
		"{0} pending changes",
		"Show Git",
		"Git",
		"Git",
		"View",
		"Git Commands",
		"Git",
		"Is git enabled",
		"Path to the git executable",
		"Whether auto refreshing is enabled",
		"Whether auto fetching is enabled.",
		"Whether long commit messages should be warned about.",
		"Always allow large repositories to be managed by Code.",
		"Confirm before synchronizing git repositories."
	],
	"vs/workbench/parts/git/node/git.lib": [
		"File seems to be binary and cannot be opened as text"
	],
	"vs/workbench/parts/html/browser/html.contribution": [
		"Html Preview"
	],
	"vs/workbench/parts/html/browser/htmlPreviewPart": [
		"Invalid editor input."
	],
	"vs/workbench/parts/markers/common/messages": [
		"View",
		"Show Problems",
		"Problems View",
		"Controls if Problems view should automatically reveal files when opening them",
		"No problems",
		"Problems grouped by files",
		"No problems have been detected in the workspace so far.",
		"No results found with provided filter criteria",
		"Filter Problems",
		"Filter by type or text",
		"errors",
		"warnings",
		"infos",
		"1 Error",
		"{0} Errors",
		"1 Warning",
		"{0} Warnings",
		"1 Info",
		"{0} Infos",
		"1 Unknown",
		"{0} Unknowns",
		"({0}, {1})",
		"{0} with {1} problems",
		"Error generated by {0}: {1} at line {2} and column {3}",
		"Error: {0} at line {1} and column {2}",
		"Warning generated by {0}: {1} at line {2} and column {3}",
		"Warning: {0} at line {1} and column {2}",
		"Info generated by {0}: {1} at line {2} and column {3}",
		"Info: {0} at line {1} and column {2}",
		"Problem generated by {0}: {1} at line {2} and column {3}",
		"Problem: {0} at line {1} and column {2}",
		"Errors and Warnings"
	],
	"vs/workbench/parts/output/browser/output.contribution": [
		"Output",
		"View",
		"Clear Output"
	],
	"vs/workbench/parts/output/browser/outputActions": [
		"Toggle Output",
		"Clear Output",
		"Switch to Output"
	],
	"vs/workbench/parts/output/browser/outputEditorInput": [
		"Output",
		"for '{0}'"
	],
	"vs/workbench/parts/quickopen/browser/commandsHandler": [
		"Show All Commands",
		"{0}, {1}, commands",
		"{0}, commands",
		"Command '{0}' can not be run from here.",
		"Command '{0}' is not enabled in the current context.",
		"{0}: {1}",
		"{0}: {1}",
		"No commands matching"
	],
	"vs/workbench/parts/quickopen/browser/gotoLineHandler": [
		"Go to Line...",
		"Type a line number between 1 and {0} to navigate to",
		"Type a line number to navigate to",
		"Go to line {0} and column {1}",
		"Go to line {0}",
		"Type a line number to navigate to.",
		"Open a text file first to go to a line"
	],
	"vs/workbench/parts/quickopen/browser/gotoSymbolHandler": [
		"Go to Symbol...",
		"symbols ({0})",
		"methods ({0})",
		"functions ({0})",
		"constructors ({0})",
		"variables ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"namespaces ({0})",
		"packages ({0})",
		"modules ({0})",
		"properties ({0})",
		"enumerations ({0})",
		"strings ({0})",
		"rules ({0})",
		"files ({0})",
		"arrays ({0})",
		"numbers ({0})",
		"booleans ({0})",
		"objects ({0})",
		"keys ({0})",
		"{0}, symbols",
		"No symbols matching",
		"No symbols found",
		"Type to narrow down symbols of the currently active editor.",
		"Unfortunately we have no symbol information for the file",
		"Open a text file first to go to a symbol"
	],
	"vs/workbench/parts/quickopen/browser/helpHandler": [
		"{0}, picker help",
		"global commands",
		"editor commands"
	],
	"vs/workbench/parts/quickopen/browser/quickopen.contribution": [
		"Show and Run Commands",
		"Go to Line",
		"Go to Line",
		"Go to Symbol in File",
		"Go to Symbol in File by Category",
		"Show Help"
	],
	"vs/workbench/parts/search/browser/replaceService": [
		"{0} ↔ {1} (Replace Preview)"
	],
	"vs/workbench/parts/search/browser/search.contribution": [
		"Find in Folder",
		"Show All Symbols",
		"Search",
		"View",
		"Open Files and Global Symbols by Name",
		"Open Any Symbol By Name",
		"Search",
		"Configure glob patterns for excluding files and folders in searches. Inherits all glob patterns from the files.exclude setting.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name."
	],
	"vs/workbench/parts/search/browser/searchActions": [
		"Show Search",
		"Replace in Files",
		"Find in Folder",
		"Refresh",
		"Clear Search Results",
		"Remove",
		"Replace All",
		"Replace",
		"Open Settings"
	],
	"vs/workbench/parts/search/browser/searchWidget": [
		"Replace All (Submit Search to Enable)",
		"Replace All",
		"Toggle Replace",
		"Search: Type Search Term and press Enter to search or Escape to cancel",
		"Search",
		"Replace: Type replace term and press Enter to preview or Escape to cancel",
		"Replace",
		"Expression matches everything"
	],
	"vs/workbench/parts/snippets/electron-browser/snippets.contribution": [
		"Open User Snippets",
		"Select Language for Snippet",
		"Unable to create {0}",
		"Preferences",
		"Empty snippet",
		"User snippet configuration",
		"The prefix to used when selecting the snippet in intellisense",
		"The snippet content. Use '${id}', '${id:label}', '${1:label}' for variables and '$0', '$1' for the cursor positions",
		"The snippet description."
	],
	"vs/workbench/parts/tasks/browser/taskQuickOpen": [
		"{0}, tasks",
		"Type the name of a task to run",
		"No tasks matching",
		"No tasks found"
	],
	"vs/workbench/parts/tasks/common/taskTemplates": [
		"Compiles a TypeScript project",
		"Compiles a TypeScript project in watch mode",
		"Executes .NET Core build command",
		"Executes the build target",
		"Example to run an arbitrary external command",
		"Executes common maven commands"
	],
	"vs/workbench/parts/tasks/electron-browser/task.contribution": [
		"Tasks are only available on a workspace folder.",
		"Run Build Task",
		"Run Test Task",
		"Run Rebuild Task",
		"Run Clean Task",
		"Configure Task Runner",
		"Tasks are only available on a workspace folder.",
		"Select a Task Runner",
		"Auto detecting tasks for {0}",
		"Auto detecting the task system failed. Using default template. Consult the task output for details.",
		"Unable to create the 'tasks.json' file inside the '.vscode' folder. Consult the task output for details.",
		"Close",
		"Terminate Running Task",
		"Failed to terminate running task",
		"Show Task Log",
		"Run Task",
		"99+",
		"Tasks",
		"Error: The content of the tasks.json file has syntax errors. Please correct them before executing a task.\n",
		"No task runner configured.",
		"No valid task runner configured. Supported task runners are 'service' and 'program'.",
		"There is an active running task right now. Terminate it first before executing another task.",
		"There is a task running. Do you want to terminate it?",
		"&&Terminate Task",
		"An error has occurred while running a task. See task log for details.",
		"Tasks",
		"Run Task",
		"The regular expression to find an error, warning or info in the output.",
		"The match group index of the filename. If omitted 1 is used.",
		"The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted line and column is assumed.",
		"The match group index of the problem's line. Defaults to 2",
		"The match group index of the problem's column. Defaults to 3",
		"The match group index of the problem's end line. Defaults to undefined",
		"The match group index of the problem's end column. Defaults to undefined",
		"The match group index of the problem's severity. Defaults to undefined",
		"The match group index of the problem's code. Defaults to undefined",
		"The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.",
		"In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.",
		"The regular expression to detect the begin or end of a watching task.",
		"The match group index of the filename. Can be omitted.",
		"The name of a base problem matcher to use.",
		"The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.",
		"The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.",
		"Controls if a problem reported on a text document is applied only to open, closed or all documents.",
		"A problem pattern or the name of a predefined problem pattern. Can be omitted if base is specified.",
		"Defines how file names reported in a problem pattern should be interpreted.",
		"If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern",
		"If matched in the output the start of a watching task is signaled.",
		"If matched in the output the end of a watching task is signaled.",
		"A regular expression signaling that a watched tasks begins executing triggered through file watching.",
		"A regular expression signaling that a watched tasks ends executing.",
		"The command to be executed. Can be an external program or a shell command.",
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted.",
		"Additional arguments passed to the command.",
		"Additional command options",
		"The current working directory of the executed program or script. If omitted Code's current workspace root is used.",
		"The environment of the executed program or shell. If omitted the parent process' environment is used.",
		"Controls whether the output of the running task is shown or not. If omitted 'always' is used.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Whether the user is prompted when VS Code closes with a running background task.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Controls whether the task name is added as an argument to the command. Default is false.",
		"Prefix to indicate that an argument is task.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The task configurations. Usually these are enrichments of task already defined in the external task runner.",
		"The task's name",
		"Additional arguments passed to the command when this task is invoked.",
		"Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.",
		"Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Maps this task to Code's default build command.",
		"Maps this task to Code's default test command.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The config's version number",
		"Windows specific build configuration",
		"Mac specific build configuration",
		"Linux specific build configuration"
	],
	"vs/workbench/parts/tasks/node/processRunnerConfiguration": [
		"Error: no valid command name provided.",
		"Error: command arguments must be an array of strings. Provided value is:\n{0}",
		"Warning: global matchers and tasks can't be mixed. Ignoring global matchers.",
		"Warning: options.cwd must be of type string. Ignoring value {0}\n",
		"Error: Problem Matcher in declare scope must have a name:\n{0}\n",
		"Error: tasks must provide a taskName property. The task will be ignored.\n{0}\n",
		"Warning: the defined problem matcher is unknown. Supported types are string | ProblemMatcher | (string | ProblemMatcher)[].\n{0}\n",
		"Error: Invalid problemMatcher reference: {0}\n"
	],
	"vs/workbench/parts/tasks/node/processRunnerDetector": [
		"Running gulp --tasks-simple didn't list any tasks. Did you run npm install?",
		"Running jake --tasks didn't list any tasks. Did you run npm install?",
		"Gulp is not installed on your system. Run npm install -g gulp to install it.",
		"Jake is not installed on your system. Run npm install -g jake to install it.",
		"Grunt is not installed on your system. Run npm install -g grunt to install it.",
		"Program {0} was not found. Message is {1}",
		"Build task named '{0}' detected.",
		"Test task named '{0}' detected."
	],
	"vs/workbench/parts/tasks/node/processRunnerSystem": [
		"No build task configured.",
		"No test task configured.",
		"The provided task configuration has validation errors. See tasks output log for details.",
		"No task to execute found.",
		"A unknown error has occurred while executing a task. See task output log for details.",
		"\nWatching build tasks has finished.",
		"Failed to launch external program {0} {1}.",
		"\nThe task '{0}' was terminated per user request."
	],
	"vs/workbench/parts/terminal/electron-browser/terminal.contribution": [
		"Integrated Terminal",
		"The path of the shell that the terminal uses on Linux.",
		"The command line arguments to use when on the Linux terminal.",
		"The path of the shell that the terminal uses on OS X.",
		"The command line arguments to use when on the OS X terminal.",
		"The path of the shell that the terminal uses on Windows. When using shells shipped with Windows (cmd, PowerShell or Bash on Ubuntu), prefer C:\\Windows\\sysnative over C:\\Windows\\System32 to use the 64-bit versions.",
		"Controls the font family of the terminal, this defaults to editor.fontFamily's value.",
		"Controls whether font ligatures are enabled in the terminal.",
		"Controls the font size of the terminal, this defaults to editor.fontSize's value.",
		"Controls the line height of the terminal, this number is multipled by the terminal font size to get the actual line-height in pixels.",
		"Controls whether the terminal cursor blinks.",
		"Controls whether locale variables are set at startup of the terminal, this defaults to true on OS X, false on other platforms.",
		"Terminal",
		"View"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalActions": [
		"Toggle Integrated Terminal",
		"Terminal: Kill the Active Terminal Instance",
		"Kill Terminal",
		"Terminal: Copy Selection",
		"Terminal: Create New Integrated Terminal",
		"New Terminal",
		"Terminal: Focus Terminal",
		"Terminal: Focus Next Terminal",
		"Terminal: Focus Previous Terminal",
		"Terminal: Paste into Active Terminal",
		"Terminal: Run Selected Text In Active Terminal",
		"Terminal: Switch Terminal Instance"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalService": [
		"Cannot copy terminal selection when terminal does not have focus"
	],
	"vs/workbench/parts/themes/electron-browser/themes.contribution": [
		"Color Theme",
		"Problem loading theme: {0}",
		"Select Color Theme",
		"Find more in the Marketplace...",
		"Preferences"
	],
	"vs/workbench/parts/update/electron-browser/update.contribution": [
		"Close",
		"Welcome to {0} v{1}! Would you like to read the Release Notes?",
		"Our license terms have changed, please go through them.",
		"Read License",
		"Insider builds are becoming daily builds!",
		"Never Show Again",
		"Read More"
	],
	"vs/workbench/services/files/electron-browser/fileService": [
		"The Microsoft .NET Framework 4.5 is required. Please follow the link to install it.",
		"Download .NET Framework 4.5",
		"Failed to move '{0}' to the trash"
	],
	"vs/workbench/services/files/node/fileService": [
		"File seems to be binary and cannot be opened as text",
		"File not found ({0})",
		"File is directory ({0})",
		"Unable to move/copy. File would replace folder it is contained in.",
		"Folders cannot be copied into the workspace. Please select individual files to copy them.",
		"File is Read Only"
	],
	"vs/workbench/services/history/browser/history": [
		"[Extension Development Host] - {0}",
		"● {0}",
		"{0} - {1}",
		"{0} - {1} - {2}",
		"{0} - {1}",
		"{0} - {1}"
	],
	"vs/workbench/services/keybinding/electron-browser/keybindingService": [
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to run when keybinding is triggered.",
		"Key or key sequence (separate keys with plus-sign and sequences with space, e.g Ctrl+O and Ctrl+L L for a chord",
		"Mac specific key or key sequence.",
		"Linux specific key or key sequence.",
		"Windows specific key or key sequence.",
		"Condition when the key is active.",
		"Contributes keybindings.",
		"Invalid `contributes.{0}`: {1}",
		"Keybindings configuration",
		"Key or key sequence (separated by space)",
		"Name of the command to execute",
		"Condition when the key is active."
	],
	"vs/workbench/services/message/electron-browser/messageService": [
		"&&Yes",
		"Cancel"
	],
	"vs/workbench/services/request/node/requestService": [
		"File not found.",
		"HTTP",
		"The proxy setting to use. If not set will be taken from the http_proxy and https_proxy environment variables",
		"Whether the proxy server certificate should be verified against the list of supplied CAs."
	],
	"vs/workbench/services/themes/electron-browser/themeService": [
		"Contributes textmate color themes.",
		"Label of the color theme as shown in the UI.",
		"Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme.",
		"Path of the tmTheme file. The path is relative to the extension folder and is typically './themes/themeFile.tmTheme'.",
		"Extension point `{0}` must be an array.",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"Unable to load {0}",
		"Problems parsing JSON theme file: {0}",
		"Problems parsing plist file: {0}"
	],
	"vs/workbench/services/thread/electron-browser/threadService": [
		"Extension host did not start in 10 seconds, it might be stopped on the first line and needs a debugger to continue.",
		"Extension host did not start in 10 seconds, that might be a problem.",
		"Error from the extension host: {0}",
		"Extension host terminated unexpectedly. Please reload the window to recover.",
		"Reload Window"
	]
});