//══════════════════════════════════════════════════════════════════════════════
// ■ Date (date.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Date formatting utility.
//══════════════════════════════════════════════════════════════════════════════
const dayjs = require("dayjs");

//──────────────────────────────────────────────────────────────────────────────
// ● Extensions
//──────────────────────────────────────────────────────────────────────────────
dayjs.extend(require("dayjs/plugin/duration"));
dayjs.extend(require("dayjs/plugin/relativeTime"));
dayjs.extend(require("dayjs/plugin/minMax"));
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
const durationPrototype = Object.getPrototypeOf(dayjs.duration());
durationPrototype.toString = durationPrototype.toISOString;

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = dayjs;
