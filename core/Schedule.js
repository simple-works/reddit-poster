//==============================================================================
// ■ Schedule (Schedule.js)
//------------------------------------------------------------------------------
//     Class representing a schedule of an intended event.
//==============================================================================
const check = require("check-types");
const { date } = require("../utils/");
const { enumerate } = require("../utils/");

//------------------------------------------------------------------------------
// ● Schedule
//------------------------------------------------------------------------------
class Schedule {
  _gapDuration = date.duration();
  _refDate = date();

  constructor(schedule = {}) {
    check.assert.object(schedule);
    const { gapDuration, refDate } = schedule;
    const { gap, ref } = schedule;
    this.gapDuration = gapDuration || gap;
    this.refDate = refDate || ref;
  }

  get gapDuration() {
    return this._gapDuration;
  }

  set gapDuration(value) {
    const gapDuration = date.duration(value);
    const gapMilliseconds = gapDuration.asMilliseconds(); // May return NaN
    this._gapDuration =
      gapMilliseconds && !isNaN(gapMilliseconds) ? gapDuration : null;
  }

  get refDate() {
    return this._refDate;
  }

  set refDate(value) {
    const refDate = value ? date(value) : null;
    this._refDate = refDate && refDate.isValid() ? refDate : null;
  }

  get targetDate() {
    return this.refDate && this.gapDuration
      ? this.refDate.add(this.gapDuration)
      : date();
  }

  get isReady() {
    return !this.targetDate.isAfter(date()); // Is by now or before
  }

  get gapString() {
    return this.gapDuration
      ? `to redo every ${this.gapDuration
          .humanize()
          .replace("a ", "")
          .replace("an ", "")}`
      : "to never redo";
  }

  get refString() {
    return this.refDate ? `done ${this.refDate.fromNow()}` : "never done";
  }

  get targetString() {
    const expectedTimeText = this.targetDate.isSame(date())
      ? "now"
      : this.targetDate.fromNow();
    return this.isReady
      ? `ready to do ${expectedTimeText}`
      : `to do later ${expectedTimeText}`;
  }

  toString() {
    return `${this.constructor.name}: ${this.targetString}, ${this.refString}, ${this.gapString}`;
  }
}

//------------------------------------------------------------------------------
// ● Enumerate-Class-Accessors
//------------------------------------------------------------------------------
enumerate(Schedule, [
  "gapDuration",
  "gapString",
  "refDate",
  "refString",
  "targetDate",
  "targetString",
]);

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = Schedule;
