//══════════════════════════════════════════════════════════════════════════════
// ■ Test (test.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     This file is for testing purposes only.
//══════════════════════════════════════════════════════════════════════════════
const utils = require("./utils/"); // eslint-disable-line
const log = utils.logger("Test"); // eslint-disable-line
const Schedule = require("./core/Schedule"); // eslint-disable-line
const Post = require("./core/Post"); // eslint-disable-line
const Task = require("./core/Task"); // eslint-disable-line

//──────────────────────────────────────────────────────────────────────────────
// ● Test
//──────────────────────────────────────────────────────────────────────────────
async function test() {
  const task = new Task();
  console.dir(task, { showHidden: true, depth: 0 });
}

//──────────────────────────────────────────────────────────────────────────────
// ► Run
//──────────────────────────────────────────────────────────────────────────────
process.stdout.write("\x1Bc");
test();
