import process from "process";
import chalk from "chalk";
import initialise from "./initialise";
import update from "./update";
import fetchPost from "./fetch-post";
import cron from "node-cron";

export const baseURL: string = "https://dev.to/api";
const cronSchedule = "*/5 * * * * *";

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
  cron.schedule(cronSchedule, async () => {
    console.log("Start");
    try {
      const article: Article = await fetchPost(postId);
      await update(apiKey, postId, article);
    } catch (error) {
      console.log(error);
    }
  });
})();
