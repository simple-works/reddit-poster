//==============================================================================
// ■ Environment (env.js)
//------------------------------------------------------------------------------
//     Runtime environment utilities.
//==============================================================================
const dotenv = require("dotenv");

//------------------------------------------------------------------------------
// ● Environment-Variables
//------------------------------------------------------------------------------
const vars = dotenv.config().parsed;

//------------------------------------------------------------------------------
// ● Environment-Is-Development
//------------------------------------------------------------------------------
const isDev =
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "dev" ||
  (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "prod");

//------------------------------------------------------------------------------
// ● Environment-Log
//------------------------------------------------------------------------------
function log() {
  console.log("■ Environment:");
  console.log(`├──● Mode:`);
  console.log(`│\t${isDev ? "✸ Development" : "✔ Production"}`);
  console.log("└──● Variables:");
  for (const key in vars) {
    console.log(`\t➔ ${key}: ${vars[key]}`);
  }
}

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = { vars, isDev, log };