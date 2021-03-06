/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
"use strict";
var fs = require('fs');
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Log"] = 1] = "Log";
    LogLevel[LogLevel["Error"] = 2] = "Error";
})(exports.LogLevel || (exports.LogLevel = {}));
var LogLevel = exports.LogLevel;
/** Logger singleton */
var _logger;
var _pendingLogQ = [];
function log(msg, forceDiagnosticLogging, level) {
    if (forceDiagnosticLogging === void 0) { forceDiagnosticLogging = false; }
    if (level === void 0) { level = LogLevel.Log; }
    // [null, undefined] => string
    msg = msg + '';
    if (_pendingLogQ) {
        _pendingLogQ.push({ msg: msg, level: level });
    }
    else {
        _logger.log(msg, level, forceDiagnosticLogging);
    }
}
exports.log = log;
function verbose(msg) {
    log(msg, undefined, LogLevel.Verbose);
}
exports.verbose = verbose;
function error(msg, forceDiagnosticLogging) {
    if (forceDiagnosticLogging === void 0) { forceDiagnosticLogging = true; }
    log(msg, forceDiagnosticLogging, LogLevel.Error);
}
exports.error = error;
/**
 * Set the logger's minimum level to log. Log messages are queued before this is
 * called the first time, because minLogLevel defaults to Error.
 */
function setMinLogLevel(logLevel) {
    if (_logger) {
        _logger.minLogLevel = logLevel;
        // Clear out the queue of pending messages
        if (_pendingLogQ) {
            var logQ = _pendingLogQ;
            _pendingLogQ = null;
            logQ.forEach(function (item) { return log(item.msg, undefined, item.level); });
        }
    }
}
exports.setMinLogLevel = setMinLogLevel;
function init(logCallback, logFilePath) {
    // Re-init, create new global Logger
    _pendingLogQ = [];
    _logger = new Logger(logCallback, logFilePath);
    if (logFilePath) {
        log("Verbose logs are written to " + logFilePath);
    }
}
exports.init = init;
/**
 * Manages logging, whether to console.log, file, or VS Code console.
 */
var Logger = (function () {
    function Logger(logCallback, logFilePath) {
        this._diagnosticLogCallback = logCallback;
        this._logFilePath = logFilePath;
        this.minLogLevel = LogLevel.Error;
    }
    Object.defineProperty(Logger.prototype, "minLogLevel", {
        get: function () { return this._minLogLevel; },
        set: function (logLevel) {
            var _this = this;
            this._minLogLevel = logLevel;
            // Open a log file in the specified location. Overwritten on each run.
            if (logLevel < LogLevel.Error && this._logFilePath) {
                this._logFileStream = fs.createWriteStream(this._logFilePath);
                this._logFileStream.on('error', function (e) {
                    _this.sendLog("Error involving log file at path: " + _this._logFilePath + ". Error: " + e.toString(), LogLevel.Error);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param forceDiagnosticLogging - Writes to the diagnostic logging channel, even if diagnostic logging is not enabled.
     *      (For warnings/errors that appear whether logging is enabled or not.)
     */
    Logger.prototype.log = function (msg, level, forceDiagnosticLogging) {
        this.sendLog(msg, level);
        // If an error, prepend with '[LogLevel]'
        if (level === LogLevel.Error) {
            msg = "[" + LogLevel[level] + "] " + msg;
        }
        if (this._logFileStream) {
            this._logFileStream.write(msg + '\n');
        }
    };
    Logger.prototype.sendLog = function (msg, level) {
        if (level < this.minLogLevel)
            return;
        // Truncate long messages, they can hang VS Code
        if (msg.length > 1500)
            msg = msg.substr(0, 1500) + '[...]';
        if (this._diagnosticLogCallback) {
            this._diagnosticLogCallback(msg, level);
        }
    };
    return Logger;
}());
//# sourceMappingURL=logger.js.map