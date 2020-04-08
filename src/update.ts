import chalk from "chalk";
import fetch from "node-fetch";

export default async function update(apiKey: string, postId: string, article: Object) {
  const baseURL: string = "https://dev.to/api";
  const res = await fetch(`${baseURL}/articles/${postId}`, {
    headers: {
      "api-key": apiKey.trim(),
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(article),
  });

  if (!res.ok) {
    console.log(chalk.bold.red("Error: ") + res.statusText);
    return;
  }

  console.log(chalk.bold.green(`Post updated: `) + new Date().toLocaleString());
}
