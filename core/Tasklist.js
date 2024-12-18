//══════════════════════════════════════════════════════════════════════════════
// ■ Tasklist (Tasklist.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Class representing a list of reddit posting tasks.
//══════════════════════════════════════════════════════════════════════════════
const check = require("check-types");
const Task = require("./Task");
const { enumerate } = require("../utils/");

//──────────────────────────────────────────────────────────────────────────────
// ● Tasklist-Class
//──────────────────────────────────────────────────────────────────────────────
class Tasklist {
  _tasks = [];

  constructor(tasks = []) {
    check.assert.array.of.object(tasks);
    for (const task of tasks) {
      this._tasks.push(new Task(task));
    }
  }

  *[Symbol.iterator]() {
    for (const task of this._tasks) yield task;
  }
}

//──────────────────────────────────────────────────────────────────────────────
// ● Enumerate-Class-Accessors
//──────────────────────────────────────────────────────────────────────────────
enumerate(Tasklist, [
]);

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = Tasklist;
