const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Some error message")
  const name = core.getInput("who-to-greet");

  core.debug("Debug Message");
  core.warning("Warning Message");
  core.error("Error Message");

  core.setSecret(name);
  console.log(`Helloooo00 ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hhelloo");
} catch (error) {
  core.setFailed(error.message);
}
