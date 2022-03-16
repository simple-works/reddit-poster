//==============================================================================
// ■ Test (test.js)
//------------------------------------------------------------------------------
//     This file is for testing purposes only.
//==============================================================================
// const log = require("./utils/").logger("Test");
// const Schedule = require("./core/Schedule");
const Tasklist = require("./core/Tasklist");

//------------------------------------------------------------------------------
// ● Test
//------------------------------------------------------------------------------
async function test() {
  // const s = new Schedule({ ref:"2022-03-16", gap: "P1D" });
  // console.log(s.toString());

  const tl = new Tasklist([
    { sub: "Ambratolm" },
    { sub: "TheRiseOfMyPower" },
    { sub: "Art" },
    { sub: "ImaginaryFeels" },
    { sub: "Illustration" },
  ]);
  for (const t of tl) {
    console.log(t);
  }
}

//------------------------------------------------------------------------------
// ► Run
//------------------------------------------------------------------------------
process.stdout.write("\x1Bc");
test();
