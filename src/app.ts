import process from "process";
import chalk from "chalk";
import initialise from "./initialise";
import update from "./update";

(async () => {
  // IIFE Used to get async/await on top level
  if (process.argv.length !== 4) {
    console.log(chalk.bold.blue("Usage: ") + "yarn start <api-key> <post-id>");
    process.exit(64);
  }

  const apiKey: string = process.argv[2];
  const postId: string = process.argv[3];

  if (process.argv[2] === "init") {
    // eslint-disable-next-line no-unused-vars
    await initialise(process.argv[3]);
    process.exit(0);
  }

  await update(apiKey, postId, {
    article: {
      title: "This Post has 1 Positive Reactions",
      published: false,
      body_markdown: "Script Status: Not Running\n",
    },
    // eslint-disable-next-line no-unused-vars
  });
})();
