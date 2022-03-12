///==============================================================================
// ■ Miscellaneous (misc.js)
//------------------------------------------------------------------------------
//     Miscellaneous utilities.
//==============================================================================
const { promisify } = require("util");

//------------------------------------------------------------------------------
// ● Sleep
//------------------------------------------------------------------------------
async function sleep() {
  return promisify(setTimeout)(...arguments);
}

//------------------------------------------------------------------------------
// ● Repeat
//------------------------------------------------------------------------------
async function repeat(func, options = {}) {
  const { delay, immediate, delayArg, args } = options;
  // if (isNaN(delay)) delay = 1000;
  // if (!Array.isArray(args)) args = [];
  const getDelay = typeof delay === "function" ? delay : () => delay;
  (async function loop() {
    const currentDelay = getDelay();
    if (delayArg) args.unshift(currentDelay);
    if (immediate) func(...args);
    await sleep(currentDelay);
    if (!immediate) func(...args);
    loop();
  })();
}

//------------------------------------------------------------------------------
// ● Random-Integer
//------------------------------------------------------------------------------
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (isNaN(min) || isNaN(max)) return 0;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = { sleep, repeat, random };
