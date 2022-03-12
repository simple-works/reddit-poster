# ![Icon](./icon.png) Reddit Poster

[![Reddit](https://img.shields.io/badge/reddit-white?logo=reddit)](https://github.com/topics/reddit)
[![JavaScript](https://img.shields.io/badge/javascript-blue?logo=javascript)](https://github.com/topics/javascript)
[![NodeJS](https://img.shields.io/badge/node-blue?logo=node.js)](https://github.com/topics/node)

A bot for 🐦 auto-posting to [Reddit](https://reddit.com).

<!-- ![Screenshot](./screenshot.gif?raw=true) -->

## 🏁 Getting Started

1. Clone the repository:

      ```bash
      cd somewhere
      git clone https://github.com/Ambratolm/reddit-poster.git
      cd reddit-poster
      ```

2. Install the dependencies:

      ```bash
      npm i
      ```

3. Install [**Nodemon**](https://github.com/remy/nodemon/) globally:

      ```bash
      npm i -g nodemon
      ```

4. Run bot for development:

      ```bash
      npm run dev
      ```

## ✈️ Deployment

> 💡 The **environment variables** are automatically retrieved from the `.env` file and registred to the `process.env` object for access during development. Use `.env-tmp` file as reference to make own personal `.env` file.

> 💡 It is [**advised**](https://github.com/motdotla/dotenv#should-i-commit-my-env-file) to not push the `.env` file in production repository, because it contains sensible and confidential data. either delete it or add it to `.gitignore`.

To deploy the project in a node environment:

1. Push the **repository** to a **node production server** using a service like [Heroku](https://heroku.com).

      > 💡 As this is not an HTTP Web app, but more like a worker process, the service should be set for that.

      > ℹ️ For Heroku run `heroku ps:scale web=0 worker=1 -a app-name` in the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

      > 💡 `worker` corresponds to the name given in the [Procfile](https://devcenter.heroku.com/articles/procfile) file.

2. Manually register the **environment variables** in the **node production server**.

      > ℹ️ For Heroku, go to the app's [_Settings_ / _Config Vars_](https://devcenter.heroku.com/articles/config-vars).

3. Install the **dependencies**:

      ```bash
      npm i
      ```
      > ℹ️ For Heroku, this is done automatically after pushing.

4. **Start** bot for production:

      ```bash
      npm start
      ```
      > ℹ️ For Heroku, this is done automatically after pushing.

> ℹ️ For Heroku deployment reference, see: [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs).

## 🚀 Development

### 🏭 Environment

- Runtime: [**NodeJS**](https://github.com/nodejs)
- Package Manager: [**NPM**](https://github.com/npm)
- Editor: [**Sublime Text**](https://www.sublimetext.com)

### 🌑 Backend

- ⚛️ Core: [**NodeJS**](https://github.com/nodejs/node)

## 📃 License

[MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)
- [Icon](./icon.png) by [Icons8](https://icons8.com)
