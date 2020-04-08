import chalk from "chalk";
import fetch from "node-fetch";

export default async function initialise(apiKey: string) {
  const baseURL: string = "https://dev.to/api";
  const res = await fetch(`${baseURL}/articles`, {
    headers: {
      "api-key": apiKey.trim(),
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      article: {
        title: "This Post has 0 Positive Reactions",
        published: false,
        body_markdown: "Script Status: Not Running\n",
        tags: ["discuss", "help"],
      },
    }),
  });

  if (!res.ok) {
    console.log(chalk.bold.red("Error: ") + res.statusText);
    return;
  }

  const data = await res.json();
  console.log(chalk.green("Post created successfully"));
  console.log(chalk.bold.green("Post ID: ") + data.id);
}
