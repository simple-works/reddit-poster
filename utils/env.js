//══════════════════════════════════════════════════════════════════════════════
// ■ Environment (env.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Runtime environment utilities.
//══════════════════════════════════════════════════════════════════════════════
const dotenv = require("dotenv");
const chalk = require("chalk");

//──────────────────────────────────────────────────────────────────────────────
// ● Environment-Variables
//──────────────────────────────────────────────────────────────────────────────
const vars = dotenv.config().parsed;

//──────────────────────────────────────────────────────────────────────────────
// ● Environment-Is-Development
//──────────────────────────────────────────────────────────────────────────────
const isDev =
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "dev" ||
  (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "prod");

//──────────────────────────────────────────────────────────────────────────────
// ● Environment-Log
//──────────────────────────────────────────────────────────────────────────────
function log() {
  const devString = chalk.yellow("✸ Development");
  const prodString = chalk.red("✔ Production");
  const modeString = isDev ? devString : prodString;
  const varsKeys = Object.keys(vars);
  console.log("■ Environment:");
  console.log(`├──◉ Mode: ${modeString}`);
  console.log("└──● Variables:");
  for (let i = 0; i < varsKeys.length; i++) {
    const prefix = i === varsKeys.length - 1 ? "└──◉" : "├──◉";
    const value = chalk.cyan(vars[varsKeys[i]]);
    console.log(`   ${prefix} ${varsKeys[i]}: ${value}`);
  }
}

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = { vars, isDev, log };
