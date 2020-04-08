import chalk from "chalk";
import fetch from "node-fetch";
import { baseURL } from "./app";

export default async function update(apiKey: string, postId: string, article: Article) {
  const title: string = `This Post has ${article.positive_reactions_count} Positive Reactions`;
  const res = await fetch(`${baseURL}/articles/${postId}`, {
    headers: {
      "api-key": apiKey.trim(),
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      article: {
        title,
      },
    }),
  });

  if (!res.ok) {
    console.log(chalk.bold.red("Error: ") + res.statusText);
    return;
  }

  console.log(chalk.bold.green(`Post updated: `) + new Date().toLocaleString());
}
