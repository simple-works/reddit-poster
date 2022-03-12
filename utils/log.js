//==============================================================================
// ■ Log (log.js)
//------------------------------------------------------------------------------
//     Logging utility.
//==============================================================================
const log4js = require("log4js");

//------------------------------------------------------------------------------
// 💡 Levels:
//   ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// ● Config
//------------------------------------------------------------------------------
log4js.levels.DEBUG.colour = "white";
log4js.levels.TRACE.levelStr = "TRC";
log4js.levels.DEBUG.levelStr = "DBG";
log4js.levels.INFO.levelStr = "INF";
log4js.levels.WARN.levelStr = "WRN";
log4js.levels.ERROR.levelStr = "ERR";
log4js.levels.FATAL.levelStr = "FTL";
log4js.levels.MARK.levelStr = "MRK";
log4js.configure("log.json");

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = log4js.getLogger;
