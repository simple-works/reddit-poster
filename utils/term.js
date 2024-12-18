//══════════════════════════════════════════════════════════════════════════════
// ■ Terminal (term.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Terminal utilites.
//══════════════════════════════════════════════════════════════════════════════
const ora = require("ora");

//──────────────────────────────────────────────────────────────────────────────
// ● Spinner
//──────────────────────────────────────────────────────────────────────────────
const spinner = ora({
  text: "Loading...\n",
  spinner: {
    interval: 125,
    frames: ["∙∙∙", "●∙∙", "∙●∙", "∙∙●", "∙∙∙"],
  },
});

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = { spinner };
