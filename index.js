//==============================================================================
// ■ Reddit-Poster (reddit-poster/index.js)
//------------------------------------------------------------------------------
//     Reddit posting bot.
//==============================================================================
const log = require("./utils/log")("Main");

//------------------------------------------------------------------------------
// ● Main
//------------------------------------------------------------------------------
function main() {
  log.info("Bismi'Allah! Salam!");
  log.debug("This is the main function for the bot.");
  log.debug("The project is ready for the initial commit!");
  log.warn("Take care!");
  log.error("Learn from errors!");
  log.info("Let's go! Incha'Allah!");
}

//------------------------------------------------------------------------------
// ● Catch-Uncaught-Exceptions
//------------------------------------------------------------------------------
process.on("uncaughtException", (err) => {
  log.fatal("Uncaught exception.", err);
  process.exit(1);
});

//------------------------------------------------------------------------------
// ► Run
//------------------------------------------------------------------------------
process.stdout.write("\x1Bc");
main();
