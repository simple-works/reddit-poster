# ![Icon](./icon.png) Reddit Poster

[![Reddit](https://img.shields.io/badge/reddit-white?logo=reddit)](https://github.com/topics/reddit)
[![JavaScript](https://img.shields.io/badge/javascript-blue?logo=javascript)](https://github.com/topics/javascript)
[![NodeJS](https://img.shields.io/badge/node-blue?logo=node.js)](https://github.com/topics/node)

A bot for 🐦 auto-posting to [Reddit](https://reddit.com).

<!-- ![Screenshot](./screenshot.gif?raw=true) -->

## 🏁 Getting Started

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the repository:

   ```bash
   cd some/where
   git clone https://github.com/Ambratolm/reddit-poster.git
   cd reddit-poster
   ```

2. Install the dependencies:

   ```bash
   npm i
   ```

3. Install [Nodemon](https://github.com/remy/nodemon/) globally:

   ```bash
   npm i -g nodemon
   ```

4. Run the bot for development:

   ```bash
   npm run dev
   ```

## ✈️ Deployment

> 💡 During **development**, the **environment variables** are automatically retrieved from the `.env` file and registred in the `process.env` object for access in code.<br/>
> 💡 Use the provided `.env-tmp` file as a reference to make your own personal `.env` file.<br/>
> 💡 It is [advised](https://github.com/motdotla/dotenv#should-i-commit-my-env-file) to not push the `.env` file in production repository, because it contains sensible and confidential data. So, either delete it or add it to `.gitignore`.

To deploy the project in a node environment:

1. Push the **repository** to a **node production server** using a service like [Heroku](https://heroku.com).

   > 💡 For Heroku, see: _[Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)_.

   > 💡 As this is **not** an HTTP Web app, but more **like** a worker process, the service should be set to run it as worker process.<br/>
   > 💡 To do it in Heroku, using the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), run `heroku ps:scale web=0 worker=1 -a app-name` .<br/>
   > 💡 `worker` corresponds to the name given in the [Procfile](https://devcenter.heroku.com/articles/procfile) file and can be renamed to anything (Unlike `web`, which is reserved for the Web process only).

2. Manually register the **environment variables** in the **node production server**.

   > 💡 For Heroku, see: _[Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars)_.

   > 💡 To do it in Heroku, using the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), run `heroku config:set VARIABLE_NAME=value -a app-name` for every variable to add.<br/>
   > 💡 Run `heroku config -a app-name` to view all variables.

   > 💡 To do it in Heroku, using the [Heroku Dashboard](https://devcenter.heroku.com/articles/heroku-dashboard), go to the app's _Settings_ / _Config Vars_.

3. Install the **dependencies** and **Start** the bot for production:

   > 💡 In Heroku, this can be done automatically everytime after pushing the repository.

   ```bash
   npm i && npm start
   ```

> 💡 In Heroku, to browse the deployed app files and folders, using the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), run `heroku run bash -a app-name` to access a terminal on the server.<br/>
> 💡 In the remote terminal, you can run `dir` to display the current directory, `cd dir-name` to change the directory, and `cat file-name` to display the content of a text file. For more, see: _[Bash Shell Reference](https://courses.cs.washington.edu/courses/cse390a/14au/bash.html)_.

## 🚀 Development

### 🏭 Environment

- Runtime: [**NodeJS**](https://github.com/nodejs)
- Package Manager: [**NPM**](https://github.com/npm)
- Editor: [**Sublime Text**](https://www.sublimetext.com)

### 🌑 Backend

- ⚛️ Core: [**NodeJS**](https://github.com/nodejs/node)

## 📃 License

- [MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)
- Using [Icon](./icon.png) by [Icons8](https://icons8.com)
