# Rest Market application 💻

Rest market application with Node.js

## Setup your machine

### Install Yarn

Visit the official site of [yarn](https://classic.yarnpkg.com/en/docs/getting-started) and install in your machine. 🐈

### Install Postgres

**Note**: Homebrew is only for Mac OS X. 🍺

1. Install by Homebrew [Postgresql Mac](https://wiki.postgresql.org/wiki/Homebrew) or [Postgres Win](https://www.postgresql.org/download/windows/) follow the steps and add postgres to your path. 🐘
2. Go to the terminal and check if postgres was installed correctly with this command `postgres -V` you should see your postgres version in the terminal. 👨🏽‍💻
3. The next step is create your local database with this command in your terminal `createdb rest-market`.
4. I recommend you download a GUI to manage your database [Beekeeper Studio](https://www.beekeeperstudio.io/) and connect your postgres just with `rest-market` in the `Default database` section.
5. Run the migrations in your terminal `yarn migrate`.
6. Add the seeds to the project with `yarn add-seeds`.
7. OPTIONAL: If you have to delete the migrations for some mistake just run `yarn down-migrate`.

### Install postman to test your endpoints

Visit the official site of [postman](https://www.postman.com/downloads/) and download the aplication. 🚀

## How to run the project

- Clone the repo

```bash
git clone https://github.com/MagdielPm/Rest_Market.git
```

- Install the dependencies

```bash
yarn install
```

- Build the project

```bash
yarn build
```

- Run the project in developer mode

```bash
yarn dev
```

- Run the project

```bash
yarn start
```

- Run the tests

```bash
yarn test
```

Run the project and listen the response at `localhost:3000` 🚀
