//══════════════════════════════════════════════════════════════════════════════
// ■ Test (test.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     This file is for testing purposes only.
//══════════════════════════════════════════════════════════════════════════════
const utils = require("./utils/"); // eslint-disable-line
const log = utils.logger("Test"); // eslint-disable-line
// const Schedule = require("./core/Schedule");
const Post = require("./core/Post");

//──────────────────────────────────────────────────────────────────────────────
// ● Test
//──────────────────────────────────────────────────────────────────────────────
async function test() {
  const post = new Post({
    title: "Rise!",
    content: "https://some-url.com",
    oc: true,
    flairs: ["Artwork"],
  });
  console.log(post.toString());
  console.log(post);
  utils.logObj(post);
}

//──────────────────────────────────────────────────────────────────────────────
// ► Run
//──────────────────────────────────────────────────────────────────────────────
process.stdout.write("\x1Bc");
test();
