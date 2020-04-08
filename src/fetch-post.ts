import fetch from "node-fetch";
import { baseURL } from "./app";
import chalk from "chalk";

export default async function fetchPost(postId: string): Promise<Article> {
  const res = await fetch(`${baseURL}/articles/${postId}`);
  if (!res.ok) {
    throw `${chalk.bold.red("Error: ")} ${res.status} ${res.statusText}`;
  }

  const data: Article = await res.json();
  return data;
}
