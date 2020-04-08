# Dev.to Reaction Count Bot

This bot constantly updates the title of a dev.to [post](https://dev.to/godcrampy/this-post-has-0-positive-reactions-2882) with the current positive reaction count.

## Usage

0. Get the project setup done

   `$ yarn install && yarn build`

1. Get the api keys

   `Dev.to > Settings > Account`

2. Initialize a new Project

   `$ node dist/app.js init <api-key>`

   Running the above command will get you a `post-id`

3. Run the cron job

   `$ node dist/app.js <api-key> <post-id>`
